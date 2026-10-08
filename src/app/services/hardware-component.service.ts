import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HardwareComponentType } from '../models/hardware-component/hardware-component-type';
import { HardwareComponent } from '../static-data/hardware-component';

@Injectable({
  providedIn: 'root'
})
export class HardwareComponentService {
  public getHardwareComponent(): Observable<HardwareComponentType[]> {
    return of(HardwareComponent['HardwareComponentType']);
  }
}
