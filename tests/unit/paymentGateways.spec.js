import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import moxios from 'moxios'
import axios from 'axios'

import PaymentMethods from '@/components/PaymentMethods.vue'

describe('PaymentMethods', () => {
  let wrapper = null
  let noPaymentMessage = 'No payment methods are available!'
  let paymentMethodsApiEndpoint = 'http://localhost:3000/payment-methods'
  let paymentMethods = [
    {
      'enabled': true,
      'id': '6',
      'is_new': false,
      'juspay_id': 'UPI',
      'merchantId': 2,
      'name': 'UPI',
      'offer': false,
      'offers': [],
      'payMethod': 'juspay',
      'prefix': '<div></div>',
      'priority': 8,
      'suffix': '<div></div>'
    }
  ]
  beforeEach(() => {
    moxios.install()
    wrapper = shallowMount(PaymentMethods)
  })

  afterEach(function () {
    // import and pass your custom axios instance to this method
    moxios.uninstall()
  })

  it('show default message if payment methods are not available', () => {
    expect(wrapper.text()).to.include(noPaymentMessage)
  })

  it('don\'t show default message if payment methods are available', (done) => {
    moxios.stubRequest(paymentMethodsApiEndpoint, {
      status: 200,
      responseText: paymentMethods
    })

    axios.get(paymentMethodsApiEndpoint)

    moxios.wait(function () {
      expect(wrapper.text()).to.not.include(noPaymentMessage)
      done()
    })
  })

  it('list available payment methods', (done) => {
    moxios.stubRequest(paymentMethodsApiEndpoint, {
      status: 200,
      responseText: paymentMethods
    })

    axios.get(paymentMethodsApiEndpoint)
    moxios.wait(function () {
      expect(wrapper.text()).to.include(paymentMethods[0].name)
      done()
    })
  })
})
