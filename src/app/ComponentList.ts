import {ComponentListBase} from './ComponentListBase';
import {Component} from '@angular/core';

import {YourTravel} from './YourTravel/YourTravel.component';

import {YourTravelRequests} from './YourTravelRequests/YourTravelRequests.component';

import {YourTravelRequestsGenerate} from './YourTravelRequestsGenerate/YourTravelRequestsGenerate.component';

import {EditTravelRequestEntries} from './EditTravelRequestEntries/EditTravelRequestEntries.component';

import {Flight1} from './Flight1/Flight1.component';

import {Hotel} from './Hotel/Hotel.component';

import {Rest} from './Rest/Rest.component';

import {Car} from './Car/Car.component';

import {LargeImage} from './LargeImage/LargeImage.component';

export class ComponentsList extends ComponentListBase {
  static compHash: { [x: string]: any } = {
    YourTravel: YourTravel,

    YourTravelRequests: YourTravelRequests,

    YourTravelRequestsGenerate: YourTravelRequestsGenerate,

    EditTravelRequestEntries: EditTravelRequestEntries,

    Flight1: Flight1,

    Hotel: Hotel,

    Rest: Rest,

    Car: Car,

    LargeImage: LargeImage,

  };

  static ComponentArray: any[] = [
    YourTravel,

    YourTravelRequests,

    YourTravelRequestsGenerate,

    EditTravelRequestEntries,

    Flight1,

    Hotel,

    Rest,

    Car,

    LargeImage,

  ];

  static getArray() {
    return this.ComponentArray;
  }

  public getComponents(name: string): Component {
    return ComponentsList.compHash[name];
  }

  public static getAllComponents() {
    return this.ComponentArray;
  }

  public getTitle(): string {
    return 'WebClientDemo';
  }
}
