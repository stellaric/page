import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <section className='section_contact' id="section_contact">

    <h2>Nous Contacter</h2>
     <div className='contact_contenu'>
      <div className='contact_img'> 
      <div className='contact_square'>l</div>
      <img src="https://images.pexels.com/photos/3727469/pexels-photo-3727469.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img_contact-section" />
      </div>
      <div className="contact_txt">
        <h3>Besoin d'aide ?</h3>
        <p>Ceci est un paragraphe Lorem ipsum dolor sit amet consecteturCeci est un paragraphe Lorem ipsum dolor sit amet consecteturCeci est un paragraphe Lorem ipsum dolor sit amet consecteturCeci est un paragraphe Lorem ipsum dolor sit amet consectetur</p>
      <button><Link to="contact">Poursuivre</Link></button>
      </div>
      </div>

    </section>
  )
}
