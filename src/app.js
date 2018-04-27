const storage = window.localStorage

const renderContacts = () => {
    // Read all the contacts from the storage
    const contacts = JSON.parse(storage.getItem('contacts'))

let div = document.querySelector('.contact-list')

if(contacts) {
  div.innerHTML = ''
  // render the Contacts
  const ul = document.createElement('ul')

  contacts.forEach(contact => {
    let li = document.createElement('li')

  li.innerHTML = `
    <span>${contact.name}</span>
    <span>${contact.email}</span>
    <span>${contact.phone}</span>
    `
    ul.appendChild(li)
  })

  div.appendChild(ul)
} else {
  div.innerHTML = '<p>You have no contacts in your address book</p>'
  }
}

const resetFormField = () => {
  const contactForm = document.querySelector('.new-contact-form')

  contactForm.elements.name.value = ''
  contactForm.elements.email.value = ''
  contactForm.elements.phone.value = ''
  contactForm.elements.company.value = ''
  contactForm.elements.notes.value = ''
  contactForm.elements.twitter.value = ''
}

document.addEventListener('DOMContentLoaded', () => {
  renderContacts()
  document.querySelector('.new-contact-form').style.display = 'none';
  document.querySelector('.hide-form').style.display = 'none';
  const contactForm = document.querySelector('.new-contact-form')

  contactForm.addEventListener('submit', event => {
    event.preventDefault()
    const storage = window.localStorage

  // Reads all the input fields and get their values
  const { name, email, phone, company, notes, twitter } = contactForm.elements

  const contact = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    company: company.value,
    notes: notes.value,
    twitter: twitter.value,
  }

  console.log(contact)

  let contacts = JSON.parse(storage.getItem('contacts')) || []

  contacts.push(contact)
  // Saves input to our storage
  storage.setItem('contacts', JSON.stringify(contacts))
  renderContacts()
  resetFormField()
  })

document.querySelector(".add-contact").onclick = function() {
    document.querySelector('.add-contact').style.display = 'none';
    document.querySelector(".new-contact-form").hidden = false;
    document.querySelector('.hide-form').style.display = 'block';
}

document.querySelector(".hide-form").onclick = function() {
    document.querySelector('.add-contact').style.display = 'block';
    document.querySelector('.new-contact-form').style.display = 'none';
    document.querySelector('.hide-form').style.display = 'none';
}









})
