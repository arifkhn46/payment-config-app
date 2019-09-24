import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs'; // Add impor

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodsService {
	paymentMethods: Array<object> = [];

  constructor() { }

	all(): Observable<Array<object>> {
		return of(this.paymentMethods);
	}
}
