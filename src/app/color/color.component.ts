import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getcolors().subscribe(d=>{
      this.colors=d;
    })
  }

}
