import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-RestaurantsList",
	providers: [TaskMagicService],
	styleUrls: ["./RestaurantsList.component.css"],
	templateUrl: "./RestaurantsList.component.html"
})
export class RestaurantsList extends BaseTaskMagicComponent {}
