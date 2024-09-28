import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-shared-inputs',
  standalone: true,
  imports: [],
  templateUrl: './shared-inputs.component.html',
  styleUrl: './shared-inputs.component.css',
  encapsulation: ViewEncapsulation.None, // by setting this host style is not worked
  host: {
    class: 'control',
    '(click)': 'onClick()'
  },
})
export class SharedInputsComponent {
  // @HostBinding('class') className = 'control';
  label = input.required<string>();
  private el = inject(ElementRef);

  onClick() {
    console.log(this.el);
    
  }
}
