import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from './confirmPassword';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  myForm:any= FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router:Router, ) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      title:['', Validators.required],
      userName:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      tel:['', [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)]],
      password:['',[Validators.required, Validators.minLength(8)]],
      confirmPassword:['', Validators.required],
      acceptTerms:[false, Validators.requiredTrue]
    },{
      validator:MustMatch('password', 'confirmPassword')
    });


  }

get f(){return this.myForm.controls;}

  onSubmit() {
    this.submitted = true;

    if (this.myForm.invalid) {
        return;
    }

   alert('success!!!');
}

onReset() {
    this.submitted = false;
    this.myForm.reset();
}
}
