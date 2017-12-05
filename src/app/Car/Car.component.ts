import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-Car",
	providers: [TaskMagicService],
	styleUrls: ["./Car.component.css"],
	templateUrl: "./Car.component.html"
})
export class Car extends BaseTaskMagicComponent {}
