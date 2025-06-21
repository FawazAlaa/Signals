import { effect, Injectable, signal } from '@angular/core';
// interface 
@Injectable({
  providedIn: 'root'
})
export class Counter {

  // count=signal<object[]>([]);
  // constructor(){
  //   effect(() => {
  //     console.log("You have added to your cart ",this.count())

  //   });
  // }
  // ngOnInit(): void {
  //   this.count.set([])
  // }
  // increment(){
  //   this.count.update((prev)=>prev.push({}))
  // }
  // decrement(){
  //   this.count.update((prev)=>prev-1)
  // }

}
