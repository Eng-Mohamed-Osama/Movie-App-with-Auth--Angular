import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private projectBehaviourSubjectName = new BehaviorSubject('Movie Galary')
  projectName = this.projectBehaviourSubjectName.asObservable();
  constructor() { }

  changeProjectName(name:string){
    this.projectBehaviourSubjectName.next(name)
  }
}
