import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-CarsList",
	providers: [TaskMagicService],
	styleUrls: ["./CarsList.component.css"],
	templateUrl: "./CarsList.component.html"
})
export class CarsList extends BaseTaskMagicComponent {}
