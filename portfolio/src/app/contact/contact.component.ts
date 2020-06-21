import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule ,FormsModule, FormBuilder, NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare var $;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {

  name;
 
  expan: boolean;

  constructor(private _http: HttpClient, private formBuilder: FormBuilder) { }
  contact = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });
  
  ngOnInit(): void {
  }

  @ViewChild('formDirective') private formDirective: NgForm;

  submit() {
    if(this.contact.valid){
    this._http.post('https://formspree.io/xnqgpqzk', this.contact.value)
      .subscribe(res => {
        if (res['ok']) {
          this.expan = true;
          let modal = document.getElementById("success");
          this.name = this.contact.value.name;
          this.formDirective.resetForm();
          modal.style.display = "block";
          window.onclick = function (event) {
              if (event.target == modal) {
             modal.style.display = "none";
      }
    }

        }
        else
         {
          let modal = document.getElementById("retry");
          modal.style.display = "block";
          window.onclick = function (event) {
              if (event.target == modal) {
             modal.style.display = "none";
           }
           }

         }
      })
  }
}

get rf() { return this.contact.controls; }

getRegisterErrorMessage(x: any) {
  switch(x) {
    case "name":
      if (this.contact.get('name').hasError('required')) {
        return 'Please provide an input';
      }
    case "email":
      if (this.contact.get('email').hasError('required')) {
        return 'Please provide an input';
      } else if (this.contact.get('email').hasError('email')){
        return this.contact.get('email').hasError('email') ? 'Not a valid email' : '';
      }
    case "message":
      if (this.contact.get('message').hasError('required')) {
        return;
      }
    }
    
  }

  spanClick(){
    let modal = document.getElementById("success");
    modal.style.display = "none";
  }

  span(){
    let modal = document.getElementById("retry");
    modal.style.display = "none";
  }


}
