import {Injectable} from "@angular/core";
import {MagicEngine} from "./magic.engine";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {HtmlProperties, Records} from "../controls.metadata.model";
import {isNullOrUndefined} from "util";
import {Subject} from "rxjs/Subject";
import {GuiCommand} from "../ui/gui.command";

@Injectable()
export class TaskMagicService {

  Records: any = new Records();
  rows: Array<FormGroup> = [];
  ScreenModeControls: FormGroup;
  refreshDom: Subject<GuiCommand> = new Subject();
  protected template: { [id: string]: string; };

  constructor(protected magic: MagicEngine) {

  }

  _taskId: string;

  get taskId() {
    return this._taskId;
  }

  set taskId(value) {
    // debugger;
    this._taskId = value;
  }

  get ScreenControlsData() {
    return this.Records.list["0"];
  }


  settemplate(value: any) {
    this.template = value;
  }

  buildScreenModeControls() {
    const group: FormGroup = new FormGroup({});
    for (const key in this.template) {

      if (this.template[key] == '0')
        group.addControl(key, new FormControl(''));
    }

    this.ScreenModeControls = group;
  }

  isTableControl(id: string): boolean {
    return this.template[id] == '1';
  }

  getFormControl(rowId: string, id: string): AbstractControl {
    let c: AbstractControl;
    let group: FormGroup = this.isTableControl(id) ? this.rows[rowId] : this.ScreenModeControls;
    if (group.contains(id))
      c = group.controls[id];
    return c;
  }


  buildTableRowControls() {
    const group: FormGroup = new FormGroup({});

    for (const key in this.template) {

      if (this.template[key] == '1')
        group.addControl(key, new FormControl(''));
    }

    this.rows.push(group);
  }

  updateTableSize(size: number) {

    if (size == 0) //never remove row 0 for now
      size = 1;
    if (size < this.rows.length)
      this.rows.length = size;
    else {
      for (let i = this.rows.length; i < size; i++)
        this.buildTableRowControls();
    }

    this.Records.updateSize(size);
  }

  initTask() {
    this.magic.refreshDom
      .filter(command => command.TaskTag == this.taskId)
      .subscribe(command => {
        // console.log("Task " + command.TaskTag + "command " + command.CommandType);
        this.refreshDom.next(command);
      });

  }

  getTaskId(parentId, subformName): string {
    return this.magic.getTaskId(parentId, subformName);
  }


  insertEvent(eventName: string, controlIdx: string, lineidx: string) {
    this.magic.insertEvent(this.taskId, eventName, controlIdx, lineidx);
  }


  registerGetValueCallback(cb) {
    this.magic.registerGetValueCallback(this.taskId, cb);
  }


  getProperty(controlId: string, prop: HtmlProperties, rowId?: string) {
    if (isNullOrUndefined(rowId))
      rowId = "0";
    if (this.IsStub())
      return this.getPropertyStub(this.Records.list[rowId], controlId, prop);
    else
    return this.Records.list[rowId].getProperty(controlId, prop);
  }

  getPropertyStub(ControlsProperties: any, controlId, prop) {
    ControlsProperties = ControlsProperties.ControlsProperties;
    if ( controlId in ControlsProperties) {
      if (prop in ControlsProperties[controlId].properties) {
        return ControlsProperties[controlId].properties[prop];
      }
    }
    return "";
  }

  getClasses(controlId: string, rowId?: string): string {
    if (isNullOrUndefined(rowId))
      rowId = "0";
    return this.Records.list[rowId].getControlMetadata(controlId).classes;

  }

  getStyle(controlId: string, styleName:string, rowId?: string): string {
    if (isNullOrUndefined(rowId))
      rowId = "0";
    return this.Records.list[rowId].getControlMetadata(controlId).stylesMap[styleName];

  }

  getValue(controlId: string, rowId?: string) {
    if (isNullOrUndefined(rowId))
      rowId = '0';

      return this.Records.list[rowId].values[controlId];
   // return this.Records.list[rowId].getValue(controlId);
  }

  saveData(data:string)
  {
    this.magic.saveData(data);
  }

  IsStub():boolean
{
  return this.magic.isStub;

}
  public createData()
  {
    let myData = {
      records: this.Records,
      template: this.template,
    };
     let text:string = "export const stubData = " + JSON.stringify(myData) ;
     console.log(text);
    this.saveData(text);

  }

}

