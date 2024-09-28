import { Component } from '@angular/core';
import { SharedBtnComponent } from '../../shared/shared-btn/shared-btn.component';
import { SharedInputsComponent } from '../../shared/shared-inputs/shared-inputs.component';
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [SharedBtnComponent,SharedInputsComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
