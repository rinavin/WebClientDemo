import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-EditTravelRequestEntries",
	providers: [TaskMagicService],
	styleUrls: ["./EditTravelRequestEntries.component.css"],
	templateUrl: "./EditTravelRequestEntries.component.html"
})


export class EditTravelRequestEntries extends BaseTaskMagicComponent {


  loadData(): any {
    let stubData = {
      "records": {
        "data": {
          "0": {
            "values": {
              "BckPckImg": "assets/images/Travel/Package190356-9046.png",
              "DescriptionScreen": "Visit to Israel",
              "DepartureDateScreen": "01 Dec",
              "ArrivalDateScreen": "01 Jan",
              "AddFlightImg": "assets/images/Travel/flight.png",
              "AddHotelImg": "assets/images/Travel/hotel.png",
              "AddCarImg": "assets/images/Travel/car.png",
              "AddRestoImg": "assets/images/Travel/restaurant.png",
              "flight": "assets/images/Travel/flight.png",
              "RDescription": "01Jan -DZX TG/",
              "flightLogo": "assets/images/Travel/airline-tg.gif",
              "BBack": "<< Back",
              "BAddFlight": "Add Flight",
              "BAddRestaurant": "Add Restaurant",
              "BAddHotel": "Add Hotel",
              "BAddCar": "Add Car Rental",
              "BEdit": "Edit",
              "BDelete": "Delete"
            },
            "ControlsProperties": {
              "BckPckImg": {
                "properties": {
                  "image": "assets/images/Travel/Package190356-9046.png",
                  "tabindex": "8"
                }, "classesMap": {}, "stylesMap": {}
              },
              "AddFlightImg": {
                "properties": {"image": "assets/images/Travel/flight.png", "tabindex": "12"},
                "classesMap": {},
                "stylesMap": {}
              },
              "AddHotelImg": {
                "properties": {"image": "assets/images/Travel/hotel.png", "tabindex": "13"},
                "classesMap": {},
                "stylesMap": {}
              },
              "AddCarImg": {
                "properties": {"image": "assets/images/Travel/car.png", "tabindex": "14"},
                "classesMap": {},
                "stylesMap": {}
              },
              "AddRestoImg": {
                "properties": {"image": "assets/images/Travel/restaurant.png", "tabindex": "15"},
                "classesMap": {},
                "stylesMap": {}
              },
              "flight": {
                "properties": {"image": "assets/images/Travel/flight.png", "tabindex": "16"},
                "classesMap": {},
                "stylesMap": {}
              },
              "flightLogo": {
                "properties": {
                  "image": "assets/images/Travel/airline-tg.gif",
                  "tooltip": "assets/images/Travel",
                  "tabindex": "18"
                }, "classesMap": {}, "stylesMap": {}
              },
              "DescriptionScreen": {"properties": {"tabindex": "9"}, "classesMap": {}, "stylesMap": {}},
              "DepartureDateScreen": {"properties": {"tabindex": "10"}, "classesMap": {}, "stylesMap": {}},
              "ArrivalDateScreen": {"properties": {"tabindex": "11"}, "classesMap": {}, "stylesMap": {}},
              "BBack": {"properties": {"tabindex": "34"}, "classesMap": {}, "stylesMap": {}},
              "BAddFlight": {"properties": {"tabindex": "35"}, "classesMap": {}, "stylesMap": {}},
              "BAddRestaurant": {"properties": {"tabindex": "36"}, "classesMap": {}, "stylesMap": {}},
              "BAddHotel": {"properties": {"tabindex": "37"}, "classesMap": {}, "stylesMap": {}},
              "BAddCar": {"properties": {"tabindex": "38"}, "classesMap": {}, "stylesMap": {}},
              "bottomlabel": {"properties": {"text": "TG/"}, "classesMap": {}, "stylesMap": {}},
              "BEdit": {"properties": {"enabled": "1", "tabindex": "32"}, "classesMap": {}, "stylesMap": {}},
              "TableEditRequestEntries": {"properties": {"selectedRow": "0"}, "classesMap": {}, "stylesMap": {}},
              "RDescription": {"properties": {"tabindex": "17"}, "classesMap": {}, "stylesMap": {}},
              "BDelete": {"properties": {"tabindex": "33"}, "classesMap": {}, "stylesMap": {}}
            },
            "rowId": "0"
          },
          "1": {
            "values": {
              "flight": "assets/images/Travel/restaurant.png",
              "RDescription": "12:30-00:00 BB House",
              "flightLogo": "assets/images/Travel/resta-takashi.png",
              "BEdit": "Edit",
              "BDelete": "Delete"
            },
            "ControlsProperties": {
              "flight": {
                "properties": {
                  "tabindex": "16",
                  "image": "assets/images/Travel/restaurant.png"
                }, "classesMap": {}, "stylesMap": {}
              },
              "RDescription": {"properties": {"tabindex": "17"}, "classesMap": {}, "stylesMap": {}},
              "flightLogo": {
                "properties": {
                  "tabindex": "18",
                  "tooltip": "assets/images/Travel",
                  "image": "assets/images/Travel/resta-takashi.png"
                }, "classesMap": {}, "stylesMap": {}
              },
              "BEdit": {"properties": {"tabindex": "32", "enabled": "1"}, "classesMap": {}, "stylesMap": {}},
              "BDelete": {"properties": {"tabindex": "33"}, "classesMap": {}, "stylesMap": {}},
              "bottomlabel": {"properties": {"text": "02 Jan-01 Jan"}, "classesMap": {}, "stylesMap": {}}
            },
            "rowId": "1"
          },
          "2": {
            "values": {
              "flight": "assets/images/Travel/hotel.png",
              "RDescription": "01Jan-03Jan Blue",
              "flightLogo": "assets/images/Travel/hotel-duxton.png",
              "BEdit": "Edit",
              "BDelete": "Delete"
            },
            "ControlsProperties": {
              "flight": {
                "properties": {"tabindex": "16", "image": "assets/images/Travel/hotel.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "RDescription": {"properties": {"tabindex": "17"}, "classesMap": {}, "stylesMap": {}},
              "flightLogo": {
                "properties": {
                  "tabindex": "18",
                  "tooltip": "assets/images/Travel",
                  "image": "assets/images/Travel/hotel-duxton.png"
                }, "classesMap": {}, "stylesMap": {}
              },
              "BEdit": {"properties": {"tabindex": "32", "enabled": "1"}, "classesMap": {}, "stylesMap": {}},
              "BDelete": {"properties": {"tabindex": "33"}, "classesMap": {}, "stylesMap": {}},
              "bottomlabel": {"properties": {"text": "01 Jan-03 Jan"}, "classesMap": {}, "stylesMap": {}}
            },
            "rowId": "2"
          }
        },
        "list": [{
          "values": {
            "BckPckImg": "assets/images/Travel/Package190356-9046.png",
            "DescriptionScreen": "Visit to Israel",
            "DepartureDateScreen": "01 Dec",
            "ArrivalDateScreen": "01 Jan",
            "AddFlightImg": "assets/images/Travel/flight.png",
            "AddHotelImg": "assets/images/Travel/hotel.png",
            "AddCarImg": "assets/images/Travel/car.png",
            "AddRestoImg": "assets/images/Travel/restaurant.png",
            "flight": "assets/images/Travel/flight.png",
            "RDescription": "01Jan -DZX TG/",
            "flightLogo": "assets/images/Travel/airline-tg.gif",
            "BBack": "<< Back",
            "BAddFlight": "Add Flight",
            "BAddRestaurant": "Add Restaurant",
            "BAddHotel": "Add Hotel",
            "BAddCar": "Add Car Rental",
            "BEdit": "Edit",
            "BDelete": "Delete"
          },
          "ControlsProperties": {
            "BckPckImg": {
              "properties": {
                "image": "assets/images/Travel/Package190356-9046.png",
                "tabindex": "8"
              }, "classesMap": {}, "stylesMap": {}
            },
            "AddFlightImg": {
              "properties": {"image": "assets/images/Travel/flight.png", "tabindex": "12"},
              "classesMap": {},
              "stylesMap": {}
            },
            "AddHotelImg": {
              "properties": {"image": "assets/images/Travel/hotel.png", "tabindex": "13"},
              "classesMap": {},
              "stylesMap": {}
            },
            "AddCarImg": {
              "properties": {"image": "assets/images/Travel/car.png", "tabindex": "14"},
              "classesMap": {},
              "stylesMap": {}
            },
            "AddRestoImg": {
              "properties": {"image": "assets/images/Travel/restaurant.png", "tabindex": "15"},
              "classesMap": {},
              "stylesMap": {}
            },
            "flight": {
              "properties": {"image": "assets/images/Travel/flight.png", "tabindex": "16"},
              "classesMap": {},
              "stylesMap": {}
            },
            "flightLogo": {
              "properties": {
                "image": "assets/images/Travel/airline-tg.gif",
                "tooltip": "assets/images/Travel",
                "tabindex": "18"
              }, "classesMap": {}, "stylesMap": {}
            },
            "DescriptionScreen": {"properties": {"tabindex": "9"}, "classesMap": {}, "stylesMap": {}},
            "DepartureDateScreen": {"properties": {"tabindex": "10"}, "classesMap": {}, "stylesMap": {}},
            "ArrivalDateScreen": {"properties": {"tabindex": "11"}, "classesMap": {}, "stylesMap": {}},
            "BBack": {"properties": {"tabindex": "34"}, "classesMap": {}, "stylesMap": {}},
            "BAddFlight": {"properties": {"tabindex": "35"}, "classesMap": {}, "stylesMap": {}},
            "BAddRestaurant": {"properties": {"tabindex": "36"}, "classesMap": {}, "stylesMap": {}},
            "BAddHotel": {"properties": {"tabindex": "37"}, "classesMap": {}, "stylesMap": {}},
            "BAddCar": {"properties": {"tabindex": "38"}, "classesMap": {}, "stylesMap": {}},
            "bottomlabel": {"properties": {"text": "TG/"}, "classesMap": {}, "stylesMap": {}},
            "BEdit": {"properties": {"enabled": "1", "tabindex": "32"}, "classesMap": {}, "stylesMap": {}},
            "TableEditRequestEntries": {"properties": {"selectedRow": "0"}, "classesMap": {}, "stylesMap": {}},
            "RDescription": {"properties": {"tabindex": "17"}, "classesMap": {}, "stylesMap": {}},
            "BDelete": {"properties": {"tabindex": "33"}, "classesMap": {}, "stylesMap": {}}
          },
          "rowId": "0"
        }, {
          "values": {
            "flight": "assets/images/Travel/restaurant.png",
            "RDescription": "12:30-00:00 BB House",
            "flightLogo": "assets/images/Travel/resta-takashi.png",
            "BEdit": "Edit",
            "BDelete": "Delete"
          },
          "ControlsProperties": {
            "flight": {
              "properties": {
                "tabindex": "16",
                "image": "assets/images/Travel/restaurant.png"
              }, "classesMap": {}, "stylesMap": {}
            },
            "RDescription": {"properties": {"tabindex": "17"}, "classesMap": {}, "stylesMap": {}},
            "flightLogo": {
              "properties": {
                "tabindex": "18",
                "tooltip": "assets/images/Travel",
                "image": "assets/images/Travel/resta-takashi.png"
              }, "classesMap": {}, "stylesMap": {}
            },
            "BEdit": {"properties": {"tabindex": "32", "enabled": "1"}, "classesMap": {}, "stylesMap": {}},
            "BDelete": {"properties": {"tabindex": "33"}, "classesMap": {}, "stylesMap": {}},
            "bottomlabel": {"properties": {"text": "02 Jan-01 Jan"}, "classesMap": {}, "stylesMap": {}}
          },
          "rowId": "1"
        }, {
          "values": {
            "flight": "assets/images/Travel/hotel.png",
            "RDescription": "01Jan-03Jan Blue",
            "flightLogo": "assets/images/Travel/hotel-duxton.png",
            "BEdit": "Edit",
            "BDelete": "Delete"
          },
          "ControlsProperties": {
            "flight": {
              "properties": {"tabindex": "16", "image": "assets/images/Travel/hotel.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "RDescription": {"properties": {"tabindex": "17"}, "classesMap": {}, "stylesMap": {}},
            "flightLogo": {
              "properties": {
                "tabindex": "18",
                "tooltip": "assets/images/Travel",
                "image": "assets/images/Travel/hotel-duxton.png"
              }, "classesMap": {}, "stylesMap": {}
            },
            "BEdit": {"properties": {"tabindex": "32", "enabled": "1"}, "classesMap": {}, "stylesMap": {}},
            "BDelete": {"properties": {"tabindex": "33"}, "classesMap": {}, "stylesMap": {}},
            "bottomlabel": {"properties": {"text": "01 Jan-03 Jan"}, "classesMap": {}, "stylesMap": {}}
          },
          "rowId": "2"
        }]
      },
      "template": {
        "DescriptionScreen": "0",
        "DepartureDateScreen": "0",
        "ArrivalDateScreen": "0",
        "RDescription": "1",
        "BBack": "0",
        "BAddFlight": "0",
        "BAddRestaurant": "0",
        "BAddHotel": "0",
        "BAddCar": "0"
      }
    };
    this.loadStubData(stubData);
  }

   getTableRowClass(row:string):string
   {

     // console.log(row);
      if (this.isRowSelected('TableEditRequestEntries', row))
       return "list-item-form-selected";
      else
        return "list-item-form";
   }
}
