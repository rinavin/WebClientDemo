import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-RicClientresourcesServe",
	providers: [TaskMagicService],
	styleUrls: ["./RicClientresourcesServe.component.css"],
	templateUrl: "./RicClientresourcesServe.component.html"
})
export class RicClientresourcesServe extends BaseTaskMagicComponent {}
