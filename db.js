const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const paymentMethods = [
  {
    'enabled': true,
    'id': '1',
    'is_new': false,
    'juspay_id': 'WALLET',
    'merchantId': 1,
    'name': 'WALLET',
    'offer': false,
    'offers': [],
    'options': [
      {
        'enabled': true,
        'label': 'Airtel Money',
        'offer': false,
        'paymentMethod': 'AIRTELMONEY',
        'paymentMethodType': 'WALLET',
        'value': 'AIRTELMONEY'
      },
      {
        'enabled': true,
        'label': 'AMEX eZeClick',
        'offer': false,
        'paymentMethod': 'AMEXEZECLICK',
        'paymentMethodType': 'WALLET',
        'value': 'AMEXEZECLICK'
      },
      {
        'enabled': true,
        'label': 'Freecharge',
        'offer': false,
        'paymentMethod': 'FREECHARGE',
        'paymentMethodType': 'WALLET',
        'priority': 5,
        'value': 'FREECHARGE'
      },
      {
        'enabled': true,
        'label': 'Jiomoney',
        'offer': false,
        'paymentMethod': 'JIOMONEY',
        'paymentMethodType': 'WALLET',
        'value': 'JIOMONEY'
      },
      {
        'enabled': true,
        'label': 'Mobikwik',
        'offer': 'Get 15% Supercash, Upto Rs 300',
        'paymentMethod': 'MOBIKWIK',
        'paymentMethodType': 'WALLET',
        'priority': 2,
        'value': 'MOBIKWIK'
      },
      {
        'enabled': true,
        'label': 'Olamoney',
        'offer': false,
        'paymentMethod': 'OLAMONEY',
        'paymentMethodType': 'WALLET',
        'value': 'OLAMONEY'
      },
      {
        'enabled': true,
        'label': 'Oxigen',
        'offer': false,
        'paymentMethod': 'OXIGEN',
        'paymentMethodType': 'WALLET',
        'value': 'OXIGEN'
      },
      {
        'enabled': true,
        'label': 'PayCash',
        'offer': false,
        'paymentMethod': 'PAYCASH',
        'paymentMethodType': 'WALLET',
        'value': 'PAYCASH'
      },
      {
        'enabled': true,
        'label': 'PayTM',
        'offer': false,
        'paymentMethod': 'PAYTM',
        'paymentMethodType': 'WALLET',
        'priority': 1,
        'value': 'PAYTM'
      },
      {
        'enabled': true,
        'label': 'PayU Money',
        'offer': false,
        'paymentMethod': 'PAYUMONEY',
        'paymentMethodType': 'WALLET',
        'priority': 4,
        'value': 'PAYUMONEY'
      },
      {
        'enabled': true,
        'label': 'PhonePe',
        'offer': false,
        'paymentMethod': 'PHONEPE',
        'paymentMethodType': 'WALLET',
        'priority': 3,
        'value': 'PHONEPE'
      },
      {
        'enabled': true,
        'label': 'Yes Pay',
        'offer': false,
        'paymentMethod': 'YESPAY',
        'paymentMethodType': 'WALLET',
        'value': 'YESPAY'
      },
      {
        'enabled': true,
        'label': 'YPayCash',
        'offer': false,
        'paymentMethod': 'YPAYCASH',
        'paymentMethodType': 'WALLET',
        'value': 'YPAYCASH'
      }
    ],
    'payMethod': 'juspay',
    'prefix': '<div></div>',
    'priority': 3,
    'suffix': '<div></div>'
  },
  {
    'btnText': 'Pay Rs {amount} By Lazypay',
    'enabled': true,
    'id': '10',
    'is_new': false,
    'juspay_id': 'lazypay',
    'merchantId': 1,
    'name': 'BUY NOW PAY LATER',
    'offer': 'Extra 5% Cashback on HDFC Credit Card',
    'offers': [],
    'payMethod': 'lazypay',
    'prefix': 'Skip paying again & again on all purchases, Pay one bill instead',
    'priority': 4
  },
  {
    'enabled': true,
    'id': '2',
    'is_new': true,
    'juspay_id': 'WALLET',
    'merchantId': 2,
    'name': 'Wallet',
    'offer': 'Extra 5% Cashback',
    'offers': [],
    'options': [
      {
        'enabled': true,
        'label': 'Airtel Money',
        'offer': '5% upto Rs.200',
        'paymentMethod': 'AIRTELMONEY',
        'paymentMethodType': 'WALLET',
        'value': 'AIRTELMONEY'
      },
      {
        'enabled': true,
        'label': 'AMEX eZeClick',
        'offer': false,
        'paymentMethod': 'AMEXEZECLICK',
        'paymentMethodType': 'WALLET',
        'value': 'AMEXEZECLICK'
      },
      {
        'enabled': true,
        'label': 'Freecharge',
        'offer': false,
        'paymentMethod': 'FREECHARGE',
        'paymentMethodType': 'WALLET',
        'priority': 5,
        'value': 'FREECHARGE'
      },
      {
        'enabled': true,
        'label': 'Jiomoney',
        'offer': false,
        'paymentMethod': 'JIOMONEY',
        'paymentMethodType': 'WALLET',
        'value': 'JIOMONEY'
      },
      {
        'enabled': true,
        'label': 'Mobikwik',
        'offer': false,
        'paymentMethod': 'MOBIKWIK',
        'paymentMethodType': 'WALLET',
        'priority': 2,
        'value': 'MOBIKWIK'
      },
      {
        'enabled': true,
        'label': 'Olamoney',
        'offer': false,
        'paymentMethod': 'OLAMONEY',
        'paymentMethodType': 'WALLET',
        'value': 'OLAMONEY'
      },
      {
        'enabled': true,
        'label': 'Oxigen',
        'offer': false,
        'paymentMethod': 'OXIGEN',
        'paymentMethodType': 'WALLET',
        'value': 'OXIGEN'
      },
      {
        'enabled': true,
        'label': 'PayCash',
        'offer': false,
        'paymentMethod': 'PAYCASH',
        'paymentMethodType': 'WALLET',
        'value': 'PAYCASH'
      },
      {
        'enabled': true,
        'label': 'PayTM',
        'offer': 'Extra 5% Cashback on PayTM Wallet',
        'paymentMethod': 'PAYTM',
        'paymentMethodType': 'WALLET',
        'priority': 1,
        'value': 'PAYTM'
      },
      {
        'enabled': true,
        'label': 'PayU Money',
        'offer': false,
        'paymentMethod': 'PAYUMONEY',
        'paymentMethodType': 'WALLET',
        'priority': 4,
        'value': 'PAYUMONEY'
      },
      {
        'enabled': true,
        'label': 'PhonePe',
        'offer': false,
        'paymentMethod': 'PHONEPE',
        'paymentMethodType': 'WALLET',
        'priority': 3,
        'value': 'PHONEPE'
      },
      {
        'enabled': true,
        'label': 'Yes Pay',
        'offer': false,
        'paymentMethod': 'YESPAY',
        'paymentMethodType': 'WALLET',
        'value': 'YESPAY'
      },
      {
        'enabled': true,
        'label': 'YPayCash',
        'offer': false,
        'paymentMethod': 'YPAYCASH',
        'paymentMethodType': 'WALLET',
        'value': 'YPAYCASH'
      }
    ],
    'payMethod': 'juspay',
    'prefix': '<div></div>',
    'priority': 6,
    'suffix': '<div></div>'
  },
  {
    'enabled': true,
    'id': '3',
    'is_new': false,
    'juspay_id': 'NB',
    'merchantId': 1,
    'name': 'NETBANKING',
    'offer': false,
    'offers': [],
    'options': [
      {
        'enabled': true,
        'label': 'Allahabad Bank',
        'offer': false,
        'paymentMethod': 'NB_ALLB',
        'paymentMethodType': 'NB',
        'value': 'NB_ALLB'
      },
      {
        'enabled': true,
        'label': 'Andhra Bank',
        'offer': false,
        'paymentMethod': 'NB_ANDHRA',
        'paymentMethodType': 'NB',
        'value': 'NB_ANDHRA'
      },
      {
        'enabled': true,
        'label': 'Axis Bank',
        'mlabel': 'Axis',
        'offer': false,
        'paymentMethod': 'NB_AXIS',
        'paymentMethodType': 'NB',
        'priority': 4,
        'value': 'NB_AXIS'
      },
      {
        'enabled': true,
        'label': 'Bank of India',
        'offer': false,
        'paymentMethod': 'NB_BOI',
        'paymentMethodType': 'NB',
        'value': 'NB_BOI'
      },
      {
        'enabled': true,
        'label': 'Bank of Maharashtra',
        'offer': false,
        'paymentMethod': 'NB_BOM',
        'paymentMethodType': 'NB',
        'value': 'NB_BOM'
      },
      {
        'enabled': true,
        'label': 'Central Bank Of India',
        'offer': false,
        'paymentMethod': 'NB_CBI',
        'paymentMethodType': 'NB',
        'value': 'NB_CBI'
      },
      {
        'enabled': true,
        'label': 'Corporation Bank',
        'offer': false,
        'paymentMethod': 'NB_CORP',
        'paymentMethodType': 'NB',
        'value': 'NB_CORP'
      },
      {
        'enabled': true,
        'label': 'Development Credit Bank',
        'offer': false,
        'paymentMethod': 'NB_DCB',
        'paymentMethodType': 'NB',
        'value': 'NB_DCB'
      },
      {
        'enabled': true,
        'label': 'Federal Bank',
        'offer': false,
        'paymentMethod': 'NB_FED',
        'paymentMethodType': 'NB',
        'value': 'NB_FED'
      },
      {
        'enabled': true,
        'label': 'HDFC Bank',
        'mlabel': 'HDFC',
        'offer': false,
        'paymentMethod': 'NB_HDFC',
        'paymentMethodType': 'NB',
        'priority': 1,
        'value': 'NB_HDFC'
      },
      {
        'enabled': true,
        'label': 'ICICI Netbanking',
        'mlabel': 'ICICI',
        'offer': false,
        'paymentMethod': 'NB_ICICI',
        'paymentMethodType': 'NB',
        'priority': 2,
        'value': 'NB_ICICI'
      },
      {
        'enabled': true,
        'label': 'Industrial Development Bank of India',
        'offer': false,
        'paymentMethod': 'NB_IDBI',
        'paymentMethodType': 'NB',
        'value': 'NB_IDBI'
      },
      {
        'enabled': true,
        'label': 'Indian Bank ',
        'offer': false,
        'paymentMethod': 'NB_INDB',
        'paymentMethodType': 'NB',
        'value': 'NB_INDB'
      },
      {
        'enabled': true,
        'label': 'IndusInd Bank',
        'offer': false,
        'paymentMethod': 'NB_INDUS',
        'paymentMethodType': 'NB',
        'value': 'NB_INDUS'
      },
      {
        'enabled': true,
        'label': 'Indian Overseas Bank',
        'offer': false,
        'paymentMethod': 'NB_IOB',
        'paymentMethodType': 'NB',
        'value': 'NB_IOB'
      },
      {
        'enabled': true,
        'label': 'Janata Sahakari Bank',
        'offer': false,
        'paymentMethod': 'NB_JSB',
        'paymentMethodType': 'NB',
        'value': 'NB_JSB'
      },
      {
        'enabled': true,
        'label': 'Kotak Bank',
        'mlabel': 'Kotak',
        'offer': false,
        'paymentMethod': 'NB_KOTAK',
        'paymentMethodType': 'NB',
        'priority': 5,
        'value': 'NB_KOTAK'
      },
      {
        'enabled': true,
        'label': 'Lakshmi Vilas Bank Retail',
        'offer': false,
        'paymentMethod': 'NB_LVB',
        'paymentMethodType': 'NB',
        'value': 'NB_LVB'
      },
      {
        'enabled': true,
        'label': 'Lakshmi Vilas Bank Corporate',
        'offer': false,
        'paymentMethod': 'NB_LVBCORP',
        'paymentMethodType': 'NB',
        'value': 'NB_LVBCORP'
      },
      {
        'enabled': true,
        'label': 'Oriental Bank Of Commerce',
        'offer': false,
        'paymentMethod': 'NB_OBC',
        'paymentMethodType': 'NB',
        'value': 'NB_OBC'
      },
      {
        'enabled': true,
        'label': 'Punjab and Sind Bank',
        'offer': false,
        'paymentMethod': 'NB_PNJSB',
        'paymentMethodType': 'NB',
        'value': 'NB_PNJSB'
      },
      {
        'enabled': true,
        'label': 'Saraswat Bank',
        'offer': false,
        'paymentMethod': 'NB_SARASB',
        'paymentMethodType': 'NB',
        'value': 'NB_SARASB'
      },
      {
        'enabled': true,
        'label': 'State Bank of India',
        'mlabel': 'SBI',
        'offer': false,
        'paymentMethod': 'NB_SBI',
        'paymentMethodType': 'NB',
        'priority': 3,
        'value': 'NB_SBI'
      },
      {
        'enabled': true,
        'label': 'Tamilnad Mercantile Bank',
        'offer': false,
        'paymentMethod': 'NB_TMB',
        'paymentMethodType': 'NB',
        'value': 'NB_TMB'
      }
    ],
    'payMethod': 'juspay',
    'prefix': '<div></div>',
    'priority': 2,
    'suffix': '<div></div>'
  },
  {
    'btnText': 'Proceed To Pay Rs {amount}',
    'description': 'Unified Payment Interface',
    'enabled': true,
    'id': '5',
    'is_new': false,
    'juspay_id': 'UPI',
    'merchantId': 1,
    'name': 'UPI',
    'offer': false,
    'offers': [],
    'onClickOpenOverlay': true,
    'payMethod': 'juspay',
    'prefix': 'Select and enter your VPA & approve collect request on your bank app',
    'priority': 5,
    'suffix': '<div></div>'
  },
  {
    'enabled': true,
    'id': '4',
    'is_new': false,
    'juspay_id': 'NB',
    'merchantId': 2,
    'name': 'Netbaking',
    'offer': false,
    'offers': [],
    'options': [
      {
        'enabled': true,
        'label': 'Allahabad Bank',
        'offer': false,
        'paymentMethod': 'NB_ALLB',
        'paymentMethodType': 'NB',
        'value': 'NB_ALLB'
      },
      {
        'enabled': true,
        'label': 'Andhra Bank',
        'offer': false,
        'paymentMethod': 'NB_ANDHRA',
        'paymentMethodType': 'NB',
        'value': 'NB_ANDHRA'
      },
      {
        'enabled': true,
        'label': 'Axis Bank',
        'mlabel': 'Axis',
        'offer': false,
        'paymentMethod': 'NB_AXIS',
        'paymentMethodType': 'NB',
        'priority': 4,
        'value': 'NB_AXIS'
      },
      {
        'enabled': true,
        'label': 'Bank of India',
        'offer': false,
        'paymentMethod': 'NB_BOI',
        'paymentMethodType': 'NB',
        'value': 'NB_BOI'
      },
      {
        'enabled': true,
        'label': 'Bank of Maharashtra',
        'offer': false,
        'paymentMethod': 'NB_BOM',
        'paymentMethodType': 'NB',
        'value': 'NB_BOM'
      },
      {
        'enabled': true,
        'label': 'Central Bank Of India',
        'offer': false,
        'paymentMethod': 'NB_CBI',
        'paymentMethodType': 'NB',
        'value': 'NB_CBI'
      },
      {
        'enabled': true,
        'label': 'Corporation Bank',
        'offer': false,
        'paymentMethod': 'NB_CORP',
        'paymentMethodType': 'NB',
        'value': 'NB_CORP'
      },
      {
        'enabled': true,
        'label': 'Development Credit Bank',
        'offer': false,
        'paymentMethod': 'NB_DCB',
        'paymentMethodType': 'NB',
        'value': 'NB_DCB'
      },
      {
        'enabled': true,
        'label': 'Federal Bank',
        'offer': false,
        'paymentMethod': 'NB_FED',
        'paymentMethodType': 'NB',
        'value': 'NB_FED'
      },
      {
        'enabled': true,
        'label': 'HDFC Bank',
        'mlabel': 'HDFC',
        'offer': false,
        'paymentMethod': 'NB_HDFC',
        'paymentMethodType': 'NB',
        'priority': 1,
        'value': 'NB_HDFC'
      },
      {
        'enabled': true,
        'label': 'ICICI Netbanking',
        'mlabel': 'ICICI',
        'offer': false,
        'paymentMethod': 'NB_ICICI',
        'paymentMethodType': 'NB',
        'priority': 2,
        'value': 'NB_ICICI'
      },
      {
        'enabled': true,
        'label': 'Industrial Development Bank of India',
        'offer': false,
        'paymentMethod': 'NB_IDBI',
        'paymentMethodType': 'NB',
        'value': 'NB_IDBI'
      },
      {
        'enabled': true,
        'label': 'Indian Bank ',
        'offer': false,
        'paymentMethod': 'NB_INDB',
        'paymentMethodType': 'NB',
        'value': 'NB_INDB'
      },
      {
        'enabled': true,
        'label': 'IndusInd Bank',
        'offer': false,
        'paymentMethod': 'NB_INDUS',
        'paymentMethodType': 'NB',
        'value': 'NB_INDUS'
      },
      {
        'enabled': true,
        'label': 'Indian Overseas Bank',
        'offer': false,
        'paymentMethod': 'NB_IOB',
        'paymentMethodType': 'NB',
        'value': 'NB_IOB'
      },
      {
        'enabled': true,
        'label': 'Janata Sahakari Bank',
        'offer': false,
        'paymentMethod': 'NB_JSB',
        'paymentMethodType': 'NB',
        'value': 'NB_JSB'
      },
      {
        'enabled': true,
        'label': 'Kotak Bank',
        'mlabel': 'KOTAK',
        'offer': false,
        'paymentMethod': 'NB_KOTAK',
        'paymentMethodType': 'NB',
        'priority': 5,
        'value': 'NB_KOTAK'
      },
      {
        'enabled': true,
        'label': 'Lakshmi Vilas Bank Retail',
        'offer': false,
        'paymentMethod': 'NB_LVB',
        'paymentMethodType': 'NB',
        'value': 'NB_LVB'
      },
      {
        'enabled': true,
        'label': 'Lakshmi Vilas Bank Corporate',
        'offer': false,
        'paymentMethod': 'NB_LVBCORP',
        'paymentMethodType': 'NB',
        'value': 'NB_LVBCORP'
      },
      {
        'enabled': true,
        'label': 'Oriental Bank Of Commerce',
        'offer': false,
        'paymentMethod': 'NB_OBC',
        'paymentMethodType': 'NB',
        'value': 'NB_OBC'
      },
      {
        'enabled': true,
        'label': 'Punjab and Sind Bank',
        'offer': false,
        'paymentMethod': 'NB_PNJSB',
        'paymentMethodType': 'NB',
        'value': 'NB_PNJSB'
      },
      {
        'enabled': true,
        'label': 'Saraswat Bank',
        'offer': false,
        'paymentMethod': 'NB_SARASB',
        'paymentMethodType': 'NB',
        'value': 'NB_SARASB'
      },
      {
        'enabled': true,
        'label': 'State Bank of India',
        'mlabel': 'SBI',
        'offer': false,
        'paymentMethod': 'NB_SBI',
        'paymentMethodType': 'NB',
        'priority': 3,
        'value': 'NB_SBI'
      },
      {
        'enabled': true,
        'label': 'Tamilnad Mercantile Bank',
        'offer': false,
        'paymentMethod': 'NB_TMB',
        'paymentMethodType': 'NB',
        'value': 'NB_TMB'
      }
    ],
    'payMethod': 'juspay',
    'prefix': '<div></div>',
    'priority': 4,
    'suffix': '<div></div>'
  },
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
  },
  {
    'btnText': 'Proceed To Pay Rs {amount}',
    'description': 'Use Credit/Debit Card',
    'enabled': true,
    'id': '7',
    'is_new': false,
    'juspay_id': 'CARD',
    'merchantId': 1,
    'name': 'CREDIT/DEBIT CARD',
    'offer': false,
    'offers': [],
    'onClickOpenOverlay': true,
    'payMethod': 'juspay',
    'prefix': ' ',
    'priority': 1,
    'suffix': 'Click here to start payment'
  },
  {
    'enabled': true,
    'id': '8',
    'is_new': false,
    'juspay_id': 'CARD',
    'merchantId': 2,
    'name': 'Credit/Debit Card',
    'offer': false,
    'offers': [],
    'prefix': '<div></div>',
    'priority': 2,
    'suffix': '<div></div>'
  },
  {
    'btnText': 'Proceed To Pay Rs {amount}',
    'conversionRate': 70,
    'enabled': true,
    'id': '9',
    'is_new': false,
    'juspay_id': 'paypal',
    'merchantId': 1,
    'name': 'PAYPAL',
    'offer': 'Get 50% cashback on 1st time Paypal transaction (Max Rs. 200)',
    'offers': [],
    'options': [
      {
        'enabled': true,
        'label': 'International Cards (USD {amount})',
        'offer': false,
        'paymentMethod': 'PAYPAL',
        'paymentMethodType': 'USD',
        'priority': 1,
        'value': 'usd'
      },
      {
        'enabled': true,
        'label': 'Indian Credit/Debit Cards (Rs {amount})',
        'offer': 'Get 50% cashback on 1st time Paypal transaction (Max Rs. 200)',
        'paymentMethod': 'PAYPAL',
        'paymentMethodType': 'INR',
        'priority': 2,
        'value': 'inr'
      }
    ],
    'payMethod': 'paypal',
    'prefix': 'Pay with Paypal Safe Hai !',
    'priority': 8
  }
]

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next() // continue to JSON Server router
})

// Add custom routes before JSON Server router
server.get('/payment-methods/:merchantId', (req, res) => {
  var data = []
  Object.keys(paymentMethods).forEach(function (key) {
    if (parseInt(paymentMethods[key].merchantId) === parseInt(req.params.merchantId)) {
      data.push(paymentMethods[key])
    }
  })
  res.jsonp(data)
})

server.get('/payment-methods/:merchantId/:paymentMethodId', (req, res) => {
  var paymentMethod = {}
  Object.keys(paymentMethods).forEach(function (key) {
    if (parseInt(paymentMethods[key].merchantId) === parseInt(req.params.merchantId) && parseInt(req.params.paymentMethodId) === parseInt(paymentMethods[key].id)) {
      paymentMethod = paymentMethods[key]
    }
  })
  res.jsonp(paymentMethod)
})

server.use(router)

router.render = (req, res) => {
  res.jsonp({
    body: res.locals.data
  })
}

server.listen(3001, () => {
  console.log('JSON Server is running')
})
