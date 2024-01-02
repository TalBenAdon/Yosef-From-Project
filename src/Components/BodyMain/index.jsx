import React from 'react'
import UserForm from '../UserForm'
import UserTable from '../UserTable'
import styles from './styles.module.css'
export default function BodyMain() {
    return (
        <>
            <img src="" alt="" />
            <div className={styles.mainContainer}>

                <UserForm />


                <UserTable />
            </div>
        </>

    )
}
