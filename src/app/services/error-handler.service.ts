import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { NgxSimpleToastsService } from '@kurtz1993/ngx-toasts';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {
  constructor(private toastsService: NgxSimpleToastsService) {}

  handleError(err: any): void {
    // alert(err.message);

    if (err instanceof HttpErrorResponse) {
      console.log('http error...');
      console.log(err.error);
      this.toastsService.showToast({
        message: err.error.message,
        type: 'error',
      });
      return;
    }
    this.toastsService.showToast({
      message: err.message,
      type: 'error',
    });
  }
}
