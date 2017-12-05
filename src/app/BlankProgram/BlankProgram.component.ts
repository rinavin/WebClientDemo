import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-BlankProgram",
	providers: [TaskMagicService],
	styleUrls: ["./BlankProgram.component.css"],
	templateUrl: "./BlankProgram.component.html"
})
export class BlankProgram extends BaseTaskMagicComponent {}
