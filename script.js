document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ageForm').addEventListener('submit', (e) => {
    e.preventDefault()
    let age = document.querySelector('#age')
    let name = document.querySelector('#name')
    const ageError = document.querySelector('#ageError')
    const nameError = document.querySelector('#nameError')

    ageError.textContent = ''
    nameError.textContent = ''

    let isValid = true

    if (!age.value) {
      ageError.textContent = 'Age is required.'
      isValid = false
    }

    if (!name.value) {
      nameError.textContent = 'Name is required.'
      isValid = false
    }

    if (!isValid) return

    age = parseInt(age.value, 10)
    name = name.value

    const ageCheckPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve()
        } else {
          reject()
        }
      }, 4000)
    })
      .then(() => {
        alert(`Welcome, ${name}. You can vote.`)
      })
      .catch(() => {
        alert(`Oh sorry ${name}. You aren't old enough.`)
      })
  })
})
