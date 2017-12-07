import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-YourTravel",
	providers: [TaskMagicService],
	styleUrls: ["./YourTravel.component.css"],
	templateUrl: "./YourTravel.component.html"
})
export class YourTravel extends BaseTaskMagicComponent {

  loadData():any   {
    let stubData = {"records":{"data":{"0":{"values":{"ParkOnManage":"","MainHome":"assets/images/Travel/Magic_Logo_no slogan_ no shade_L.png","BPackages":"Packages","BAirports":"Airports","BHotels":"Hotels","BCarRentals":"Car rentals","BRestaurants":"Restaurants"},"ControlsProperties":{"YourTravel":{"properties":{},"classesMap":{},"stylesMap":{"background":"assets/images/Travel/BG.jpg"}},"TravelForLabel":{"properties":{"text":"Travel for Joe Doe"},"classesMap":{},"stylesMap":{}},"MainHome":{"properties":{"image":"assets/images/Travel/Magic_Logo_no slogan_ no shade_L.png","tabindex":"2"},"classesMap":{},"stylesMap":{}},"ParkOnManage":{"properties":{"tabindex":"1"},"classesMap":{},"stylesMap":{}},"BPackages":{"properties":{"tabindex":"3"},"classesMap":{},"stylesMap":{}},"BAirports":{"properties":{"tabindex":"4"},"classesMap":{},"stylesMap":{}},"BHotels":{"properties":{"tabindex":"5"},"classesMap":{},"stylesMap":{}},"BCarRentals":{"properties":{"tabindex":"6"},"classesMap":{},"stylesMap":{}},"BRestaurants":{"properties":{"tabindex":"7"},"classesMap":{},"stylesMap":{}}},"rowId":"0"}},"list":[{"values":{"ParkOnManage":"","MainHome":"assets/images/Travel/Magic_Logo_no slogan_ no shade_L.png","BPackages":"Packages","BAirports":"Airports","BHotels":"Hotels","BCarRentals":"Car rentals","BRestaurants":"Restaurants"},"ControlsProperties":{"YourTravel":{"properties":{},"classesMap":{},"stylesMap":{"background":"assets/images/Travel/BG.jpg"}},"TravelForLabel":{"properties":{"text":"Travel for Joe Doe"},"classesMap":{},"stylesMap":{}},"MainHome":{"properties":{"image":"assets/images/Travel/Magic_Logo_no slogan_ no shade_L.png","tabindex":"2"},"classesMap":{},"stylesMap":{}},"ParkOnManage":{"properties":{"tabindex":"1"},"classesMap":{},"stylesMap":{}},"BPackages":{"properties":{"tabindex":"3"},"classesMap":{},"stylesMap":{}},"BAirports":{"properties":{"tabindex":"4"},"classesMap":{},"stylesMap":{}},"BHotels":{"properties":{"tabindex":"5"},"classesMap":{},"stylesMap":{}},"BCarRentals":{"properties":{"tabindex":"6"},"classesMap":{},"stylesMap":{}},"BRestaurants":{"properties":{"tabindex":"7"},"classesMap":{},"stylesMap":{}}},"rowId":"0"}]},"template":{"ParkOnManage":"0"}};
    this.loadStubData(stubData);}
}
