import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-Flight1",
	providers: [TaskMagicService],
	styleUrls: ["./Flight1.component.css"],
	templateUrl: "./Flight1.component.html"
})
export class Flight1 extends BaseTaskMagicComponent {}
