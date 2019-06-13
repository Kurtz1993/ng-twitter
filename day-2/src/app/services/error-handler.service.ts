import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {
  handleError(err: any): void {
    // alert(err.message);

    if (err instanceof HttpErrorResponse) {
      console.log('http error...');
      console.log(err.error);
      return;
    }
  }
}
