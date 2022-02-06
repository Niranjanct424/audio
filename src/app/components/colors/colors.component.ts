import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  // public input: any;
  // public userInput:any;

  // colors = [
  //   { "color":"Blue","id":1 },
  //   { "color":"Red","id":2 }
  // ];

  // onSelect(item:any){
  //   console.log("input "+this.input);
  //   this._router.navigate(['/laptops',item.id]);
  // }

}
