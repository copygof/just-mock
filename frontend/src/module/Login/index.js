
// What should we import?
// - data needed
// - callback ?
// - styles ?
// - api url ?
// - multi lang
// ...

// What should we export?
// - routers
// - data export
// - page
// - components
// - multi lang

// What should we registor?
// - registor routers (routename, pageComponent)
// - registor data (import, export)
// - registor event // maybe callback
// - registor api // api url

// What should we use or write in global ?
// - common component
// - Color, veriable style
// - utils function
// - language

// TODO Flow
// login flow

// registor route
const routes = [
  {
    name: 'loginPage',
    page: 'ComponentPage',
    params: {}
  },
  {
    name: 'LoginSuccess',
    page: 'LoginSuccessPage',
    params: {}
  }
]

// Data for this module require
const importData = {
  email: '',
}

// data in this modules
const dataStore = {
  email: '',
  token: '',
  isCustomer: '',
}

// export data
const exportData = {
  ...dataStore,
}

const api = {
  login() {},
  emailValidate() {},
}

const event = {
  onBlurFieldEmailValidate() {},
  onSubmitButton(txt) {
    api.login(txt)
    .then((res) => {
      LinkTo.LoginSuccess({ email: res.email })
    })
  }
}

const LoginPage = {
  // Maybe need import data
  text: {
    header: '',
    title: '',
    descriptions: '',
  },
  form: {
    field: {
      validate: {
        error: {},
      },
    },
    submitBt: {
      text: '',
      style: {},
      onSubmit(txt) { event.onSubmitButton(txt) },
    },
    apiError: {},
  },
}
const loginPageStyle = {
  // ...
}