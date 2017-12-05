import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-HotelList",
	providers: [TaskMagicService],
	styleUrls: ["./HotelList.component.css"],
	templateUrl: "./HotelList.component.html"
})
export class HotelList extends BaseTaskMagicComponent {}
