import { Injectable } from '@angular/core';
import states from './states';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

constructor() { }

public getStates() {
  return states;
}

}
