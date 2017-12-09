import {Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {TaskMagicService} from "../magic/src/services/task.magics.service";

@Component({
  selector: "mga-Rest",
  providers: [TaskMagicService],
  styleUrls: ["./Rest.component.css"],
  templateUrl: "./Rest.component2.html"
})
export class Rest extends BaseTaskMagicComponent {
  loadData(): any {
    let stubData = {
      "records": {
        "data": {
          "0": {
            "values": {
              "AddFlightImg": "assets/images/Travel/restaurant.png",
              "classImg": "assets/images/Travel/rest.png",
              "serviceAddress": "London",
              "RestoFromTime": "00:00",
              "fromdateEdit": "16-Nov-11",
              "fromairportCmb": "0",
              "BSave": "Ok"
            },
            "ControlsProperties": {
              "AddFlightImg": {
                "properties": {"image": "assets/images/Travel/restaurant.png", "tabindex": "18"},
                "classesMap": {},
                "stylesMap": {}
              },
              "SelectFlightL": {"properties": {"text": "Restaurant Details"}, "classesMap": {}, "stylesMap": {}},
              "classImg": {"properties": {"visible": "0", "tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
              "ReservationL": {"properties": {"text": "Reservation:"}, "classesMap": {}, "stylesMap": {}},
              "fromairportCmb": {
                "properties": {
                  "itemslist": [{"index": "0", "realString": "Ledbury"}, {
                    "index": "1",
                    "realString": "Takashi"
                  }, {"index": "2", "realString": "Takashi"}, {"index": "3", "realString": "Foods"}, {
                    "index": "4",
                    "realString": "Pune Resto"
                  }], "selectedvalue": "0", "tabindex": "19"
                }, "classesMap": {}, "stylesMap": {}
              },
              "BSave": {"properties": {"enabled": "1", "tabindex": "28"}, "classesMap": {}, "stylesMap": {}},
              "serviceAddress": {"properties": {"tabindex": "21"}, "classesMap": {}, "stylesMap": {}},
              "RestoFromTime": {"properties": {"tabindex": "22"}, "classesMap": {}, "stylesMap": {}},
              "fromdateEdit": {"properties": {"tabindex": "23"}, "classesMap": {}, "stylesMap": {}}
            },
            "rowId": "0"
          }
        },
        "list": [{
          "values": {
            "AddFlightImg": "assets/images/Travel/restaurant.png",
            "classImg": "assets/images/Travel/rest.png",
            "serviceAddress": "London",
            "RestoFromTime": "00:00",
            "fromdateEdit": "16-Nov-11",
            "fromairportCmb": "0",
            "BSave": "Ok"
          },
          "ControlsProperties": {
            "AddFlightImg": {
              "properties": {"image": "assets/images/Travel/restaurant.png", "tabindex": "18"},
              "classesMap": {},
              "stylesMap": {}
            },
            "SelectFlightL": {"properties": {"text": "Restaurant Details"}, "classesMap": {}, "stylesMap": {}},
            "classImg": {"properties": {"visible": "0", "tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
            "ReservationL": {"properties": {"text": "Reservation:"}, "classesMap": {}, "stylesMap": {}},
            "fromairportCmb": {
              "properties": {
                "itemslist": [{"index": "0", "realString": "Ledbury"}, {
                  "index": "1",
                  "realString": "Takashi"
                }, {"index": "2", "realString": "Takashi"}, {"index": "3", "realString": "Foods"}, {
                  "index": "4",
                  "realString": "Pune Resto"
                }], "selectedvalue": "0", "tabindex": "19"
              }, "classesMap": {}, "stylesMap": {}
            },
            "BSave": {"properties": {"enabled": "1", "tabindex": "28"}, "classesMap": {}, "stylesMap": {}},
            "serviceAddress": {"properties": {"tabindex": "21"}, "classesMap": {}, "stylesMap": {}},
            "RestoFromTime": {"properties": {"tabindex": "22"}, "classesMap": {}, "stylesMap": {}},
            "fromdateEdit": {"properties": {"tabindex": "23"}, "classesMap": {}, "stylesMap": {}}
          },
          "rowId": "0"
        }]
      }, "template": {"serviceAddress": "0", "RestoFromTime": "0", "fromdateEdit": "0", "fromairportCmb": "0", "BSave": "0"}
    };
    this.loadStubData(stubData);
  }
}
