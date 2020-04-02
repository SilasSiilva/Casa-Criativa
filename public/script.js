function onOff() {
  document
    .querySelector("#modal")
    .classList
    .toggle("hide")
  //toggle "tira e coloca uma classe"

  document
    .querySelector("body")
    .classList
    .toggle("hidescroll")

  document
    .querySelector("#modal")
    .classList
    .toggle("addscroll")
}

function checkForm(event) {
  const valuesCheck = [
    "title",
    "image",
    "categoty",
    "description",
    "link",
  ]

  const isEmpty = valuesCheck.find(function (value) {
    const checkIfIsString = typeof event.target[value].value === 'string'
    const checkIfIsEmpty = !event.target[value].value.trim()
    if (checkIfIsString && checkIfIsEmpty) {
      return true
    }
  })

  if (isEmpty) {
    event.preventDefault()
    alert('Preencha todos os campos')
  }

}