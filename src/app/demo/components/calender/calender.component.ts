import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'his-calender',
  standalone: true,
  imports: [CommonModule,CalendarModule ,FormsModule],
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent  implements OnInit{

    date: Date[] | undefined;

    cn:any;

    ngOnInit(): void {

        this.cn = {
            today: 'Custom Today',
            clear: 'Clear it !!!'
          };

     }


}
