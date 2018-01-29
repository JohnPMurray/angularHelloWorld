import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppPage1 } from './page1.component';
import { AppPage2 } from './page2.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: "/page1",
    pathMatch: 'full'
  },
   { path: 'Page1', component: AppPage1 },
   { path: 'Page2', component: AppPage2 },
];

@NgModule ({
   imports: [ BrowserModule,
   RouterModule.forRoot(appRoutes)],
   declarations: [ AppComponent,AppPage1,AppPage2],
   bootstrap: [ AppComponent ]
})
export class AppModule { }