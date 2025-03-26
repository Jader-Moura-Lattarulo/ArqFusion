import { useContext } from 'react'
import './ContactForm.css'

//CONTEXT
import { AppContext } from '../../contexts/AppContext'

function ContactForm() {
    const appContext = useContext(AppContext) 
    return (
            <div className='contact-form d-flex fd-column al-center'>
                <h2>{appContext.languages[appContext.language].contact.title}</h2>
                <form action="">WIP...</form>
            </div>
    )
}

export default ContactForm
