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

function $(selector) {
  return document.querySelector(selector)
}

