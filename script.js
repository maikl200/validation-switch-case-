const form = document.querySelector('.info')
const password = document.querySelector('#password')
const fio = document.querySelector('#fio')

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
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  name: /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]+|[А-ЯA-Z][\x27а-яa-z]+-([А-ЯA-Z][\x27а-яa-z]+|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]+(\040[А-ЯA-Z][\x27а-яa-z]+)?$/
};

const validation = (input) => {
  switch (input.name) {
    case 'fio':
      if (Patterns.name.test(input.value)) {
        messageError(input, true)
        return true
      } else messageError(input, false)
      break

    case 'password':
      if (Patterns.password.test(input.value)) {
        messageError(input, true)
        return true
      } else messageError(input, false);
      break

    case 'repeatPassword':
      if (input.value === password.value && input.value !== '') {
        messageError(input, true)
        return true
      } else messageError(input, false)
      break

    case 'email':
      if (Patterns.email.test(input.value)) {
        messageError(input, true)
        return true
      } else messageError(input, false)
      break
  }
}

const messageError = (input, boolean) => {
  boolean
      ?
      input.parentNode.nextElementSibling.style.visibility = 'hidden'
      :
      input.parentNode.nextElementSibling.style.visibility = 'visible';
}