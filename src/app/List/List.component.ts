import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-List",
	providers: [TaskMagicService],
	styleUrls: ["./List.component.css"],
	templateUrl: "./List.component.html"
})
export class List extends BaseTaskMagicComponent {}
