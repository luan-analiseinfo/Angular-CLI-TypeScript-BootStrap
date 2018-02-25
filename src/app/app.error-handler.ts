import {Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
/**
 * Created by luana on 24/02/2018.
 */
export  class ErrorHandler{
  static handleError(error: Response | any){
      let errorMessage: string
      if(error instanceof  Response){
        errorMessage = `Error ${error.status} ao acessar URL ${error.url} - ${error.statusText}` ;
      }else{
        errorMessage = error.toString();
      }
      console.log(errorMessage)
    return Observable.throw(errorMessage);
  }
}