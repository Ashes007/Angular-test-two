import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from "@angular/router";
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {

  myGroup:FormGroup;
  contactInfo = {};
  dataObj;
  constructor(
  		private frmbuilder:FormBuilder,
  		private contact:ContactService, 
  		private route: ActivatedRoute,
  		private router: Router
  ){ 
   this.myGroup = frmbuilder.group({
       name		:['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])],
       email	:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]], 
       subject	: new FormControl(),
       message	: new FormControl(),
       id	  	: new FormControl()
    }); 
  }

  ngOnInit() {
  	this.route.params.subscribe(params => {
	  	this.contact.edit(params['id']).subscribe(res => {
	     this.contactInfo = res[0];	     
	    });
    });
  }

  onSubmit(myGroup:NgForm)  
    {  
      var id 		= myGroup.controls.id.value;
      var name 		= myGroup.controls.name.value;
      var email 	= myGroup.controls.email.value;
      var subject 	= myGroup.controls.subject.value;
      var message 	= myGroup.controls.message.value;
      var getData 	= {name: name, email: email, subject:subject, message:message };

      this.contact.updateData(getData,id).subscribe(data => {
			this.dataObj = data;
			this.router.navigate(['/contactlist']);
		}); 
    }

}
