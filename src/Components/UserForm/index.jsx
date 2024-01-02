import React from 'react'
import FormInput from '../FormInput'
import styles from './styles.module.css'
import { useState } from 'react'

export default function UserForm() {
    const initialState = localStorage.user ? JSON.parse(localStorage.user) : { name: '' }
    const [formUseState, setformUseState] = useState(initialState)
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setformUseState(old => {
            const newData = { ...old, [name]: value }
            localStorage.user = JSON.stringify(newData)
            return newData
        })
    }

    const inputList = [{ type: 'text', name: 'firstName', label: 'First Name' }, { type: 'text', name: 'lastName', label: 'Last Name' }, { type: 'email', name: 'email', label: 'Email' }, { type: 'password', name: 'password', label: 'Password' }]

    return (
        <div className={styles.userFormContainer}>

            <form className={styles.form} onSubmit={handleSubmit}>

                <h3 >Add new User</h3>
                <div className={styles.line}></div>
                {inputList.map(input => {
                    return <FormInput handleChange={handleChange} key={input.label} formUseState={formUseState} label={input.label} input={input.type} name={input.name} />
                })

                }

            </form>

        </div>

    )
}
