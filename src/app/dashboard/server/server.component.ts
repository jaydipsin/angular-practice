import { Component } from '@angular/core';
import { DashboardCommComponent } from '../dashboard-comm/dashboard-comm.component';
@Component({
  selector: 'app-server',
  standalone: true,
  imports: [DashboardCommComponent],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  currentStatus = 'online';

}
