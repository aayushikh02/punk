import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','bootstrap.css']
})
export class AppComponent {
  title = 'app';
  ans;
  anss;
  url="https://api.punkapi.com/v2/beers/";
  arr=[{id:5,name:"Aayushi"}];

  constructor(public http:HttpClient){
  }
  
fun(){
  // console.log(this.arr);
  // console.log(this.arr[0].id);
 
    this.http.get(this.url).subscribe((data)=>{
    console.log(data);
    this.ans=data;
    // return this.anss;
    })
}

ngOnInit() { 
  
// this.fun(); 
// }
}
}