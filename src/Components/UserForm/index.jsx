import React from 'react'
import FormInput from '../FormInput'
import styles from './styles.module.css'
import { useState } from 'react'

export default function UserForm({ setUserState, userState }) {
    const [formState, setFormState] = useState(localStorage.user ? JSON.parse(localStorage.user) : { firstName: '', lastName: '', email: '' })

    const handleSubmit = (event) => {
        event.preventDefault()
        const newUser = { ...formState }
        setUserState([...userState, newUser])
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormState(old => {
            const newData = { ...old, [name]: value }

            const noPassData = (({ password, ...rest }) => rest)(newData)
            localStorage.user = JSON.stringify(noPassData)
            return newData
        })
    }


    console.log(formState);
    const inputList = [{ type: 'text', name: 'firstName', label: 'First Name' }, { type: 'text', name: 'lastName', label: 'Last Name' }, { type: 'email', name: 'email', label: 'Email' }, { type: 'password', name: 'password', label: 'Password' }]

    return (
        <div className={styles.userFormContainer}>

            <form className={styles.form} onSubmit={handleSubmit}>

                <h3 >Add new User</h3>
                <div className={styles.line}></div>
                {inputList.map(input => {
                    return <FormInput handleChange={handleChange} formState={formState} key={input.label} label={input.label} input={input.type} name={input.name} />
                })

                }
                <button type='submit'>
                    Create User
                </button>
            </form>

        </div>

    )
}
