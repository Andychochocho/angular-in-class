import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1> Skeleton Angular2 App!</h1>
      <h3 *ngFor="#task of tasks">{{task.description}}</h3>
    </div>
  `
})

export class AppComponent {
  public task: Task[];
  constructor() {
  this.tasks = [
    new Task("Create To-Do List app.", 0);
    new Task("Learn Kung Fu.", 1);
    new Task("Rewatch all LOTR movies.", 2);
    new Task("Do the laundry", 3);
    ];
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number){
  }
}
