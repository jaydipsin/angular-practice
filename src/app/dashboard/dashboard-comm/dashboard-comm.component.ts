import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-comm',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-comm.component.html',
  styleUrl: './dashboard-comm.component.css'
})
export class DashboardCommComponent {
@Input({required:true}) image!:{ image:string; alt:string};
@Input({required:true}) title!:string
}
