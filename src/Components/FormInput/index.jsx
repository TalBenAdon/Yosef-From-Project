import React, { useState } from 'react'
import Alert from '../Alert'
import styles from './styles.module.css'
export default function FormInput({ input, name, label, handleChange, formState, errorState, setErrorState }) {




    return (
        <div className={styles.formInput}>

            <label >
                {label}
            </label>
            <input onChange={handleChange} value={formState[name]} className={styles.input} type={input} name={name} />
            <div >

                <Alert name={name} value={formState[name]} setErrorState={setErrorState} errorState={errorState} />
            </div>

        </div>

    )
}
