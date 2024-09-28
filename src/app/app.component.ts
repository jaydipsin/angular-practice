import { Component } from '@angular/core';
import { HeaderComponent } from './dashboard/header/header.component';
import { ServerComponent } from './dashboard/server/server.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { SupportComponent } from './dashboard/support/support.component';
import { DashboardCommComponent } from './dashboard/dashboard-comm/dashboard-comm.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerComponent, TrafficComponent, SupportComponent,DashboardCommComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
}
