import { Component } from '@angular/core';
import { SharedBtnComponent } from '../shared/shared-btn/shared-btn.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedBtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
