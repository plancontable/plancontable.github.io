$('#search-account').addEventListener('click', event => {
  event.preventDefault()
  const accountCode = $('#account-code').value
  let [account] = PCGE.filter(account => account.code == accountCode)
  if (account === undefined) return
  changeAccount(account)
  $('#account').style.visibility = 'visible'
})

function changeAccount(account) {
  drawAccount(account)
  drawSubAccounts(account)
  drawDynamics(account)
  drawComments(account)
  drawRecognitionAndMeasurement(account)
}

function drawAccount(account) {
  $('#account-name').textContent =
    `${account.code} ${account.name}`
  $('#account-description').textContent =
    account.description
}

function drawSubAccounts(account) {
  $('#sub-accounts').innerHTML = ''
  for (let subAccount of account.subAccounts) {
    $('#sub-accounts').appendChild(
      elt('div',
        elt('h3', `${subAccount.code} ${subAccount.name}: `),
        elt('p', subAccount.description))
    )
  }
}

function drawRecognitionAndMeasurement(account) {
  $('#recognition-and-measurement').innerHTML = ''
  for (let paragraph of account.recognitionAndMeasurement) {
    $('#recognition-and-measurement').appendChild(
      elt('p', paragraph)
    )
  }
}

function drawDynamics(account) {
  $('#debited').innerHTML = ''
  for (let debit of account.debited) {
    $('#debited').appendChild(
      elt('li', debit)
    )
  }

  $('#accredited').innerHTML = ''
  for (let acredit of account.accredited) {
    $('#accredited').appendChild(
      elt('li', acredit)
    )
  }
}

function drawComments(account) {
  $('#comments').innerHTML = ''
  for (let paragraph of account.comments) {
    $('#comments').appendChild(
      elt('p', paragraph)
    )
  }
}

function elt(type, ...children) {
  let node = document.createElement(type);
  for (let child of children) {
    if (typeof child != 'string') node.appendChild(child);
    else node.appendChild(document.createTextNode(child));
  }
  return node;
}

function $(selector) {
  return document.querySelector(selector)
}
