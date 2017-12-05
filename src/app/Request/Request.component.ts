import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-Request",
	providers: [TaskMagicService],
	styleUrls: ["./Request.component.css"],
	templateUrl: "./Request.component.html"
})
export class Request extends BaseTaskMagicComponent {}
