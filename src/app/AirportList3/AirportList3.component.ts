import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-AirportList3",
	providers: [TaskMagicService],
	styleUrls: ["./AirportList3.component.css"],
	templateUrl: "./AirportList3.component.html"
})
export class AirportList3 extends BaseTaskMagicComponent {}
