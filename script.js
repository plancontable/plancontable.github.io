document.querySelector('#see-account').addEventListener('click', event => {
  event.preventDefault()
  const accountCode = document.querySelector('#account-code').value
  if (accountCode < 10 || accountCode > 99) {

  }
  let [account] = PCGE.filter(account => account.code == accountCode)
  if (account === undefined) return
  changeAccount(account)
  document.querySelector('#account').style.visibility = 'visible'
})

function changeAccount(account) {
  drawAccount(account)
  drawSubAccounts(account)
  drawDynamics(account)
  drawComments(account)
}

function drawAccount(account) {
  document.querySelector('#account-name').textContent =
    `${account.code} ${account.name}`
  document.querySelector('#account-description').textContent =
    account.description
}

function drawSubAccounts(account) {
  document.querySelector('#sub-accounts').innerHTML = ''

  for (let subAccount of account.subAccounts) {
    document.querySelector('#sub-accounts').appendChild(
      elt('div',
        elt('h3', `${subAccount.code} ${subAccount.name}: `),
        elt('p', subAccount.description))
    )
  }
}

function drawDynamics(account) {
  document.querySelector('#debited').innerHTML = ''
  for (let debit of account.debited) {
    document.querySelector('#debited').appendChild(
      elt('li', debit)
    )
  }

  document.querySelector('#accredited').innerHTML = ''
  for (let acredit of account.accredited) {
    document.querySelector('#accredited').appendChild(
      elt('li', acredit)
    )
  }
}

function drawComments(account) {
  document.querySelector('#comments').innerHTML = ''
  for (let paragraph of account.comments) {
    document.querySelector('#comments').appendChild(
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

