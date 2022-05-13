const form = document.querySelector('.info');

form.addEventListener('submit', (e) => {
  e.preventDefault()
  elementsProcessing(e.currentTarget.elements)
})

const elementsProcessing = (elements) => {
  const inputs = [...elements].filter(input => {
    return input.hasAttribute('data-input') && input
  })
  const inputsValid = inputs.filter(input => {
    return validation(input) && input
  })
  if (inputs.length === inputsValid.length) {
    const data = {
      "name": inputsValid[0].value,
      "password": inputsValid[1].value,
      "twoPassword": inputsValid[2].value,
      "email": inputsValid[3].value,
    }
    console.log("Отправка на сервер", data)
  }
}

const Patterns = {
  email: /\S+@\S+\.\S+/,
  password: /\S+@\S+\.\S+/,
  twoPassword: /\S+@\S+\.\S+/,
  name: /\S+@\S+\.\S+/
};


const validation = (input) => {
  switch (true) {
    case Patterns.name.test(input.value):
      messageError(input, true);
      return true;
    case Patterns.password.test(input.value):
      messageError(input, true);
      return true;
    case Patterns.twoPassword.test(input.value):
      messageError(input, true);
      return true;
    case Patterns.email.test(input.value):
      messageError(input, true);
      return true;
    default:
      messageError(input, false);
      return false;
  }
}

const messageError = (input, boolean) => {
  boolean
      ?
      input.parentNode.nextElementSibling.style.display = 'none'
      :
      input.parentNode.nextElementSibling.style.display = 'block';
}


// let fio = document.querySelector('#fio')
// let password = document.querySelector('#password')
// let repeatPassword = document.querySelector('#repeatPassword')
// let email = document.querySelector('#email')
// let btn = document.querySelector('.btn')
// let errorFio = document.querySelector('#errorFio')
// let errorPassword = document.querySelector('#errorPassword')
// let errorRepeatPassword = document.querySelector('#errorRepeatPassword')
// let errorEmail = document.querySelector('#errorEmail')
//
//
// let render = () => {
//   if (fio.value && password.value && repeatPassword.value && email.value) {
//     btn.removeAttribute('disabled')
//   }
// }
//
// let emailError = () => {
//   let regEmail = /\S+@\S+\.\S+/
//   switch (!regEmail.test(email.value)) {
//     case true:
//       errorEmail.innerHTML = 'Неверно введен email'
//       break
//
//     default:
//       errorEmail.innerHTML = ''
//       render()
//   }
// }
//
// let repeatPasswordError = () => {
//   switch (repeatPassword.value !== password.value) {
//     case true:
//       errorRepeatPassword.innerHTML = 'Пароль не совподает'
//       break
//
//     default:
//       errorRepeatPassword.innerHTML = ''
//       render()
//   }
// }
//
// let passwordError = () => {
//
//   switch (password.value.length < 10) {
//     case true:
//       errorPassword.innerHTML = 'Слишком кароткий пароль. Минимум 10 символов'
//       break
//
//     default:
//       errorPassword.innerHTML = ''
//       render()
//   }
// }
//
// let fioError = () => {
//   switch (fio.value.length < 10) {
//     case true:
//       errorFio.innerHTML = 'Неверное ФИО'
//       break
//
//     default:
//       errorFio.innerHTML = ''
//       render()
//   }
// }


