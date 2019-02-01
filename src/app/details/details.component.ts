import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() img;
  @Output() toggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('ing: ', this.img);
  }

  close() {
    this.toggle.emit({closeDetails: true});
  }

}
