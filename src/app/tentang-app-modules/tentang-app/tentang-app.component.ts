import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentang-app',
  templateUrl: './tentang-app.component.html',
  styleUrls: ['./tentang-app.component.css']
})
export class TentangAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testVariableJSTS() {

    const foo = {bar: 0};
    foo.bar = 42;
    console.log(foo);
  }

}
