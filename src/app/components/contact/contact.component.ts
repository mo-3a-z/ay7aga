import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-contact',
  standalone: true,  // Required for standalone components
  imports: [FormsModule, StarComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] 
})
export class ContactComponent {
  isData: boolean = false;
  userName: string = '';
  userAge: string = '';
  userEmail: string = ''; 
  userPassword: string = '';
}
