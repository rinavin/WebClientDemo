import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-Hotellist3",
	providers: [TaskMagicService],
	styleUrls: ["./Hotellist3.component.css"],
	templateUrl: "./Hotellist3.component.html"
})
export class Hotellist3 extends BaseTaskMagicComponent {}
