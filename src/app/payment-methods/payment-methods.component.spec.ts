import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { PaymentMethodsComponent } from './payment-methods.component';

const PaymentMethodsData: any = require('../../../paymentMethods.json');

describe('PaymentMethodsComponent', () => {
  let component: PaymentMethodsComponent;
  let fixture: ComponentFixture<PaymentMethodsComponent>;
	let de: DebugElement;
	let totalMethods: number = PaymentMethodsData['payment-methods'].length;
	let paymentMethodsService: PaymentMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodsComponent);
    component = fixture.componentInstance;
		de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

	it('should has merchantId', () => {
		expect(component.merchantId).toEqual(0);
		// expect(de.query(By.css('form#select-merchant-form'))).toBeTruthy();
		component.merchantId = 1;
		expect(component.merchantId).toEqual(1);
	});

	it('should not render payment methods if merchantId is 0', () => {
		expect(component.merchantId).toEqual(0);
		const paymentMethods = de.queryAll(By.css('.payment-method'));
		expect(paymentMethods.length).toEqual(0);
	});

	it(`should render payment methods of selected merchant only`, () => {
		component.merchantId = 1;
		fixture.detectChanges();
		let paymentMethodsToBeRendered = component.getPaymentMethods();
		let renderedPaymentMethods = de.queryAll(By.css('.payment-method'));
		expect(renderedPaymentMethods.length).toEqual(paymentMethodsToBeRendered.length);
		let index: number = Math.floor(Math.random() * paymentMethodsToBeRendered.length) + 1;
		expect(renderedPaymentMethods[index].nativeElement.textContent).toContain(paymentMethodsToBeRendered[index].title);
	});

	it('should show error message `No payment methods found!` for wrong merchant id', () => {
		component.merchantId = 3;
		fixture.detectChanges();
		let paymentMethodsToBeRendered = component.getPaymentMethods();
		let renderedPaymentMethods = de.queryAll(By.css('.payment-method'));
		expect(renderedPaymentMethods.length).toEqual(0);
		expect(de.query(By.css('.payment-method-error')).nativeElement.textContent.trim()).toEqual('No payment methods found!');
	});

});
