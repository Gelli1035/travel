import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  places = [
    { name: 'Paris', cost: '$1500', duration: '7 Days', image: 'assets/paris.jpg' },
    { name: 'Bali', cost: '$1200', duration: '5 Days', image: 'assets/bali.jpg' },
    { name: 'Maldives', cost: '$2000', duration: '6 Days', image: 'assets/maldives.jpg' },
    { name: 'Tokyo', cost: '$1800', duration: '8 Days', image: 'assets/tokyo.jpg' },
    { name: 'Sydney', cost: '$1700', duration: '7 Days', image: 'assets/sydney.jpg' },
    { name: 'New York', cost: '$1900', duration: '6 Days', image: 'assets/new_york.jpg' },
    { name: 'Rome', cost: '$1600', duration: '5 Days', image: 'assets/rome.jpg' },
    { name: 'Dubai', cost: '$1400', duration: '4 Days', image: 'assets/dubai.jpg' },
    { name: 'Singapore', cost: '$1300', duration: '4 Days', image: 'assets/singapore.jpg' }
  ];

}
