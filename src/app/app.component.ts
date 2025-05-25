import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JitsiComponent } from './components/jitsi/jitsi.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,JitsiComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jitsi_Meeting_App';
}
