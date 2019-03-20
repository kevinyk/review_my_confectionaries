import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cakes-list',
  templateUrl: './cakes-list.component.html',
  styleUrls: ['./cakes-list.component.css']
})
export class CakesListComponent implements OnInit {
  newCake: object = {name: '', imageUrl: ''};
  cakes: object[] = [];
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.getAllCakes();
  }
  submitCake(){
    let tempObservable = this._httpService.postCake(this.newCake);
    tempObservable.subscribe((responseData:any)=>{
      console.log('responseData', responseData);
    }
  }
  getAllCakes(){
    let tempObservable = this._httpService.getCakes();
    tempObservable.subscribe((responseData:any)=>{
      this.cakes = responseData;
    })
  }

}
