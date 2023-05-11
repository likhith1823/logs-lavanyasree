import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  type:string="password";
isText:boolean=false;
eyeIcon:string="fa-eye-slash"
loginForm!:FormGroup;
  constructor(private fb:FormBuilder){ }
  ngOnInit(): void {
      this.loginForm=this.fb.group({
        username:['',Validators.required],
        password:['',Validators.required],
      }

      )

      
  }
  hideShowPass(){
this.isText=!this.isText;
this.isText?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
this.isText?this.type="text":this.type="password";
  }
  onSubmit(){
    if(this.loginForm.valid){
     console.log(this.loginForm.value)
     alert("your form is valid");
    }
    else{
       console.log("this form is not valid");
       this.validateAllFormFields(this.loginForm);
       alert("your form is invalid");

     }
  }
  private validateAllFormFields(Fg:FormGroup<any>){
    
    Object.keys(Fg.controls).forEach(field=>{
      const control:any=Fg.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});

      }else if(control instanceof FormGroup){
        this.validateAllFormFields(control)

      }
    })
  }

}
