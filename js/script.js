$('#search-account').addEventListener('click', event => {
  event.preventDefault()
  const accountCode = $('#account-code').value
  let [account] = PCGE.filter(account => account.code == accountCode)
  if (account) {
    render(account)
    hackStyles()
    $('#account').style.visibility = 'visible'
  }
})

function render(account) {
  renderDescription(account)
  renderSubAccounts(account.subAccounts)
  renderRecognitionAndMeasurement(account.recognitionAndMeasurement)
  renderDynamics(account)
  renderComments(account.comments)
}

function renderDescription(account) {
  $('#account-name').textContent = `${account.code} ${account.name}`
  $('#account-description').textContent = account.description
}

function renderSubAccounts(subAccounts) {
  $('#sub-accounts').innerHTML = subAccounts.map(s => `<article>
                                                         <h3>${s.code} ${s.name}</h3>
                                                         <p>${s.description}</p>
                                                       </article>`).join("")
}

function renderRecognitionAndMeasurement(recognitionAndMeasurement) {
  $('#recognition-and-measurement').innerHTML =
    recognitionAndMeasurement.map(paragraph => `<p>${paragraph}</p>`).join("")
}

function renderDynamics(account) {
  renderDebited(account.debited)
  renderAccredited(account.accredited)
}

function renderDebited(debited) {
  $('#debited').innerHTML = debited.map(debit => `<li>${debit}</li>`).join("")
}

function renderAccredited(accredited) {
  $('#accredited').innerHTML = accredited.map(accredit => `<li>${accredit}</li>`).join("")
}

function renderComments(comments) {
  $('#comments').innerHTML = comments.map(paragraph => `<p>${paragraph}</p>`).join("")
}

function selectInput() {
  $('#account-code').select();
}

function $(selector) {
  return document.querySelector(selector)
}

function hackStyles() {
  let strongInListDebited = $('#debited li strong')
  if (strongInListDebited) {
    strongInListDebited.parentElement.style.listStyle = 'none'
  }

  let strongInListAccredited= $('#accredited li strong')
  if (strongInListAccredited) {
    strongInListAccredited.parentElement.style.listStyle = 'none'
  }
}

