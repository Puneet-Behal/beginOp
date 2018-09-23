import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class RestApiService {

    baseURL: string;
    requestType: string;
    parameters?: string;
    constructor(private http: HttpClient) { }
    public invokeAPI(requestType, baseUrl, apiQueryType, parameters) {
        this.baseURL = baseUrl;
        this.requestType = requestType;
        this.parameters = parameters;
        const params = new HttpParams().set('param', JSON.stringify(parameters));
        switch (requestType) {
            case "GET":
            return this.http.get<any>(this.baseURL + apiQueryType, {params})
                    .pipe(catchError(this.handleError));

            case "PUT":
                return this.http.put<any>(this.baseURL + apiQueryType, parameters)
                    .pipe(
                        catchError(this.handleError)
                    );

            case "POST":
                return this.http.post<any>(this.baseURL + apiQueryType, params)
                    .pipe(
                        catchError(this.handleError)
                    );

            case "DELETE":
                return this.http.delete<any>(this.baseURL + apiQueryType, parameters)
                    .pipe(
                        catchError(this.handleError)
                    );
        }
    }

    public getInvokeAPIWithoutParams(requestType, baseUrl, apiQueryType) {
        this.baseURL = baseUrl;
        this.requestType = requestType;
        switch (requestType) {
            case "GET":
                return this.http.get<any>(this.baseURL + apiQueryType);
        }
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            alert("An error occurred:', error.error.message");
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            alert(
                `Backend returned code ${error.message}, ` +
                `body was: ${error.message}`);
        }
        return null;
    };


}
