import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-Hotel",
	providers: [TaskMagicService],
	styleUrls: ["./Hotel.component.css"],
	templateUrl: "./Hotel.component.html"
})
export class Hotel extends BaseTaskMagicComponent {

  loadData():any   {
    let stubData = {"records":{"data":{"0":{"values":{"image1":"assets/images/Travel/","image2":"assets/images/Travel/","image3":"assets/images/Travel/","image4":"assets/images/Travel/"},"ControlsProperties":{"image1":{"properties":{"image":"assets/images/Travel/","tabindex":"25"},"classesMap":{},"stylesMap":{}},"image2":{"properties":{"image":"assets/images/Travel/","tabindex":"26"},"classesMap":{},"stylesMap":{}},"image3":{"properties":{"image":"assets/images/Travel/","tabindex":"27"},"classesMap":{},"stylesMap":{}},"image4":{"properties":{"image":"assets/images/Travel/","tabindex":"28"},"classesMap":{},"stylesMap":{}}},"rowId":"0"}},"list":[{"values":{"image1":"assets/images/Travel/","image2":"assets/images/Travel/","image3":"assets/images/Travel/","image4":"assets/images/Travel/"},"ControlsProperties":{"image1":{"properties":{"image":"assets/images/Travel/","tabindex":"25"},"classesMap":{},"stylesMap":{}},"image2":{"properties":{"image":"assets/images/Travel/","tabindex":"26"},"classesMap":{},"stylesMap":{}},"image3":{"properties":{"image":"assets/images/Travel/","tabindex":"27"},"classesMap":{},"stylesMap":{}},"image4":{"properties":{"image":"assets/images/Travel/","tabindex":"28"},"classesMap":{},"stylesMap":{}}},"rowId":"0"}]},"template":{}};
    this.loadStubData(stubData);}
}
