import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private frmbuilder:FormBuilder) { 

    this.myGroup = frmbuilder.group({
       name:['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])],
       email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]], 
    });
  }
  ngOnInit() {}  

}


