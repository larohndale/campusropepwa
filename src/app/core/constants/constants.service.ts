import { Injectable } from "@angular/core";
import states from "./states";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ConstantsService {
  constructor() {}

  public getStates() {
    return states;
  }

  public searchState(term) {
    const filteredStates = states.filter(state => {
      return state.title.includes(term);
    });
    return of(filteredStates);
  }
}
