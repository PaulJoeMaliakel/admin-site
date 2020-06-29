import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService  {

  subject= new Subject();
  sub2= new Subject();
  constructor() { }

  sendMsg(product){
    console.log(product);
    this.subject.next(product);

  }

  getMsg(){
    return this.subject.asObservable();
  }
  sendId(id){
    this.sub2.next(id);

  }

  getId(){
    return this.sub2.asObservable();
  }
 
}
