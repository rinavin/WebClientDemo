import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-EditEntry",
	providers: [TaskMagicService],
	styleUrls: ["./EditEntry.component.css"],
	templateUrl: "./EditEntry.component.html"
})
export class EditEntry extends BaseTaskMagicComponent {}
