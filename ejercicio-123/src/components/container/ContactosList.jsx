import React from 'react'
import { Contacto } from '../../models/contacto.class'
import ContactoComponent from '../pure/ContactoComponent'

const ContactosList = () => {
  const user = new Contacto('Wenceslao', 'Citera', 'wencitera@gmail.com', true )
  
  
    return (
    <ContactoComponent contacto={user} />
  )
}


export default ContactosList