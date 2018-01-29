import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   template: `
   <div>
        <a [routerLink] = "['/Page1']">Page 1</a>
        <a [routerLink] = "['/Page2']">Page 2</a>
   </div>
   <router-outlet></router-outlet>`
})
export class AppComponent  { }