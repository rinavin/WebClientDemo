import { ComponentListBase } from "./ComponentListBase";
import { Component } from "@angular/core";

import { TravelLogon } from "./TravelLogon/TravelLogon.component";

import { YourTravel } from "./YourTravel/YourTravel.component";

import { YourTravelRequests } from "./YourTravelRequests/YourTravelRequests.component";

import { YourTravelRequestsGenerate } from "./YourTravelRequestsGenerate/YourTravelRequestsGenerate.component";

import { EditTravelRequestEntries } from "./EditTravelRequestEntries/EditTravelRequestEntries.component";

import { Flight1 } from "./Flight1/Flight1.component";

import { FlightlList } from "./FlightlList/FlightlList.component";

import { Flight2 } from "./Flight2/Flight2.component";

import { Hotel } from "./Hotel/Hotel.component";

import { HotelList1 } from "./HotelList1/HotelList1.component";

import { Rest } from "./Rest/Rest.component";

import { RestaurantsList } from "./RestaurantsList/RestaurantsList.component";

import { Car } from "./Car/Car.component";

import { CarsList } from "./CarsList/CarsList.component";

import { ViewProfile } from "./ViewProfile/ViewProfile.component";

import { LargeImage } from "./LargeImage/LargeImage.component";

import { Request } from "./Request/Request.component";

import { RicClientresourcesServe } from "./RicClientresourcesServe/RicClientresourcesServe.component";

import { HotelList2 } from "./HotelList2/HotelList2.component";

import { EditEntry } from "./EditEntry/EditEntry.component";

import { AirportList3 } from "./AirportList3/AirportList3.component";

import { Hotellist3 } from "./Hotellist3/Hotellist3.component";

import { HotelList } from "./HotelList/HotelList.component";

import { List } from "./List/List.component";

import { BlankProgram } from "./BlankProgram/BlankProgram.component";

export class ComponentsList extends ComponentListBase {
	static compHash: { [x: string]: any } = {
		TravelLogon: TravelLogon,

		YourTravel: YourTravel,

		YourTravelRequests: YourTravelRequests,

		YourTravelRequestsGenerate: YourTravelRequestsGenerate,

		EditTravelRequestEntries: EditTravelRequestEntries,

		Flight1: Flight1,

		FlightlList: FlightlList,

		Flight2: Flight2,

		Hotel: Hotel,

		HotelList1: HotelList1,

		Rest: Rest,

		RestaurantsList: RestaurantsList,

		Car: Car,

		CarsList: CarsList,

		ViewProfile: ViewProfile,

		LargeImage: LargeImage,

		Request: Request,

		RicClientresourcesServe: RicClientresourcesServe,

		HotelList2: HotelList2,

		EditEntry: EditEntry,

		AirportList3: AirportList3,

		Hotellist3: Hotellist3,

		HotelList: HotelList,

		List: List,

		BlankProgram: BlankProgram
	};

	static ComponentArray: any[] = [
		TravelLogon,

		YourTravel,

		YourTravelRequests,

		YourTravelRequestsGenerate,

		EditTravelRequestEntries,

		Flight1,

		FlightlList,

		Flight2,

		Hotel,

		HotelList1,

		Rest,

		RestaurantsList,

		Car,

		CarsList,

		ViewProfile,

		LargeImage,

		Request,

		RicClientresourcesServe,

		HotelList2,

		EditEntry,

		AirportList3,

		Hotellist3,

		HotelList,

		List,

		BlankProgram
	];

	static getArray() {
		return this.ComponentArray;
	}

	public getComponents(name: string): Component {
		return ComponentsList.compHash[name];
	}

	public static getAllComponents() {
		return this.ComponentArray;
	}
	
	public getTitle(): string {
		return "WebClientDemo";
	}
}
