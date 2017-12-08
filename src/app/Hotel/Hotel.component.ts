import {Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {TaskMagicService} from "../magic/src/services/task.magics.service";

@Component({
  selector: "mga-Hotel",
  providers: [TaskMagicService],
  styleUrls: ["./Hotel.component.css"],
  templateUrl: "./Hotel.component.html"
})
export class Hotel extends BaseTaskMagicComponent {

  loadData(): any {
    let stubData = {
      "records": {
        "data": {
          "0": {
            "values": {
              "AddHotelImg": "assets/images/Travel/hotel.png",
              "serviceAddress": "",
              "fromdateEdit": "   ,00     0000",
              "fromtimeEdit": "12:00 am",
              "todateEdit": "   ,00     0000",
              "totimeEdit": "12:00 am",
              "HotelID": "-999999",
              "BSave": "Ok"
            },
            "ControlsProperties": {
              "AddHotelImg": {
                "properties": {
                  "image": "assets/images/Travel/hotel.png",
                  "tabindex": "18"
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
                  }, {"index": "5", "realString": "Blue"}], "selectedvalue": "-999999", "tabindex": "19"
                }, "classesMap": {}, "stylesMap": {}
              },
              "BSave": {"properties": {"enabled": "0", "tabindex": "29"}, "classesMap": {}, "stylesMap": {}},
              "serviceAddress": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
              "fromdateEdit": {"properties": {"tabindex": "21"}, "classesMap": {}, "stylesMap": {}},
              "fromtimeEdit": {"properties": {"tabindex": "22"}, "classesMap": {}, "stylesMap": {}},
              "todateEdit": {"properties": {"tabindex": "23"}, "classesMap": {}, "stylesMap": {}},
              "totimeEdit": {"properties": {"tabindex": "24"}, "classesMap": {}, "stylesMap": {}}
            },
            "rowId": "0"
          }
        },
        "list": [{
          "values": {
            "AddHotelImg": "assets/images/Travel/hotel.png",
            "serviceAddress": "",
            "fromdateEdit": "   ,00     0000",
            "fromtimeEdit": "12:00 am",
            "todateEdit": "   ,00     0000",
            "totimeEdit": "12:00 am",
            "HotelID": "-999999",
            "BSave": "Ok"
          },
          "ControlsProperties": {
            "AddHotelImg": {
              "properties": {
                "image": "assets/images/Travel/hotel.png",
                "tabindex": "18"
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
                }, {"index": "5", "realString": "Blue"}], "selectedvalue": "-999999", "tabindex": "19"
              }, "classesMap": {}, "stylesMap": {}
            },
            "BSave": {"properties": {"enabled": "0", "tabindex": "29"}, "classesMap": {}, "stylesMap": {}},
            "serviceAddress": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
            "fromdateEdit": {"properties": {"tabindex": "21"}, "classesMap": {}, "stylesMap": {}},
            "fromtimeEdit": {"properties": {"tabindex": "22"}, "classesMap": {}, "stylesMap": {}},
            "todateEdit": {"properties": {"tabindex": "23"}, "classesMap": {}, "stylesMap": {}},
            "totimeEdit": {"properties": {"tabindex": "24"}, "classesMap": {}, "stylesMap": {}}
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
}
