import {Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {TaskMagicService} from "../magic/src/services/task.magics.service";

@Component({
  selector: "mga-Flight1",
  providers: [TaskMagicService],
  styleUrls: ["./Flight1.component.css"],
  templateUrl: "./Flight1.component2.html"
})
export class Flight1 extends BaseTaskMagicComponent {

  loadData(): any {
    let stubData = {
      "records": {
        "data": {
          "0": {
            "values": {
              "AddFlightImg": "assets/images/Travel/flight.png",
              "fromairportEdit": "This Airport Edit",
              "airportNameFrom": "This Airport namefrom",
              "toairportEdit": "JOR",
              "airportNameTo": "The City Heliport",
              "fromdateEdit": "01-Jan-1901",
              "fromdateTimeEdit": "00:00",
              "todateEdit": "01-Jan-1901",
              "todateTimeEdit": "00:00",
              "flightnumberEdit": "432",
              "classImg": "assets/images/Travel/airline-TG.gif",
              "airline": "4",
              "BSave": "Ok"
            },
            "ControlsProperties": {
              "AddFlightImg": {
                "properties": {"image": "assets/images/Travel/flight.png", "tabindex": "18"},
                "classesMap": {},
                "stylesMap": {}
              },
              "SelectFlightL": {"properties": {"text": "Flight Details"}, "classesMap": {}, "stylesMap": {}},
              "OriginL": {"properties": {"text": "Origin:"}, "classesMap": {}, "stylesMap": {}},
              "DestinationL": {"properties": {"text": "Destination:"}, "classesMap": {}, "stylesMap": {}},
              "DepartureL": {"properties": {"text": "Departure:"}, "classesMap": {}, "stylesMap": {}},
              "ArrivalL": {"properties": {"text": "Arrival:"}, "classesMap": {}, "stylesMap": {}},
              "SearchSubform": {"properties": {"visible": "0"}, "classesMap": {}, "stylesMap": {}},
              "L_Flight": {"properties": {"text": "Flight:"}, "classesMap": {}, "stylesMap": {}},
              "classImg": {
                "properties": {"image": "assets/images/Travel/airline-TG.gif", "tabindex": "29"},
                "classesMap": {},
                "stylesMap": {}
              },
              "airline": {
                "properties": {
                  "itemslist": [{"index": "0", "realString": "DL"}, {
                    "index": "1",
                    "realString": "LH"
                  }, {"index": "2", "realString": "JL"}, {"index": "3", "realString": "QF"}, {
                    "index": "4",
                    "realString": "TG"
                  }, {"index": "5", "realString": "AA"}], "selectedvalue": "4", "tabindex": "27"
                }, "classesMap": {}, "stylesMap": {}
              },
              "BSave": {"properties": {"enabled": "0", "tabindex": "30"}, "classesMap": {}, "stylesMap": {}},
              "fromairportEdit": {"properties": {"tabindex": "19"}, "classesMap": {}, "stylesMap": {}},
              "airportNameFrom": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
              "toairportEdit": {"properties": {"tabindex": "21"}, "classesMap": {}, "stylesMap": {}},
              "airportNameTo": {"properties": {"tabindex": "22"}, "classesMap": {}, "stylesMap": {}},
              "fromdateEdit": {"properties": {"tabindex": "23"}, "classesMap": {}, "stylesMap": {}},
              "fromdateTimeEdit": {"properties": {"tabindex": "24"}, "classesMap": {}, "stylesMap": {}},
              "todateEdit": {"properties": {"tabindex": "25"}, "classesMap": {}, "stylesMap": {}},
              "todateTimeEdit": {"properties": {"tabindex": "26"}, "classesMap": {}, "stylesMap": {}},
              "flightnumberEdit": {"properties": {"tabindex": "28"}, "classesMap": {}, "stylesMap": {}}
            },
            "rowId": "0"
          }
        },
        "list": [{
          "values": {
            "AddFlightImg": "assets/images/Travel/flight.png",
            "fromairportEdit": "This Airport Edit 2",
            "airportNameFrom": "This Airport namefrom 2",
            "toairportEdit": "JOR",
            "airportNameTo": "The City Heliport",
            "fromdateEdit": "01-Jan-1901",
            "fromdateTimeEdit": "00:00",
            "todateEdit": "01-Jan-1901",
            "todateTimeEdit": "00:00",
            "flightnumberEdit": "747",
            "classImg": "assets/images/Travel/airline-TG.gif",
            "airline": "4",
            "BSave": "Ok"
          },
          "ControlsProperties": {
            "AddFlightImg": {
              "properties": {"image": "assets/images/Travel/flight.png", "tabindex": "18"},
              "classesMap": {},
              "stylesMap": {}
            },
            "SelectFlightL": {"properties": {"text": "Flight Details"}, "classesMap": {}, "stylesMap": {}},
            "OriginL": {"properties": {"text": "Origin:"}, "classesMap": {}, "stylesMap": {}},
            "DestinationL": {"properties": {"text": "Destination:"}, "classesMap": {}, "stylesMap": {}},
            "DepartureL": {"properties": {"text": "Departure:"}, "classesMap": {}, "stylesMap": {}},
            "ArrivalL": {"properties": {"text": "Arrival:"}, "classesMap": {}, "stylesMap": {}},
            "SearchSubform": {"properties": {"visible": "0"}, "classesMap": {}, "stylesMap": {}},
            "L_Flight": {"properties": {"text": "Flight:"}, "classesMap": {}, "stylesMap": {}},
            "classImg": {
              "properties": {"image": "assets/images/Travel/airline-TG.gif", "tabindex": "29"},
              "classesMap": {},
              "stylesMap": {}
            },
            "airline": {
              "properties": {
                "itemslist": [{"index": "0", "realString": "DL"}, {"index": "1", "realString": "LH"}, {
                  "index": "2",
                  "realString": "JL"
                }, {"index": "3", "realString": "QF"}, {"index": "4", "realString": "TG"}, {"index": "5", "realString": "AA"}],
                "selectedvalue": "4",
                "tabindex": "27"
              }, "classesMap": {}, "stylesMap": {}
            },
            "BSave": {"properties": {"enabled": "0", "tabindex": "30"}, "classesMap": {}, "stylesMap": {}},
            "fromairportEdit": {"properties": {"tabindex": "19"}, "classesMap": {}, "stylesMap": {}},
            "airportNameFrom": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
            "toairportEdit": {"properties": {"tabindex": "21"}, "classesMap": {}, "stylesMap": {}},
            "airportNameTo": {"properties": {"tabindex": "22"}, "classesMap": {}, "stylesMap": {}},
            "fromdateEdit": {"properties": {"tabindex": "23"}, "classesMap": {}, "stylesMap": {}},
            "fromdateTimeEdit": {"properties": {"tabindex": "24"}, "classesMap": {}, "stylesMap": {}},
            "todateEdit": {"properties": {"tabindex": "25"}, "classesMap": {}, "stylesMap": {}},
            "todateTimeEdit": {"properties": {"tabindex": "26"}, "classesMap": {}, "stylesMap": {}},
            "flightnumberEdit": {"properties": {"tabindex": "28"}, "classesMap": {}, "stylesMap": {}}
          },
          "rowId": "0"
        }]
      },
      "template": {
        "fromairportEdit": "0",
        "airportNameFrom": "0",
        "toairportEdit": "0",
        "airportNameTo": "0",
        "fromdateEdit": "0",
        "fromdateTimeEdit": "0",
        "todateEdit": "0",
        "todateTimeEdit": "0",
        "flightnumberEdit": "0",
        "airline": "0",
        "BSave": "0"
      }
    };
    this.loadStubData(stubData);

  }
}
