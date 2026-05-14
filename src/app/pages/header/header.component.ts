import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],

  animations: [
    trigger('fadeSlide', [

      transition(':enter', [

        style({
          opacity: 0,
          transform: 'translateY(-20px)'
        }),

        animate('500ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))

      ])

    ])
  ],

  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}
