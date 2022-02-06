import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss']
})
export class LaptopsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  public colorid: any;
  
  id =1;
  // public id:SVGStringList;

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));

    // let id = this.route.snapshot.params['id']
    // console.log('url id '+id)
    // this.colorid = id;
    // } );

      let userid = this.route.paramMap.subscribe( (paramss : ParamMap) => {
        let id =paramss.get('id');
        this.colorid = id;
        if(this.colorid != null){
          console.log("color id "+this.colorid);
        }else{
          console.log("color id "+this.colorid);
        }
    } )


  }

  
}
