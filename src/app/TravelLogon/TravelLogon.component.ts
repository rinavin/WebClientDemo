import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-TravelLogon",
	providers: [TaskMagicService],
	styleUrls: ["./TravelLogon.component.css"],
	templateUrl: "./TravelLogon.component.html"
})
export class TravelLogon extends BaseTaskMagicComponent {}
