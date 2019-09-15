function showModal(event) {
  document.querySelector('.modal')
    .classList.add("is-active");
}

function closeModal() {
  document.querySelector('.modal')
    .classList.remove("is-active");
}

document.querySelector('#show-account').addEventListener('click', event => {
  event.preventDefault()
  const account = document.querySelector('#account').value
  console.log(account)
  showModal()
});
