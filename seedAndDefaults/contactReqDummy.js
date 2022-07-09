const makeContactRequest = (name, phone, eMail, message, wasRead, hidden) => {
  return {name, phone, eMail, message, wasRead, hidden}
}

const dummyArray = [
  makeContactRequest(
    'sussy',
    '733-1212-3333',
    'words@gmail.com',
    'Hi Please call me about your auto insurance',
    false,
    true,
  ),
  makeContactRequest(
    'chris',
    '243-1267-3456',
    'phrzedasd@gmail.com',
    'Hi Please call me about your warranty',
    false,
    false,
  ),
  makeContactRequest(
    'samuel',
    '123-6562-3906',
    'cartoons@gmail.com',
    'Hi Please call me about your YEAH!',
    false,
    false,
  ),
]

module.exports = dummyArray
