import {Component, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {MagicEngine} from "./magic/src/services/magic.engine";
import {ComponentsList} from './ComponentList';
import {BaseTaskMagicComponent} from "./magic/src/ui/app.baseMagicComponent";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material";
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from "@angular/material-moment-adapter";

declare let myExtObject: any;

@Component({
  selector: 'app-root',
  template: `
    <!--<mga-YourTravelRequests></mga-YourTravelRequests>-->
    <!--<mga-YourTravel></mga-YourTravel>-->
    <mga-EditTravelRequestEntries></mga-EditTravelRequestEntries>

 `,
  providers :[
  ]
})
export class AppComponent
{//extends BaseTaskMagicComponent implements OnInit {
	constructor(protected magic: MagicEngine,
	            private componentFactoryResolver: ComponentFactoryResolver,
	            private viewContainerRef: ViewContainerRef) {

		this.initializeMagic();
		BaseTaskMagicComponent.componentListBase = new ComponentsList();

		magic.startMagic();
	}

	initializeMagic() {
		this.magic.registerOpenFormCallback(formName => {
			this.InjectComponent(formName);
		});

		this.magic.registerShowMessageBox(msg => {
			alert(msg);
		});
	}

	private InjectComponent(formName: string) {
		const factory = this.componentFactoryResolver.resolveComponentFactory(ComponentsList.compHash[formName]);
		const ref     = this.viewContainerRef.createComponent(factory);
		ref.changeDetectorRef.detectChanges();
	}
}

