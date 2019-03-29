import { Component } from '@angular/core';

@Component({
  selector: 'sn-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title = 'Hey there!! 👋';
  subtitle = 'My name is Jesús';
  description = `I'm a full-stack developer and I love coding!!!. You can learn more about me in the followings sites:`;
  links = [
    { url: 'https://www.linkedin.com/in/jesusperezrocafernandez/', name: 'LinkedIn' },
    { url: 'https://github.com/yisus82/', name: 'Github' },
    { url: 'https://yisus82.github.io/', name: 'Portfolio' }
  ];

  contact = {
    description: 'If you want to contact me you can send me an email to:',
    mail: 'jprf.liceo@gmail.com'
  };
}
