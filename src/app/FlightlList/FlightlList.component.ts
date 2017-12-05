import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-FlightlList",
	providers: [TaskMagicService],
	styleUrls: ["./FlightlList.component.css"],
	templateUrl: "./FlightlList.component.html"
})
export class FlightlList extends BaseTaskMagicComponent {}
