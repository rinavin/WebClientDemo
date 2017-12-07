import {Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {TaskMagicService} from "../magic/src/services/task.magics.service";

@Component({
  selector: "mga-LargeImage",
  providers: [TaskMagicService],
  styleUrls: ["./LargeImage.component.css"],
  templateUrl: "./LargeImage.component.html"
})
export class LargeImage extends BaseTaskMagicComponent {
  loadData(): any {
    let stubData = {
      "records": {
        "data": {
          "0": {
            "values": {
              "image1": "assets/images/Travel/9041-03-01.jpg",
              "image2": "assets/images/Travel/9041-03-02.jpg",
              "image3": "assets/images/Travel/9041-03-03.jpg",
              "image4": "assets/images/Travel/9041-03-04.jpg"
            },
            "ControlsProperties": {
              "image1": {
                "properties": {
                  "image": "assets/images/Travel/9041-03-01.jpg",
                  "tabindex": "25"
                }, "classesMap": {}, "stylesMap": {}
              },
              "image2": {
                "properties": {"image": "assets/images/Travel/9041-03-02.jpg", "tabindex": "26"},
                "classesMap": {},
                "stylesMap": {}
              },
              "image3": {
                "properties": {"image": "assets/images/Travel/9041-03-03.jpg", "tabindex": "27"},
                "classesMap": {},
                "stylesMap": {}
              },
              "image4": {
                "properties": {"image": "assets/images/Travel/9041-03-04.jpg", "tabindex": "28"},
                "classesMap": {},
                "stylesMap": {}
              }
            },
            "rowId": "0"
          }
        },
        "list": [{
          "values": {
            "image1": "assets/images/Travel/9041-03-01.jpg",
            "image2": "assets/images/Travel/9041-03-02.jpg",
            "image3": "assets/images/Travel/9041-03-03.jpg",
            "image4": "assets/images/Travel/9041-03-04.jpg"
          },
          "ControlsProperties": {
            "image1": {
              "properties": {
                "image": "assets/images/Travel/9041-03-01.jpg",
                "tabindex": "25"
              }, "classesMap": {}, "stylesMap": {}
            },
            "image2": {
              "properties": {"image": "assets/images/Travel/9041-03-02.jpg", "tabindex": "26"},
              "classesMap": {},
              "stylesMap": {}
            },
            "image3": {
              "properties": {"image": "assets/images/Travel/9041-03-03.jpg", "tabindex": "27"},
              "classesMap": {},
              "stylesMap": {}
            },
            "image4": {
              "properties": {"image": "assets/images/Travel/9041-03-04.jpg", "tabindex": "28"},
              "classesMap": {},
              "stylesMap": {}
            }
          },
          "rowId": "0"
        }]
      }, "template": {}
    };
    this.loadStubData(stubData);
  }

}
