import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  saveData(contact_val)
  {
  	return this.http.post('http://localhost:8081/contact', contact_val).map(
        success => {
          return success;         
        },
        err => {
          return err;       
        },
      );
  }

  getdata()
  {
      const uri = 'http://localhost:8081/contactlist';
      return this.http.get(uri).map(res => {
                return res;
              });
  }

  edit(id)
  {
      const uri = 'http://localhost:8081/edit/'+id;
      return this.http.get(uri).map(res => {
                return res;
              });
  }

  updateData(contact_val,id)
  {
    return this.http.post('http://localhost:8081/update/'+id, contact_val).map(
        success => {
          return success;         
        },
        err => {
          return err;       
        },
      );
  }

  deleteData(id)
  {
      const uri = 'http://localhost:8081/delete/';
      return this.http.post(uri,id).map(res => {
                return res;
              });
  }

}
