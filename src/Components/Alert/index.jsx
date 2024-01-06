import React from 'react'
import { useState } from 'react'
import styles from './styles.module.css'
export default function Alert({ name, errorState }) {





    return (
        <>
            <div className={`${styles.error} ${errorState[name] ? styles.vis : ''}`}>
                {errorState[name]}
            </div>


        </>
    )
}
