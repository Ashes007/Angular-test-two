import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myGroup:FormGroup;
  //dataObj= {};
  dataObj;
  constructor(private frmbuilder:FormBuilder,private  contact:ContactService) { 

   this.myGroup = frmbuilder.group({
       name:['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])],
       email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]], 
       subject: new FormControl(),
       message: new FormControl(),
    }); 
  }
  ngOnInit() {} 
  onSubmit(myGroup:NgForm)  
    {  
      //console.log(myGroup.controls.email.value); 
      var name 		= myGroup.controls.name.value;
      var email 	= myGroup.controls.email.value;
      var subject 	= myGroup.controls.subject.value;
      var message 	= myGroup.controls.message.value;
      var getData 	= {name: name, email: email, subject:subject, message:message };

      this.contact.saveData(getData).subscribe(data => {
			this.dataObj = data;
			console.log(data);
		}); 
    }

}


