import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-Rest",
	providers: [TaskMagicService],
	styleUrls: ["./Rest.component.css"],
	templateUrl: "./Rest.component.html"
})
export class Rest extends BaseTaskMagicComponent {}
