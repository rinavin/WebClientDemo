import {ChangeDetectorRef, Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {TaskMagicService} from "../magic/src/services/task.magics.service";

import * as moment from "moment"

declare let window;

const dateFields = ['fromtimeEdit', 'totimeEdit'];

@Component({
  selector: "mga-Hotel",
  providers: [TaskMagicService],
  styleUrls: ["./Hotel.component.css"],
  templateUrl: "./Hotel.component.html"
})
export class Hotel extends BaseTaskMagicComponent {

  constructor(protected ref: ChangeDetectorRef,
              protected task: TaskMagicService) {
    super(ref, task);

    window.Hotel = this;
    window.moment = moment;

    // dateFields.forEach(f=>{
    //   let control = this.screenFormGroup.controls[f];
    //
    //   control.setValue(moment(control.value, 'hh:mm'))
    //
    //
    // })

  }

  loadData(): any {
    let stubData = {
      "records": {
        "data": {
          "0": {
            "values": {
              "AddHotelImg": "assets/images/Travel/hotel.png",
              "serviceAddress": "Duxton Hotel Perth",
              "fromdateEdit": "Mon,14 Nov 2011",
              "fromtimeEdit": "01:00 pm",
              "todateEdit": "Wed,16 Nov 2011",
              "totimeEdit": "01:00 pm",
              "HotelID": "4",
              "BSave": "Ok"
            },
            "ControlsProperties": {
              "AddHotelImg": {
                "properties": {
                  "image": "assets/images/Travel/hotel.png",
                  "tabindex": "19"
                }, "classesMap": {}, "stylesMap": {}
              },
              "SelectFlightL": {"properties": {"text": "Hotel Details"}, "classesMap": {}, "stylesMap": {}},
              "CheckInL": {"properties": {"text": "Check-In:"}, "classesMap": {}, "stylesMap": {}},
              "CheckOutL": {"properties": {"text": "Check-Out:"}, "classesMap": {}, "stylesMap": {}},
              "HotelID": {
                "properties": {
                  "itemslist": [{"index": "0", "realString": "Sheraton"}, {
                    "index": "1",
                    "realString": "Ritz"
                  }, {"index": "2", "realString": "Langham"}, {"index": "3", "realString": "Peninsula"}, {
                    "index": "4",
                    "realString": "Duxton"
                  }, {"index": "5", "realString": "Blue"}], "selectedvalue": "4", "tabindex": "20"
                }, "classesMap": {}, "stylesMap": {}
              },
              "BSave": {"properties": {"enabled": "1", "tabindex": "30"}, "classesMap": {}, "stylesMap": {}},
              "serviceAddress": {"properties": {"tabindex": "21"}, "classesMap": {}, "stylesMap": {}},
              "fromdateEdit": {"properties": {"tabindex": "22"}, "classesMap": {}, "stylesMap": {}},
              "fromtimeEdit": {"properties": {"tabindex": "23"}, "classesMap": {}, "stylesMap": {}},
              "todateEdit": {"properties": {"tabindex": "24"}, "classesMap": {}, "stylesMap": {}},
              "totimeEdit": {"properties": {"tabindex": "25"}, "classesMap": {}, "stylesMap": {}}
            },
            "rowId": "0"
          }
        },
        "list": [{
          "values": {
            "AddHotelImg": "assets/images/Travel/hotel.png",
            "serviceAddress": "Duxton Hotel Perth",
            "fromdateEdit": "Mon,14 Nov 2011",
            "fromtimeEdit": "01:00 pm",
            "todateEdit": "Wed,16 Nov 2011",
            "totimeEdit": "01:00 pm",
            "HotelID": "4",
            "BSave": "Ok"
          },
          "ControlsProperties": {
            "AddHotelImg": {
              "properties": {
                "image": "assets/images/Travel/hotel.png",
                "tabindex": "19"
              }, "classesMap": {}, "stylesMap": {}
            },
            "SelectFlightL": {"properties": {"text": "Hotel Details"}, "classesMap": {}, "stylesMap": {}},
            "CheckInL": {"properties": {"text": "Check-In:"}, "classesMap": {}, "stylesMap": {}},
            "CheckOutL": {"properties": {"text": "Check-Out:"}, "classesMap": {}, "stylesMap": {}},
            "HotelID": {
              "properties": {
                "itemslist": [{"index": "0", "realString": "Sheraton"}, {
                  "index": "1",
                  "realString": "Ritz"
                }, {"index": "2", "realString": "Langham"}, {"index": "3", "realString": "Peninsula"}, {
                  "index": "4",
                  "realString": "Duxton"
                }, {"index": "5", "realString": "Blue"}], "selectedvalue": "4", "tabindex": "20"
              }, "classesMap": {}, "stylesMap": {}
            },
            "BSave": {"properties": {"enabled": "1", "tabindex": "30"}, "classesMap": {}, "stylesMap": {}},
            "serviceAddress": {"properties": {"tabindex": "21"}, "classesMap": {}, "stylesMap": {}},
            "fromdateEdit": {"properties": {"tabindex": "22"}, "classesMap": {}, "stylesMap": {}},
            "fromtimeEdit": {"properties": {"tabindex": "23"}, "classesMap": {}, "stylesMap": {}},
            "todateEdit": {"properties": {"tabindex": "24"}, "classesMap": {}, "stylesMap": {}},
            "totimeEdit": {"properties": {"tabindex": "25"}, "classesMap": {}, "stylesMap": {}}
          },
          "rowId": "0"
        }]
      },
      "template": {
        "serviceAddress": "0",
        "fromdateEdit": "0",
        "fromtimeEdit": "0",
        "todateEdit": "0",
        "totimeEdit": "0",
        "HotelID": "0",
        "BSave": "0"
      }
    };
    this.loadStubData(stubData);
  }
  ngOnInit(){
    super.ngOnInit();
    //this.formatDates();
  }

}
