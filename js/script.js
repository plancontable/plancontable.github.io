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
  let htmlString = ''
  subAccounts.forEach(s => htmlString += `<article>
                                           <h3>${s.code} ${s.name}</h3>
                                           <p>${s.description}</p>
                                         </article>`)
  $('#sub-accounts').innerHTML = htmlString
}

function renderRecognitionAndMeasurement(recognitionAndMeasurement) {
  let htmlString = ''
  recognitionAndMeasurement.forEach(paragraph => htmlString += `<p>${paragraph}</p>`)
  $('#recognition-and-measurement').innerHTML = htmlString
}

function renderDynamics(account) {
  renderDebited(account.debited)
  renderAccredited(account.accredited)
}

function renderDebited(debited) {
  let htmlString = ''
  debited.forEach(debit => htmlString += `<li>${debit}</li>`)
  $('#debited').innerHTML = htmlString
}

function renderAccredited(accredited) {
  let htmlString = ''
  accredited.forEach(accredit => htmlString += `<li>${accredit}</li>`)
  $('#accredited').innerHTML = htmlString
}

function renderComments(comments) {
  let htmlString = ''
  comments.forEach(paragraph => htmlString += `<p>${paragraph}</p>`)
  $('#comments').innerHTML = htmlString
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

