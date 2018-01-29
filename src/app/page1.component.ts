import { Component } from '@angular/core';
import { WSAESHUTDOWN } from 'constants';

@Component({
selector: 'my-app',
templateUrl: 'app/app.component.html',

})


export class AppPage1 {
  header : string = 'Hello World Angular2'
  personalBio : string = "Having done very little web development in the past,\
                          I hope to learn more in depth web development techniques\
                          that will allow me to contribute on a professional level"
  appStatus : boolean = true
  imageList : any[] = [{
    "name" : "McEnroe",
    "img" : "http://i.dailymail.co.uk/i/pix/2017/06/04/11/41168A0400000578-0-image-a-7_1496571501532.jpg",
    "url" : "https://en.wikipedia.org/wiki/John_McEnroe"
  },
  {
    "name" : "Oscar",
    "img" : "https://vignette.wikia.nocookie.net/muppet/images/5/5f/OscarsClassicStare.jpg/revision/latest?cb=20120222062511",
    "url" : "https://en.wikipedia.org/wiki/Oscar_the_Grouch"
  }];
}

