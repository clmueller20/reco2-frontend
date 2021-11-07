import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-input-screen',
  templateUrl: './select-input-screen.component.html',
  styleUrls: ['./select-input-screen.component.css']
})
export class SelectInputScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  vehicleTamplate(){
    alert('Coming soon');
  }
}
