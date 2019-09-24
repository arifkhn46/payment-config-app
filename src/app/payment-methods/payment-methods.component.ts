import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {

	paymentMethodsData: Array<object>;
	merchantId: number;

  constructor() {
		this.paymentMethodsData =  require('../../../paymentMethods.json')['payment-methods'];
		this.merchantId = 0;
	}

  ngOnInit() {
  }

	getPaymentMethods() {
		let paymentMethodsToBeRendered = [];

		for (let key in this.paymentMethodsData) {
			if (this.paymentMethodsData[key]['merchantId'] === this.merchantId) {
				paymentMethodsToBeRendered.push(this.paymentMethodsData[key]);
      }
    }

		return paymentMethodsToBeRendered;
	}

}
