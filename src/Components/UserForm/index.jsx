import React from 'react'
import FormInput from '../FormInput'
import styles from './styles.module.css'
import { useState } from 'react'

export default function UserForm({ setUserState, userState }) {
    const [formState, setFormState] = useState(localStorage.user ? JSON.parse(localStorage.user) : { firstName: '', lastName: '', email: '', password: '' })
    const [errorState, setErrorState] = useState({ firstName: '', lastName: '', password: '' })
    const regex = /[A-Z]/
    const handleSubmit = (event) => {
        event.preventDefault()

        // setUserState([...userState, formState]) // both works
        setUserState(old => {
            return [...old, formState]
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormState(old => {
            const newData = { ...old, [name]: value }

            const noPassData = (({ password, ...rest }) => rest)(newData)
            localStorage.user = JSON.stringify(noPassData)
            return newData
        })

        setErrorState(old => ({ ...old, [name]: '' }))

        if (name === 'firstName' && value.length < 2) {
            setErrorState(old => ({ ...old, [name]: 'name should be more than 2 letters' }))
        }
        if (name === 'password' && !regex.test(value)) {
            setErrorState(old => ({ ...old, [name]: 'Password should have at least 1 uppercase letter' }))
        }
    }



    const inputList = [{ type: 'text', name: 'firstName', label: 'First Name' }, { type: 'text', name: 'lastName', label: 'Last Name' }, { type: 'email', name: 'email', label: 'Email' }, { type: 'password', name: 'password', label: 'Password' }]

    return (
        <div className={styles.userFormContainer}>

            <form className={styles.form} onSubmit={handleSubmit}>

                <h3 >Add new User</h3>
                <div className={styles.line}></div>
                {inputList.map(input => {
                    return <FormInput setErrorState={setErrorState} errorState={errorState} handleChange={handleChange} formState={formState} key={input.label} label={input.label} input={input.type} name={input.name} />
                })

                }
                <button type='submit'>
                    Create User
                </button>
            </form>

        </div>

    )
}
