$('#search-account').addEventListener('click', event => {
  event.preventDefault()
  const accountCode = $('#account-code').value
  let [account] = PCGE.filter(account => account.code == accountCode)
  if (account === undefined) return
  renderAccount(account)
  $('#account').style.visibility = 'visible'
})

function renderAccount(account) {
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
  let template = ''
  subAccounts.forEach(s => template += `<article>
                                          <h3>${s.code} ${s.name}</h3>
                                          <p>${s.description}</p>
                                        </article>`)
  $('#sub-accounts').innerHTML = template
}

function renderRecognitionAndMeasurement(recognitionAndMeasurement) {
  let template = ''
  recognitionAndMeasurement.forEach(paragraph => template += `<p>${paragraph}</p>`)
  $('#recognition-and-measurement').innerHTML = template
}

function renderDynamics(account) {
  renderDebited(account.debited)
  renderAccredited(account.accredited)
}

function renderDebited(debited) {
  let template = ''
  debited.forEach(debit => template += `<li>${debit}</li>`)
  $('#debited').innerHTML = template
}

function renderAccredited(accredited) {
  let template = ''
  accredited.forEach(accredit => template += `<li>${accredit}</li>`)
  $('#accredited').innerHTML = template
}

function renderComments(comments) {
  let template = ''
  comments.forEach(paragraph => template += `<p>${paragraph}</p>`)
  $('#comments').innerHTML = template
}

function $(selector) {
  return document.querySelector(selector)
}

