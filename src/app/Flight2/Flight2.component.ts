import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-Flight2",
	providers: [TaskMagicService],
	styleUrls: ["./Flight2.component.css"],
	templateUrl: "./Flight2.component.html"
})
export class Flight2 extends BaseTaskMagicComponent {}
