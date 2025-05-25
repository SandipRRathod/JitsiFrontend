import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  constructor(private http: HttpClient) {}

  startMeeting(): Observable<{ roomName: string; url: string }> {
    return this.http.get<{ roomName: string; url: string }>(
      'https://jitsibackend.onrender.com/api/meetings/start'
    );
  }

}
