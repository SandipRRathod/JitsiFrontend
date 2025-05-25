import { Component } from '@angular/core';
import { MeetingService } from '../../core/services/meeting.service';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../../pipes/safe.pipe';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-jitsi',
  standalone: true,
  imports: [CommonModule,SafePipe,FooterComponent],
  templateUrl: './jitsi.component.html',
  styleUrl: './jitsi.component.css'
})
export class JitsiComponent {

  meetingUrl?: string;

  constructor(private meetingService: MeetingService) {}

  startMeeting() {
    this.meetingService.startMeeting().subscribe((data) => {
      this.meetingUrl = data.url;
    });
  }
}
