import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResapiService } from '../services/resapi.service';

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public name = "Niranjan ";
  public id = "3958779 ";
  public validUser = true;
  public data ="";
  isclicked = false;
  hikeDetails:any;
  binding:any;
  url = "../assets/data/meri-tarah-jubin-nautiyal-128-kbps-sound.mp3";
 

  constructor( private _restService : ResapiService) { }

  ngOnInit(): void {
    // this.hikeDetails = this._restService.getHikeDetails();
    this._restService.getHikeDetails().
    subscribe(edata => this.hikeDetails = edata)

  }

  greetUser(){
    return "Your emp id is : "+this.id;

    
  }
  onClick(value : any){
    console.log("onClick called"+value)
    this.isclicked = true;
    return this.data = this.id+value;
  }

  @Output() public childEvent = new EventEmitter();

  onfire(){
    this.childEvent.emit(" I am from test component (child component)");
    console.log("onfire called "+this.childEvent)
  }

}
