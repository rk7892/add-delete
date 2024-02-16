import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'add-delete';

  // defaultArray: any[] = [{
  //   fname: 'ranjith',
  //   age: 31,
  //   phone: 9524414213,
  // }
  // ]



myReactiveForm: FormGroup;

 listData: any;

  constructor (private formBuilder: FormBuilder) {
    this.listData = [
      {
        fname: "ranjith",
        age: 31,
        phone: 9524414213
      },
      {
        fname: "dinesh",
        age: 22,
        phone: 987654321
      }
    ];
    this.myReactiveForm = this.formBuilder.group({
      fname: [''],
      age: [],
      phone: [],
    })
  }

 add(){
  this.listData.push(this.myReactiveForm.value)
 };

 delete(index: number) {
  this.listData.splice(index, 1);
}


//  delete(element: any){
//   this.listData.forEach((value: any,index: any) =>{
//     if(value == element)
//     this.listData.splice(index,1)
//   })
//  }
// delete(element: any) {
//   this.listData = this.listData.filter((value: any) => value !== element);
// }


}
