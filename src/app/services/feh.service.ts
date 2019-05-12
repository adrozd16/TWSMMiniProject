import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from "src/environments/environment";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class FehService {
  
  constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  

  getCharacterList(): Observable<any>{
    return this.httpClient.get(API_URL + "/api/characters");
  }

  getCharacter(id){
    return this.httpClient.get(API_URL + "/api/characters/" + id);
  }

  saveCharacter(chr){
    return this.httpClient.post(API_URL + "/api/characters", chr).pipe(
      catchError(this.handleError)
    );
  }

  getUserCharacterList(username): Observable<any>{
    return this.httpClient.get(API_URL + "/api/characters/user/"+username);
  }
}
