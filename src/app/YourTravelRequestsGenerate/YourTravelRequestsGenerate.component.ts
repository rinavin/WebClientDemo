import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-YourTravelRequestsGenerate",
	providers: [TaskMagicService],
	styleUrls: ["./YourTravelRequestsGenerate.component.css"],
	templateUrl: "./YourTravelRequestsGenerate.component.html"
})
export class YourTravelRequestsGenerate extends BaseTaskMagicComponent {}
