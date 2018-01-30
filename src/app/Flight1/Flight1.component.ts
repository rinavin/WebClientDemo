import {ChangeDetectorRef, Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {TaskMagicService} from "../magic/src/services/task.magics.service";
declare let window:any;


@Component({
  selector: "mga-Flight1",
  providers: [TaskMagicService],
  styleUrls: ["./Flight1.component.css"],
  templateUrl: "./Flight1.component2.html"
})
export class Flight1 extends BaseTaskMagicComponent {

  constructor(protected ref: ChangeDetectorRef,
              protected task: TaskMagicService) {
    super(ref, task);
    window.Flight1 = this;
  }

  loadData(): any {
    let stubData = {
      "records": {
        "data": {
          "0": {
            "values": {
              "AddFlightImg": "assets/images/Travel/flight.png",
              "fromairportEdit": "",
              "airportNameFrom": "",
              "toairportEdit": "BKK",
              "airportNameTo": "Suvarnabhumi International",
              "fromdateEdit": "15-Jan-2012",
              "fromdateTimeEdit": "00:00",
              "todateEdit": "16-Jan-2012",
              "todateTimeEdit": "00:00",
              "flightnumberEdit": "454",
              "classImg": "assets/images/Travel/airline-LH.gif",
              "airline": "1",
              "BSave": "Ok"
            },
            "ControlsProperties": {
              "AddFlightImg": {
                "properties": {
                  "image": "assets/images/Travel/flight.png",
                  "tabindex": "19"
                }, "classesMap": {}, "stylesMap": {}
              },
              "SelectFlightL": {"properties": {"text": "Flight Details"}, "classesMap": {}, "stylesMap": {}},
              "OriginL": {"properties": {"text": "Origin:"}, "classesMap": {}, "stylesMap": {}},
              "DestinationL": {"properties": {"text": "Destination:"}, "classesMap": {}, "stylesMap": {}},
              "DepartureL": {"properties": {"text": "Departure:"}, "classesMap": {}, "stylesMap": {}},
              "ArrivalL": {"properties": {"text": "Arrival:"}, "classesMap": {}, "stylesMap": {}},
              "SearchSubform": {"properties": {"visible": "0"}, "classesMap": {}, "stylesMap": {}},
              "L_Flight": {"properties": {"text": "Flight:"}, "classesMap": {}, "stylesMap": {}},
              "classImg": {
                "properties": {"image": "assets/images/Travel/airline-LH.gif", "tabindex": "30"},
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
                  }, {"index": "5", "realString": "AA"}], "selectedvalue": "1", "tabindex": "28"
                }, "classesMap": {}, "stylesMap": {}
              },
              "BSave": {"properties": {"enabled": "0", "tabindex": "31"}, "classesMap": {}, "stylesMap": {}},
              "fromairportEdit": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
              "airportNameFrom": {"properties": {"tabindex": "21"}, "classesMap": {}, "stylesMap": {}},
              "toairportEdit": {"properties": {"tabindex": "22"}, "classesMap": {}, "stylesMap": {}},
              "airportNameTo": {"properties": {"tabindex": "23"}, "classesMap": {}, "stylesMap": {}},
              "fromdateEdit": {"properties": {"tabindex": "24"}, "classesMap": {}, "stylesMap": {}},
              "fromdateTimeEdit": {"properties": {"tabindex": "25"}, "classesMap": {}, "stylesMap": {}},
              "todateEdit": {"properties": {"tabindex": "26"}, "classesMap": {}, "stylesMap": {}},
              "todateTimeEdit": {"properties": {"tabindex": "27"}, "classesMap": {}, "stylesMap": {}},
              "flightnumberEdit": {"properties": {"tabindex": "29"}, "classesMap": {}, "stylesMap": {}}
            },
            "rowId": "0"
          }
        },
        "list": [{
          "values": {
            "AddFlightImg": "assets/images/Travel/flight.png",
            "fromairportEdit": "",
            "airportNameFrom": "",
            "toairportEdit": "BKK",
            "airportNameTo": "Suvarnabhumi International",
            "fromdateEdit": "15-Jan-2012",
            "fromdateTimeEdit": "00:00",
            "todateEdit": "16-Jan-2012",
            "todateTimeEdit": "00:00",
            "flightnumberEdit": "454",
            "classImg": "assets/images/Travel/airline-LH.gif",
            "airline": "1",
            "BSave": "Ok"
          },
          "ControlsProperties": {
            "AddFlightImg": {
              "properties": {
                "image": "assets/images/Travel/flight.png",
                "tabindex": "19"
              }, "classesMap": {}, "stylesMap": {}
            },
            "SelectFlightL": {"properties": {"text": "Flight Details"}, "classesMap": {}, "stylesMap": {}},
            "OriginL": {"properties": {"text": "Origin:"}, "classesMap": {}, "stylesMap": {}},
            "DestinationL": {"properties": {"text": "Destination:"}, "classesMap": {}, "stylesMap": {}},
            "DepartureL": {"properties": {"text": "Departure:"}, "classesMap": {}, "stylesMap": {}},
            "ArrivalL": {"properties": {"text": "Arrival:"}, "classesMap": {}, "stylesMap": {}},
            "SearchSubform": {"properties": {"visible": "0"}, "classesMap": {}, "stylesMap": {}},
            "L_Flight": {"properties": {"text": "Flight:"}, "classesMap": {}, "stylesMap": {}},
            "classImg": {
              "properties": {"image": "assets/images/Travel/airline-LH.gif", "tabindex": "30"},
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
                }, {"index": "5", "realString": "AA"}], "selectedvalue": "1", "tabindex": "28"
              }, "classesMap": {}, "stylesMap": {}
            },
            "BSave": {"properties": {"enabled": "0", "tabindex": "31"}, "classesMap": {}, "stylesMap": {}},
            "fromairportEdit": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
            "airportNameFrom": {"properties": {"tabindex": "21"}, "classesMap": {}, "stylesMap": {}},
            "toairportEdit": {"properties": {"tabindex": "22"}, "classesMap": {}, "stylesMap": {}},
            "airportNameTo": {"properties": {"tabindex": "23"}, "classesMap": {}, "stylesMap": {}},
            "fromdateEdit": {"properties": {"tabindex": "24"}, "classesMap": {}, "stylesMap": {}},
            "fromdateTimeEdit": {"properties": {"tabindex": "25"}, "classesMap": {}, "stylesMap": {}},
            "todateEdit": {"properties": {"tabindex": "26"}, "classesMap": {}, "stylesMap": {}},
            "todateTimeEdit": {"properties": {"tabindex": "27"}, "classesMap": {}, "stylesMap": {}},
            "flightnumberEdit": {"properties": {"tabindex": "29"}, "classesMap": {}, "stylesMap": {}}
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

  ngOnInit(){
    super.ngOnInit();
    //this.formatDates();
  }
}
