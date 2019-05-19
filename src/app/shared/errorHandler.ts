import { HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';


export class ErrorHandler {
	
	static handleError(error: HttpErrorResponse) {
		let errorMessage: any;

		if(error.error instanceof ErrorEvent) {
			errorMessage = `Meu - ${error.error.message}`;
		}else {
			errorMessage = `Ocorreu um erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
		}

		console.log(errorMessage);

		return throwError(errorMessage);
		
	}
}