import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler } from "@angular/core";

export class ServerErrorHandler implements ErrorHandler {
  handleError(): void {
    console.log("unkonown error occured");
  }
}

