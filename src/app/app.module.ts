import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MagicModule} from "./magic/magic.core.module";
import {AppComponent} from "./app.component";
import {DynamicModule} from "ng-dynamic-component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatSelectModule, MatToolbarModule
} from "@angular/material";
import {ComponentsList} from "./ComponentList";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {WMatTimePickerComponent} from "./components/TimePicker/time-control/w-mat-timepicker.component";
import {WClockComponent, WTimeDialogComponent} from "./components/TimePicker";


const comps = ComponentsList.getAllComponents();

@NgModule({
  declarations: [
    AppComponent,
    ...comps,


    // timepicker
    WMatTimePickerComponent,
    WTimeDialogComponent,
    WClockComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DynamicModule.withComponents(comps),
    MagicModule.forRoot(),
    // Angular Material
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatToolbarModule,
    MatSelectModule


  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [],

  bootstrap: [AppComponent],
  entryComponents:[WTimeDialogComponent]
})
export class AppModule {
  constructor() {
  }
}
