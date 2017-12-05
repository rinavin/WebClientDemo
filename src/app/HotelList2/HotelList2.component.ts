import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-HotelList2",
	providers: [TaskMagicService],
	styleUrls: ["./HotelList2.component.css"],
	templateUrl: "./HotelList2.component.html"
})
export class HotelList2 extends BaseTaskMagicComponent {}
