import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TextSummariserService {
  private apiUrl = 'http://localhost:3000/summarise';

  constructor(private _httpClient: HttpClient) {}

  summariseText(text: string): Observable<string> {
    return this._httpClient.post<string>(this.apiUrl, { text }).pipe(
      map((response: any) => response.summary)
    );
  }
}
