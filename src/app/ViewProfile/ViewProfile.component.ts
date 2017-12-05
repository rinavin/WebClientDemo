import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-ViewProfile",
	providers: [TaskMagicService],
	styleUrls: ["./ViewProfile.component.css"],
	templateUrl: "./ViewProfile.component.html"
})
export class ViewProfile extends BaseTaskMagicComponent {}
