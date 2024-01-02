import React from 'react'
import Alert from '../Alert'
import styles from './styles.module.css'
export default function FormInput({ input, name, label, handleChange, formUseState }) {



    return (
        <div className={styles.formInput}>

            <label >
                {label}
            </label>
            <input onChange={handleChange} className={styles.input} type={input} name={name} />

            <Alert />

        </div>

    )
}
