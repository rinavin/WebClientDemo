import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-LargeImage",
	providers: [TaskMagicService],
	styleUrls: ["./LargeImage.component.css"],
	templateUrl: "./LargeImage.component.html"
})
export class LargeImage extends BaseTaskMagicComponent {}
