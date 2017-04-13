import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  public exampleText1 = 'Beispieltext 1';
  public myTodos = [
    'Wäsche waschen',
    'Einkaufen gehen',
    'Wohnung putzen'
  ];
  
  constructor() { }

  ngOnInit() {
    this.exampleText1 = "Beispieltext 2";
  }

  changeText(){
    this.exampleText1 = 'Beispieltext 3';
  }
}
