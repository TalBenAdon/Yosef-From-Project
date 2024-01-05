import React from 'react'
import Alert from '../Alert'
import styles from './styles.module.css'
export default function FormInput({ input, name, label, handleChange, formState }) {

    console.log(formState);

    return (
        <div className={styles.formInput}>

            <label >
                {label}
            </label>
            <input onChange={handleChange} value={formState[name]} className={styles.input} type={input} name={name} />

            <Alert />

        </div>

    )
}
