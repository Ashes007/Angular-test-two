import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ContactComponent} from './contact/contact.component';

import {InnterLayoutComponent} from './innter-layout/innter-layout.component';
import {HomeLayoutComponent} from './home-layout/home-layout.component';

const routes: Routes = [
		{
	      path: '',
	      component: HomeLayoutComponent,
	      children: [
	      	{
		      path: '',
		      component: HomeComponent
		    }
	      ]
	    },
	    {
	      path: '',
	      component: InnterLayoutComponent,
	      children: [
	      	{
		      path: 'about',
		      component: AboutComponent
		    },
		    {
		      path: 'services',
		      component: ServicesComponent
		    },
		    {
		      path: 'gallery',
		      component: GalleryComponent
		    },
		    {
		      path: 'contact',
		      component: ContactComponent
		    }

	      ]
	    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
