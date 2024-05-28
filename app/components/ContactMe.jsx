import React from 'react'
import ContactLink from './ContactLink'
import gmailIcon from '/public/images/contacts/gmail.svg'

const contactInfo = [
  {
    id: 1,
    title: "whatsapp",
    icon: "images/contacts/whatsapp.svg",
    link: "https://api.whatsapp.com/send/?phone=201029203304&type=phone_number&app_absent=0",
  },
  {
    id: 2,
    title: "gmail",
    icon: "images/contacts/gmail.svg",
    link: "mailto:fayezkassem3@gmail.com",
  },
  {
    id: 3,
    title: "x",
    icon: "images/contacts/x.svg",
    link: "https://x.com/fayezkassem5",
  },
  {
    id: 4,
    title: "linkedin",
    icon: "images/contacts/linkedin.svg",
    link: "https://www.linkedin.com/in/fayez-kassem-b5922020a/",
  },
  {
    id: 5,
    title: "facebook",
    icon: "images/contacts/facebook.svg",
    link: "https://www.facebook.com/fayezkassem55/",
  },
  {
    id: 6,
    title: "github",
    icon: "images/contacts/github.svg",
    link: "https://github.com/Zoz55",
  }
]

const ContactMe = () => {
  return (

    <footer id="contact">
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>
        contact me
      </h2>
      <div className='flex flex-row gap-8 justify-center items-center px-4 py-1 mb-4'>
        {contactInfo.map((contact) =>(
          <ContactLink
            key={contact.id}
            title={contact.title}
            icon={contact.icon}
            link={contact.link}
          />
        ))}
      </div>
    </footer>
  )
}

export default ContactMe