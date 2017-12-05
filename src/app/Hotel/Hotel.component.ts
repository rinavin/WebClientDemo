import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-Hotel",
	providers: [TaskMagicService],
	styleUrls: ["./Hotel.component.css"],
	templateUrl: "./Hotel.component.html"
})
export class Hotel extends BaseTaskMagicComponent {}
