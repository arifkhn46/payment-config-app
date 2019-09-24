import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs'; // Add impor

import { PaymentMethodsService } from './payment-methods.service';

describe('PaymentMethodsService', () => {
	let paymentMethodsService: PaymentMethodsService; // Add this

  beforeEach(() => {
		TestBed.configureTestingModule({
      providers: [PaymentMethodsService]
    });

    paymentMethodsService = TestBed.get(PaymentMethodsService); // Add this
	});

  it('should be created', () => {
    expect(paymentMethodsService).toBeTruthy();
  });

	describe('all', () => {
		it('should return a collection of users', ()  => {
			const paymentMethods = [
				{
					"title": "Lazypay",
					"btnText": "Pay Rs {amount} By Lazypay",
					"enabled": true,
					"id": "10",
					"is_new": false,
					"juspay_id": "lazypay",
					"merchantId": 1,
					"name": "BUY NOW PAY LATER",
					"offer": "Extra 5% Cashback on HDFC Credit Card",
					"offers": [],
					"payMethod": "lazypay",
					"prefix": "Skip paying again & again on all purchases, Pay one bill instead",
					"priority": 4
				}
			];

			let response;
      spyOn(paymentMethodsService, 'all').and.returnValue(of(paymentMethods));

			paymentMethodsService.all().subscribe(res => {
				response = res;
			});

			expect(response).toEqual(paymentMethods);
		});
	});
});
