import {Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {TaskMagicService} from "../magic/src/services/task.magics.service";

@Component({
  selector: "mga-YourTravelRequests",
  providers: [TaskMagicService],
  styleUrls: ["./YourTravelRequests.component.css"],
  templateUrl: "./YourTravelRequests.component.html"
})
export class YourTravelRequests extends BaseTaskMagicComponent {
  loadData(): any {
    let stubData = {
      "records": {
        "data": {
          "0": {
            "values": {
              "AddPlusImg": "assets/images/Travel/plus.png",
              "backgroundImage": "assets/images/Travel/Package190356-9046.png",
              "l_Record#": "9046",
              "DepartureDate": "01 Dec",
              "ArrivalDate": "01 Jan",
              "takeoff": "assets/images/Travel/depart.png",
              "land": "assets/images/Travel/arrive.png",
              "Ellipse": "assets/images/Travel/Ellipse 3.png",
              "FlightImg": "assets/images/Travel/flight.png",
              "HotelImg": "assets/images/Travel/hotel.png",
              "CarImg": "assets/images/Travel/car.png",
              "RestoImg": "assets/images/Travel/restaurant.png",
              "BEdit": "Edit",
              "BDelete": "Delete"
            },
            "ControlsProperties": {
              "AddPlusImg": {
                "properties": {"image": "assets/images/Travel/plus.png", "tabindex": "21"},
                "classesMap": {},
                "stylesMap": {}
              },
              "backgroundImage": {
                "properties": {"image": "assets/images/Travel/Package190356-9046.png", "tabindex": "8"},
                "classesMap": {},
                "stylesMap": {}
              },
              "takeoff": {
                "properties": {"image": "assets/images/Travel/depart.png", "tabindex": "11"},
                "classesMap": {},
                "stylesMap": {}
              },
              "land": {
                "properties": {"image": "assets/images/Travel/arrive.png", "tabindex": "12"},
                "classesMap": {},
                "stylesMap": {}
              },
              "Ellipse": {
                "properties": {"image": "assets/images/Travel/Ellipse 3.png", "tabindex": "13"},
                "classesMap": {},
                "stylesMap": {}
              },
              "FlightImg": {
                "properties": {"image": "assets/images/Travel/flight.png", "visible": "1", "tabindex": "14"},
                "classesMap": {},
                "stylesMap": {}
              },
              "HotelImg": {
                "properties": {"image": "assets/images/Travel/hotel.png", "visible": "1", "tabindex": "15"},
                "classesMap": {},
                "stylesMap": {}
              },
              "CarImg": {
                "properties": {"image": "assets/images/Travel/car.png", "visible": "0", "tabindex": "16"},
                "classesMap": {},
                "stylesMap": {}
              },
              "RestoImg": {
                "properties": {"image": "assets/images/Travel/restaurant.png", "visible": "1", "tabindex": "17"},
                "classesMap": {},
                "stylesMap": {}
              },
              "DescriptionText": {
                "properties": {"text": "Visit to Israel                                                                                                                                                                                         "},
                "classesMap": {},
                "stylesMap": {}
              },
              "DepartureDate": {"properties": {"tabindex": "9"}, "classesMap": {}, "stylesMap": {}},
              "ArrivalDate": {"properties": {"tabindex": "10"}, "classesMap": {}, "stylesMap": {}},
              "BEdit": {"properties": {"tabindex": "18"}, "classesMap": {}, "stylesMap": {}},
              "BDelete": {"properties": {"tabindex": "19"}, "classesMap": {}, "stylesMap": {}},
              "l_Record#": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}}
            },
            "rowId": "0"
          },
          "1": {
            "values": {
              "backgroundImage": "assets/images/Travel/Package175930-9043.png",
              "l_Record#": "9046",
              "DepartureDate": "15 Jan",
              "ArrivalDate": "16 Jan",
              "takeoff": "assets/images/Travel/depart.png",
              "land": "assets/images/Travel/arrive.png",
              "Ellipse": "assets/images/Travel/Ellipse 3.png",
              "FlightImg": "assets/images/Travel/flight.png",
              "HotelImg": "assets/images/Travel/hotel.png",
              "CarImg": "assets/images/Travel/car.png",
              "RestoImg": "assets/images/Travel/restaurant.png",
              "BEdit": "Edit",
              "BDelete": "Delete"
            },
            "ControlsProperties": {
              "backgroundImage": {
                "properties": {
                  "tabindex": "8",
                  "image": "assets/images/Travel/Package175930-9043.png"
                }, "classesMap": {}, "stylesMap": {}
              },
              "DepartureDate": {"properties": {"tabindex": "9"}, "classesMap": {}, "stylesMap": {}},
              "ArrivalDate": {"properties": {"tabindex": "10"}, "classesMap": {}, "stylesMap": {}},
              "takeoff": {
                "properties": {"tabindex": "11", "image": "assets/images/Travel/depart.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "land": {
                "properties": {"tabindex": "12", "image": "assets/images/Travel/arrive.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "Ellipse": {
                "properties": {"tabindex": "13", "image": "assets/images/Travel/Ellipse 3.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "FlightImg": {
                "properties": {"tabindex": "14", "visible": "1", "image": "assets/images/Travel/flight.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "HotelImg": {
                "properties": {"tabindex": "15", "visible": "1", "image": "assets/images/Travel/hotel.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "CarImg": {
                "properties": {"tabindex": "16", "visible": "0", "image": "assets/images/Travel/car.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "RestoImg": {
                "properties": {"tabindex": "17", "visible": "0", "image": "assets/images/Travel/restaurant.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "BEdit": {"properties": {"tabindex": "18"}, "classesMap": {}, "stylesMap": {}},
              "BDelete": {"properties": {"tabindex": "19"}, "classesMap": {}, "stylesMap": {}},
              "l_Record#": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
              "DescriptionText": {
                "properties": {"text": "Contract signing in Bangkok                                                                                                                                                                             "},
                "classesMap": {},
                "stylesMap": {}
              }
            },
            "rowId": "1"
          },
          "2": {
            "values": {
              "backgroundImage": "assets/images/Travel/Package170633-9042.png",
              "l_Record#": "9046",
              "DepartureDate": "14 Nov",
              "ArrivalDate": "26 Nov",
              "takeoff": "assets/images/Travel/depart.png",
              "land": "assets/images/Travel/arrive.png",
              "Ellipse": "assets/images/Travel/Ellipse 3.png",
              "FlightImg": "assets/images/Travel/flight.png",
              "HotelImg": "assets/images/Travel/hotel.png",
              "CarImg": "assets/images/Travel/car.png",
              "RestoImg": "assets/images/Travel/restaurant.png",
              "BEdit": "Edit",
              "BDelete": "Delete"
            },
            "ControlsProperties": {
              "backgroundImage": {
                "properties": {
                  "tabindex": "8",
                  "image": "assets/images/Travel/Package170633-9042.png"
                }, "classesMap": {}, "stylesMap": {}
              },
              "DepartureDate": {"properties": {"tabindex": "9"}, "classesMap": {}, "stylesMap": {}},
              "ArrivalDate": {"properties": {"tabindex": "10"}, "classesMap": {}, "stylesMap": {}},
              "takeoff": {
                "properties": {"tabindex": "11", "image": "assets/images/Travel/depart.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "land": {
                "properties": {"tabindex": "12", "image": "assets/images/Travel/arrive.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "Ellipse": {
                "properties": {"tabindex": "13", "image": "assets/images/Travel/Ellipse 3.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "FlightImg": {
                "properties": {"tabindex": "14", "visible": "1", "image": "assets/images/Travel/flight.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "HotelImg": {
                "properties": {"tabindex": "15", "visible": "1", "image": "assets/images/Travel/hotel.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "CarImg": {
                "properties": {"tabindex": "16", "visible": "0", "image": "assets/images/Travel/car.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "RestoImg": {
                "properties": {"tabindex": "17", "visible": "1", "image": "assets/images/Travel/restaurant.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "BEdit": {"properties": {"tabindex": "18"}, "classesMap": {}, "stylesMap": {}},
              "BDelete": {"properties": {"tabindex": "19"}, "classesMap": {}, "stylesMap": {}},
              "l_Record#": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
              "DescriptionText": {
                "properties": {"text": "Branch opening in Sydney                                                                                                                                                                                "},
                "classesMap": {},
                "stylesMap": {}
              }
            },
            "rowId": "2"
          },
          "3": {
            "values": {
              "backgroundImage": "assets/images/Travel/Package100136-9041.png",
              "l_Record#": "9046",
              "DepartureDate": "05 Sep",
              "ArrivalDate": "08 Sep",
              "takeoff": "assets/images/Travel/depart.png",
              "land": "assets/images/Travel/arrive.png",
              "Ellipse": "assets/images/Travel/Ellipse 3.png",
              "FlightImg": "assets/images/Travel/flight.png",
              "HotelImg": "assets/images/Travel/hotel.png",
              "CarImg": "assets/images/Travel/car.png",
              "RestoImg": "assets/images/Travel/restaurant.png",
              "BEdit": "Edit",
              "BDelete": "Delete"
            },
            "ControlsProperties": {
              "backgroundImage": {
                "properties": {
                  "tabindex": "8",
                  "image": "assets/images/Travel/Package100136-9041.png"
                }, "classesMap": {}, "stylesMap": {}
              },
              "DepartureDate": {"properties": {"tabindex": "9"}, "classesMap": {}, "stylesMap": {}},
              "ArrivalDate": {"properties": {"tabindex": "10"}, "classesMap": {}, "stylesMap": {}},
              "takeoff": {
                "properties": {"tabindex": "11", "image": "assets/images/Travel/depart.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "land": {
                "properties": {"tabindex": "12", "image": "assets/images/Travel/arrive.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "Ellipse": {
                "properties": {"tabindex": "13", "image": "assets/images/Travel/Ellipse 3.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "FlightImg": {
                "properties": {"tabindex": "14", "visible": "1", "image": "assets/images/Travel/flight.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "HotelImg": {
                "properties": {"tabindex": "15", "visible": "1", "image": "assets/images/Travel/hotel.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "CarImg": {
                "properties": {"tabindex": "16", "visible": "0", "image": "assets/images/Travel/car.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "RestoImg": {
                "properties": {"tabindex": "17", "visible": "1", "image": "assets/images/Travel/restaurant.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "BEdit": {"properties": {"tabindex": "18"}, "classesMap": {}, "stylesMap": {}},
              "BDelete": {"properties": {"tabindex": "19"}, "classesMap": {}, "stylesMap": {}},
              "l_Record#": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
              "DescriptionText": {
                "properties": {"text": "Budget review meetings in Boston                                                                                                                                                                        "},
                "classesMap": {},
                "stylesMap": {}
              }
            },
            "rowId": "3"
          },
          "4": {
            "values": {
              "backgroundImage": "assets/images/Travel/Package100419-9040.png",
              "l_Record#": "9046",
              "DepartureDate": "21 Jul",
              "ArrivalDate": "24 Jul",
              "takeoff": "assets/images/Travel/depart.png",
              "land": "assets/images/Travel/arrive.png",
              "Ellipse": "assets/images/Travel/Ellipse 3.png",
              "FlightImg": "assets/images/Travel/flight.png",
              "HotelImg": "assets/images/Travel/hotel.png",
              "CarImg": "assets/images/Travel/car.png",
              "RestoImg": "assets/images/Travel/restaurant.png",
              "BEdit": "Edit",
              "BDelete": "Delete"
            },
            "ControlsProperties": {
              "backgroundImage": {
                "properties": {
                  "tabindex": "8",
                  "image": "assets/images/Travel/Package100419-9040.png"
                }, "classesMap": {}, "stylesMap": {}
              },
              "DepartureDate": {"properties": {"tabindex": "9"}, "classesMap": {}, "stylesMap": {}},
              "ArrivalDate": {"properties": {"tabindex": "10"}, "classesMap": {}, "stylesMap": {}},
              "takeoff": {
                "properties": {"tabindex": "11", "image": "assets/images/Travel/depart.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "land": {
                "properties": {"tabindex": "12", "image": "assets/images/Travel/arrive.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "Ellipse": {
                "properties": {"tabindex": "13", "image": "assets/images/Travel/Ellipse 3.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "FlightImg": {
                "properties": {"tabindex": "14", "visible": "1", "image": "assets/images/Travel/flight.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "HotelImg": {
                "properties": {"tabindex": "15", "visible": "1", "image": "assets/images/Travel/hotel.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "CarImg": {
                "properties": {"tabindex": "16", "visible": "1", "image": "assets/images/Travel/car.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "RestoImg": {
                "properties": {"tabindex": "17", "visible": "0", "image": "assets/images/Travel/restaurant.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "BEdit": {"properties": {"tabindex": "18"}, "classesMap": {}, "stylesMap": {}},
              "BDelete": {"properties": {"tabindex": "19"}, "classesMap": {}, "stylesMap": {}},
              "l_Record#": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
              "DescriptionText": {
                "properties": {"text": "Gartner conference in LA                                                                                                                                                                                "},
                "classesMap": {},
                "stylesMap": {}
              }
            },
            "rowId": "4"
          },
          "5": {
            "values": {
              "backgroundImage": "assets/images/Travel/Package175712-9044.png",
              "l_Record#": "9046",
              "DepartureDate": "01 Jun",
              "ArrivalDate": "03 Jun",
              "takeoff": "assets/images/Travel/depart.png",
              "land": "assets/images/Travel/arrive.png",
              "Ellipse": "assets/images/Travel/Ellipse 3.png",
              "FlightImg": "assets/images/Travel/flight.png",
              "HotelImg": "assets/images/Travel/hotel.png",
              "CarImg": "assets/images/Travel/car.png",
              "RestoImg": "assets/images/Travel/restaurant.png",
              "BEdit": "Edit",
              "BDelete": "Delete"
            },
            "ControlsProperties": {
              "backgroundImage": {
                "properties": {
                  "tabindex": "8",
                  "image": "assets/images/Travel/Package175712-9044.png"
                }, "classesMap": {}, "stylesMap": {}
              },
              "DepartureDate": {"properties": {"tabindex": "9"}, "classesMap": {}, "stylesMap": {}},
              "ArrivalDate": {"properties": {"tabindex": "10"}, "classesMap": {}, "stylesMap": {}},
              "takeoff": {
                "properties": {"tabindex": "11", "image": "assets/images/Travel/depart.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "land": {
                "properties": {"tabindex": "12", "image": "assets/images/Travel/arrive.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "Ellipse": {
                "properties": {"tabindex": "13", "image": "assets/images/Travel/Ellipse 3.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "FlightImg": {
                "properties": {"tabindex": "14", "visible": "1", "image": "assets/images/Travel/flight.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "HotelImg": {
                "properties": {"tabindex": "15", "visible": "1", "image": "assets/images/Travel/hotel.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "CarImg": {
                "properties": {"tabindex": "16", "visible": "0", "image": "assets/images/Travel/car.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "RestoImg": {
                "properties": {"tabindex": "17", "visible": "1", "image": "assets/images/Travel/restaurant.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "BEdit": {"properties": {"tabindex": "18"}, "classesMap": {}, "stylesMap": {}},
              "BDelete": {"properties": {"tabindex": "19"}, "classesMap": {}, "stylesMap": {}},
              "l_Record#": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
              "DescriptionText": {
                "properties": {"text": "Customer meetings in London                                                                                                                                                                             "},
                "classesMap": {},
                "stylesMap": {}
              }
            },
            "rowId": "5"
          },
          "6": {
            "values": {
              "backgroundImage": "assets/images/Travel/Package191410-9045.png",
              "l_Record#": "9046",
              "DepartureDate": "07 May",
              "ArrivalDate": "11 May",
              "takeoff": "assets/images/Travel/depart.png",
              "land": "assets/images/Travel/arrive.png",
              "Ellipse": "assets/images/Travel/Ellipse 3.png",
              "FlightImg": "assets/images/Travel/flight.png",
              "HotelImg": "assets/images/Travel/hotel.png",
              "CarImg": "assets/images/Travel/car.png",
              "RestoImg": "assets/images/Travel/restaurant.png",
              "BEdit": "Edit",
              "BDelete": "Delete"
            },
            "ControlsProperties": {
              "backgroundImage": {
                "properties": {
                  "tabindex": "8",
                  "image": "assets/images/Travel/Package191410-9045.png"
                }, "classesMap": {}, "stylesMap": {}
              },
              "DepartureDate": {"properties": {"tabindex": "9"}, "classesMap": {}, "stylesMap": {}},
              "ArrivalDate": {"properties": {"tabindex": "10"}, "classesMap": {}, "stylesMap": {}},
              "takeoff": {
                "properties": {"tabindex": "11", "image": "assets/images/Travel/depart.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "land": {
                "properties": {"tabindex": "12", "image": "assets/images/Travel/arrive.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "Ellipse": {
                "properties": {"tabindex": "13", "image": "assets/images/Travel/Ellipse 3.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "FlightImg": {
                "properties": {"tabindex": "14", "visible": "1", "image": "assets/images/Travel/flight.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "HotelImg": {
                "properties": {"tabindex": "15", "visible": "1", "image": "assets/images/Travel/hotel.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "CarImg": {
                "properties": {"tabindex": "16", "visible": "1", "image": "assets/images/Travel/car.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "RestoImg": {
                "properties": {"tabindex": "17", "visible": "1", "image": "assets/images/Travel/restaurant.png"},
                "classesMap": {},
                "stylesMap": {}
              },
              "BEdit": {"properties": {"tabindex": "18"}, "classesMap": {}, "stylesMap": {}},
              "BDelete": {"properties": {"tabindex": "19"}, "classesMap": {}, "stylesMap": {}},
              "l_Record#": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
              "DescriptionText": {
                "properties": {"text": "Google DevCon Las Vegas                                                                                                                                                                                 "},
                "classesMap": {},
                "stylesMap": {}
              }
            },
            "rowId": "6"
          }
        },
        "list": [{
          "values": {
            "AddPlusImg": "assets/images/Travel/plus.png",
            "backgroundImage": "assets/images/Travel/Package190356-9046.png",
            "l_Record#": "9046",
            "DepartureDate": "01 Dec",
            "ArrivalDate": "01 Jan",
            "takeoff": "assets/images/Travel/depart.png",
            "land": "assets/images/Travel/arrive.png",
            "Ellipse": "assets/images/Travel/Ellipse 3.png",
            "FlightImg": "assets/images/Travel/flight.png",
            "HotelImg": "assets/images/Travel/hotel.png",
            "CarImg": "assets/images/Travel/car.png",
            "RestoImg": "assets/images/Travel/restaurant.png",
            "BEdit": "Edit",
            "BDelete": "Delete"
          },
          "ControlsProperties": {
            "AddPlusImg": {
              "properties": {
                "image": "assets/images/Travel/plus.png",
                "tabindex": "21"
              }, "classesMap": {}, "stylesMap": {}
            },
            "backgroundImage": {
              "properties": {"image": "assets/images/Travel/Package190356-9046.png", "tabindex": "8"},
              "classesMap": {},
              "stylesMap": {}
            },
            "takeoff": {
              "properties": {"image": "assets/images/Travel/depart.png", "tabindex": "11"},
              "classesMap": {},
              "stylesMap": {}
            },
            "land": {
              "properties": {"image": "assets/images/Travel/arrive.png", "tabindex": "12"},
              "classesMap": {},
              "stylesMap": {}
            },
            "Ellipse": {
              "properties": {"image": "assets/images/Travel/Ellipse 3.png", "tabindex": "13"},
              "classesMap": {},
              "stylesMap": {}
            },
            "FlightImg": {
              "properties": {"image": "assets/images/Travel/flight.png", "visible": "1", "tabindex": "14"},
              "classesMap": {},
              "stylesMap": {}
            },
            "HotelImg": {
              "properties": {"image": "assets/images/Travel/hotel.png", "visible": "1", "tabindex": "15"},
              "classesMap": {},
              "stylesMap": {}
            },
            "CarImg": {
              "properties": {"image": "assets/images/Travel/car.png", "visible": "0", "tabindex": "16"},
              "classesMap": {},
              "stylesMap": {}
            },
            "RestoImg": {
              "properties": {"image": "assets/images/Travel/restaurant.png", "visible": "1", "tabindex": "17"},
              "classesMap": {},
              "stylesMap": {}
            },
            "DescriptionText": {
              "properties": {"text": "Visit to Israel                                                                                                                                                                                         "},
              "classesMap": {},
              "stylesMap": {}
            },
            "DepartureDate": {"properties": {"tabindex": "9"}, "classesMap": {}, "stylesMap": {}},
            "ArrivalDate": {"properties": {"tabindex": "10"}, "classesMap": {}, "stylesMap": {}},
            "BEdit": {"properties": {"tabindex": "18"}, "classesMap": {}, "stylesMap": {}},
            "BDelete": {"properties": {"tabindex": "19"}, "classesMap": {}, "stylesMap": {}},
            "l_Record#": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}}
          },
          "rowId": "0"
        }, {
          "values": {
            "backgroundImage": "assets/images/Travel/Package175930-9043.png",
            "l_Record#": "9046",
            "DepartureDate": "15 Jan",
            "ArrivalDate": "16 Jan",
            "takeoff": "assets/images/Travel/depart.png",
            "land": "assets/images/Travel/arrive.png",
            "Ellipse": "assets/images/Travel/Ellipse 3.png",
            "FlightImg": "assets/images/Travel/flight.png",
            "HotelImg": "assets/images/Travel/hotel.png",
            "CarImg": "assets/images/Travel/car.png",
            "RestoImg": "assets/images/Travel/restaurant.png",
            "BEdit": "Edit",
            "BDelete": "Delete"
          },
          "ControlsProperties": {
            "backgroundImage": {
              "properties": {
                "tabindex": "8",
                "image": "assets/images/Travel/Package175930-9043.png"
              }, "classesMap": {}, "stylesMap": {}
            },
            "DepartureDate": {"properties": {"tabindex": "9"}, "classesMap": {}, "stylesMap": {}},
            "ArrivalDate": {"properties": {"tabindex": "10"}, "classesMap": {}, "stylesMap": {}},
            "takeoff": {
              "properties": {"tabindex": "11", "image": "assets/images/Travel/depart.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "land": {
              "properties": {"tabindex": "12", "image": "assets/images/Travel/arrive.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "Ellipse": {
              "properties": {"tabindex": "13", "image": "assets/images/Travel/Ellipse 3.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "FlightImg": {
              "properties": {"tabindex": "14", "visible": "1", "image": "assets/images/Travel/flight.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "HotelImg": {
              "properties": {"tabindex": "15", "visible": "1", "image": "assets/images/Travel/hotel.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "CarImg": {
              "properties": {"tabindex": "16", "visible": "0", "image": "assets/images/Travel/car.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "RestoImg": {
              "properties": {"tabindex": "17", "visible": "0", "image": "assets/images/Travel/restaurant.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "BEdit": {"properties": {"tabindex": "18"}, "classesMap": {}, "stylesMap": {}},
            "BDelete": {"properties": {"tabindex": "19"}, "classesMap": {}, "stylesMap": {}},
            "l_Record#": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
            "DescriptionText": {
              "properties": {"text": "Contract signing in Bangkok                                                                                                                                                                             "},
              "classesMap": {},
              "stylesMap": {}
            }
          },
          "rowId": "1"
        }, {
          "values": {
            "backgroundImage": "assets/images/Travel/Package170633-9042.png",
            "l_Record#": "9046",
            "DepartureDate": "14 Nov",
            "ArrivalDate": "26 Nov",
            "takeoff": "assets/images/Travel/depart.png",
            "land": "assets/images/Travel/arrive.png",
            "Ellipse": "assets/images/Travel/Ellipse 3.png",
            "FlightImg": "assets/images/Travel/flight.png",
            "HotelImg": "assets/images/Travel/hotel.png",
            "CarImg": "assets/images/Travel/car.png",
            "RestoImg": "assets/images/Travel/restaurant.png",
            "BEdit": "Edit",
            "BDelete": "Delete"
          },
          "ControlsProperties": {
            "backgroundImage": {
              "properties": {
                "tabindex": "8",
                "image": "assets/images/Travel/Package170633-9042.png"
              }, "classesMap": {}, "stylesMap": {}
            },
            "DepartureDate": {"properties": {"tabindex": "9"}, "classesMap": {}, "stylesMap": {}},
            "ArrivalDate": {"properties": {"tabindex": "10"}, "classesMap": {}, "stylesMap": {}},
            "takeoff": {
              "properties": {"tabindex": "11", "image": "assets/images/Travel/depart.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "land": {
              "properties": {"tabindex": "12", "image": "assets/images/Travel/arrive.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "Ellipse": {
              "properties": {"tabindex": "13", "image": "assets/images/Travel/Ellipse 3.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "FlightImg": {
              "properties": {"tabindex": "14", "visible": "1", "image": "assets/images/Travel/flight.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "HotelImg": {
              "properties": {"tabindex": "15", "visible": "1", "image": "assets/images/Travel/hotel.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "CarImg": {
              "properties": {"tabindex": "16", "visible": "0", "image": "assets/images/Travel/car.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "RestoImg": {
              "properties": {"tabindex": "17", "visible": "1", "image": "assets/images/Travel/restaurant.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "BEdit": {"properties": {"tabindex": "18"}, "classesMap": {}, "stylesMap": {}},
            "BDelete": {"properties": {"tabindex": "19"}, "classesMap": {}, "stylesMap": {}},
            "l_Record#": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
            "DescriptionText": {
              "properties": {"text": "Branch opening in Sydney                                                                                                                                                                                "},
              "classesMap": {},
              "stylesMap": {}
            }
          },
          "rowId": "2"
        }, {
          "values": {
            "backgroundImage": "assets/images/Travel/Package100136-9041.png",
            "l_Record#": "9046",
            "DepartureDate": "05 Sep",
            "ArrivalDate": "08 Sep",
            "takeoff": "assets/images/Travel/depart.png",
            "land": "assets/images/Travel/arrive.png",
            "Ellipse": "assets/images/Travel/Ellipse 3.png",
            "FlightImg": "assets/images/Travel/flight.png",
            "HotelImg": "assets/images/Travel/hotel.png",
            "CarImg": "assets/images/Travel/car.png",
            "RestoImg": "assets/images/Travel/restaurant.png",
            "BEdit": "Edit",
            "BDelete": "Delete"
          },
          "ControlsProperties": {
            "backgroundImage": {
              "properties": {
                "tabindex": "8",
                "image": "assets/images/Travel/Package100136-9041.png"
              }, "classesMap": {}, "stylesMap": {}
            },
            "DepartureDate": {"properties": {"tabindex": "9"}, "classesMap": {}, "stylesMap": {}},
            "ArrivalDate": {"properties": {"tabindex": "10"}, "classesMap": {}, "stylesMap": {}},
            "takeoff": {
              "properties": {"tabindex": "11", "image": "assets/images/Travel/depart.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "land": {
              "properties": {"tabindex": "12", "image": "assets/images/Travel/arrive.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "Ellipse": {
              "properties": {"tabindex": "13", "image": "assets/images/Travel/Ellipse 3.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "FlightImg": {
              "properties": {"tabindex": "14", "visible": "1", "image": "assets/images/Travel/flight.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "HotelImg": {
              "properties": {"tabindex": "15", "visible": "1", "image": "assets/images/Travel/hotel.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "CarImg": {
              "properties": {"tabindex": "16", "visible": "0", "image": "assets/images/Travel/car.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "RestoImg": {
              "properties": {"tabindex": "17", "visible": "1", "image": "assets/images/Travel/restaurant.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "BEdit": {"properties": {"tabindex": "18"}, "classesMap": {}, "stylesMap": {}},
            "BDelete": {"properties": {"tabindex": "19"}, "classesMap": {}, "stylesMap": {}},
            "l_Record#": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
            "DescriptionText": {
              "properties": {"text": "Budget review meetings in Boston                                                                                                                                                                        "},
              "classesMap": {},
              "stylesMap": {}
            }
          },
          "rowId": "3"
        }, {
          "values": {
            "backgroundImage": "assets/images/Travel/Package100419-9040.png",
            "l_Record#": "9046",
            "DepartureDate": "21 Jul",
            "ArrivalDate": "24 Jul",
            "takeoff": "assets/images/Travel/depart.png",
            "land": "assets/images/Travel/arrive.png",
            "Ellipse": "assets/images/Travel/Ellipse 3.png",
            "FlightImg": "assets/images/Travel/flight.png",
            "HotelImg": "assets/images/Travel/hotel.png",
            "CarImg": "assets/images/Travel/car.png",
            "RestoImg": "assets/images/Travel/restaurant.png",
            "BEdit": "Edit",
            "BDelete": "Delete"
          },
          "ControlsProperties": {
            "backgroundImage": {
              "properties": {
                "tabindex": "8",
                "image": "assets/images/Travel/Package100419-9040.png"
              }, "classesMap": {}, "stylesMap": {}
            },
            "DepartureDate": {"properties": {"tabindex": "9"}, "classesMap": {}, "stylesMap": {}},
            "ArrivalDate": {"properties": {"tabindex": "10"}, "classesMap": {}, "stylesMap": {}},
            "takeoff": {
              "properties": {"tabindex": "11", "image": "assets/images/Travel/depart.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "land": {
              "properties": {"tabindex": "12", "image": "assets/images/Travel/arrive.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "Ellipse": {
              "properties": {"tabindex": "13", "image": "assets/images/Travel/Ellipse 3.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "FlightImg": {
              "properties": {"tabindex": "14", "visible": "1", "image": "assets/images/Travel/flight.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "HotelImg": {
              "properties": {"tabindex": "15", "visible": "1", "image": "assets/images/Travel/hotel.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "CarImg": {
              "properties": {"tabindex": "16", "visible": "1", "image": "assets/images/Travel/car.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "RestoImg": {
              "properties": {"tabindex": "17", "visible": "0", "image": "assets/images/Travel/restaurant.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "BEdit": {"properties": {"tabindex": "18"}, "classesMap": {}, "stylesMap": {}},
            "BDelete": {"properties": {"tabindex": "19"}, "classesMap": {}, "stylesMap": {}},
            "l_Record#": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
            "DescriptionText": {
              "properties": {"text": "Gartner conference in LA                                                                                                                                                                                "},
              "classesMap": {},
              "stylesMap": {}
            }
          },
          "rowId": "4"
        }, {
          "values": {
            "backgroundImage": "assets/images/Travel/Package175712-9044.png",
            "l_Record#": "9046",
            "DepartureDate": "01 Jun",
            "ArrivalDate": "03 Jun",
            "takeoff": "assets/images/Travel/depart.png",
            "land": "assets/images/Travel/arrive.png",
            "Ellipse": "assets/images/Travel/Ellipse 3.png",
            "FlightImg": "assets/images/Travel/flight.png",
            "HotelImg": "assets/images/Travel/hotel.png",
            "CarImg": "assets/images/Travel/car.png",
            "RestoImg": "assets/images/Travel/restaurant.png",
            "BEdit": "Edit",
            "BDelete": "Delete"
          },
          "ControlsProperties": {
            "backgroundImage": {
              "properties": {
                "tabindex": "8",
                "image": "assets/images/Travel/Package175712-9044.png"
              }, "classesMap": {}, "stylesMap": {}
            },
            "DepartureDate": {"properties": {"tabindex": "9"}, "classesMap": {}, "stylesMap": {}},
            "ArrivalDate": {"properties": {"tabindex": "10"}, "classesMap": {}, "stylesMap": {}},
            "takeoff": {
              "properties": {"tabindex": "11", "image": "assets/images/Travel/depart.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "land": {
              "properties": {"tabindex": "12", "image": "assets/images/Travel/arrive.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "Ellipse": {
              "properties": {"tabindex": "13", "image": "assets/images/Travel/Ellipse 3.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "FlightImg": {
              "properties": {"tabindex": "14", "visible": "1", "image": "assets/images/Travel/flight.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "HotelImg": {
              "properties": {"tabindex": "15", "visible": "1", "image": "assets/images/Travel/hotel.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "CarImg": {
              "properties": {"tabindex": "16", "visible": "0", "image": "assets/images/Travel/car.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "RestoImg": {
              "properties": {"tabindex": "17", "visible": "1", "image": "assets/images/Travel/restaurant.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "BEdit": {"properties": {"tabindex": "18"}, "classesMap": {}, "stylesMap": {}},
            "BDelete": {"properties": {"tabindex": "19"}, "classesMap": {}, "stylesMap": {}},
            "l_Record#": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
            "DescriptionText": {
              "properties": {"text": "Customer meetings in London                                                                                                                                                                             "},
              "classesMap": {},
              "stylesMap": {}
            }
          },
          "rowId": "5"
        }, {
          "values": {
            "backgroundImage": "assets/images/Travel/Package191410-9045.png",
            "l_Record#": "9046",
            "DepartureDate": "07 May",
            "ArrivalDate": "11 May",
            "takeoff": "assets/images/Travel/depart.png",
            "land": "assets/images/Travel/arrive.png",
            "Ellipse": "assets/images/Travel/Ellipse 3.png",
            "FlightImg": "assets/images/Travel/flight.png",
            "HotelImg": "assets/images/Travel/hotel.png",
            "CarImg": "assets/images/Travel/car.png",
            "RestoImg": "assets/images/Travel/restaurant.png",
            "BEdit": "Edit",
            "BDelete": "Delete"
          },
          "ControlsProperties": {
            "backgroundImage": {
              "properties": {
                "tabindex": "8",
                "image": "assets/images/Travel/Package191410-9045.png"
              }, "classesMap": {}, "stylesMap": {}
            },
            "DepartureDate": {"properties": {"tabindex": "9"}, "classesMap": {}, "stylesMap": {}},
            "ArrivalDate": {"properties": {"tabindex": "10"}, "classesMap": {}, "stylesMap": {}},
            "takeoff": {
              "properties": {"tabindex": "11", "image": "assets/images/Travel/depart.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "land": {
              "properties": {"tabindex": "12", "image": "assets/images/Travel/arrive.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "Ellipse": {
              "properties": {"tabindex": "13", "image": "assets/images/Travel/Ellipse 3.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "FlightImg": {
              "properties": {"tabindex": "14", "visible": "1", "image": "assets/images/Travel/flight.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "HotelImg": {
              "properties": {"tabindex": "15", "visible": "1", "image": "assets/images/Travel/hotel.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "CarImg": {
              "properties": {"tabindex": "16", "visible": "1", "image": "assets/images/Travel/car.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "RestoImg": {
              "properties": {"tabindex": "17", "visible": "1", "image": "assets/images/Travel/restaurant.png"},
              "classesMap": {},
              "stylesMap": {}
            },
            "BEdit": {"properties": {"tabindex": "18"}, "classesMap": {}, "stylesMap": {}},
            "BDelete": {"properties": {"tabindex": "19"}, "classesMap": {}, "stylesMap": {}},
            "l_Record#": {"properties": {"tabindex": "20"}, "classesMap": {}, "stylesMap": {}},
            "DescriptionText": {
              "properties": {"text": "Google DevCon Las Vegas                                                                                                                                                                                 "},
              "classesMap": {},
              "stylesMap": {}
            }
          },
          "rowId": "6"
        }]
      }, "template": {"l_Record#": "1", "DepartureDate": "1", "ArrivalDate": "1"}
    };
    this.loadStubData(stubData);
  }
}
