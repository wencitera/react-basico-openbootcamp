import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'


const ContactoComponent = ({contacto}) => {
  return (
    <div>
        <h2>Name: { contacto.name } </h2>
        <h3>Surname: { contacto.surname } </h3>
        <h4>Email: { contacto.email } </h4>
        <h5>This user is { contacto.online ? 'Online' : 'Offline' }</h5>
    </div>
  )
}

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),

}

export default ContactoComponent