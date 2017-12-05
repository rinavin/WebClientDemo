import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-HotelList1",
	providers: [TaskMagicService],
	styleUrls: ["./HotelList1.component.css"],
	templateUrl: "./HotelList1.component.html"
})
export class HotelList1 extends BaseTaskMagicComponent {}
