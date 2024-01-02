import React from 'react'
import FormInput from '../FormInput'
import Alert from '../Alert'

export default function UserForm() {
    return (
        <>
            <FormInput />
            <Alert />
            {/* should be a child of formInput? */}
        </>
    )
}
