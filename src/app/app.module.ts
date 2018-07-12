import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { InnerHeaderComponent } from './inner-header/inner-header.component';
import { InnterLayoutComponent } from './innter-layout/innter-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

import { ContactService } from './contact.service';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { EditcontactComponent } from './editcontact/editcontact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    InnerHeaderComponent,
    InnterLayoutComponent,
    HomeLayoutComponent,
    GalleryComponent,
    ContactComponent,
    ContactlistComponent,
    EditcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
