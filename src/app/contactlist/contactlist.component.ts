import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
  contactlist = {};
  constructor(private contact: ContactService) {}
  
  ngOnInit() {
	  this.getList();
  }

  getList() {
    this.contact.getdata().subscribe(res => {
    	//console.log(res);
     this.contactlist = res;
    });
  }

  deleteData = function(id) {
  	var data = {_id:id};
  	if(confirm('Are you sure')){
	    this.contact.deleteData(data).subscribe(res => {
	      		this.contactlist = res;
	    });
	}
}

}
