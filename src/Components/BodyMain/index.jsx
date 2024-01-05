import React from 'react'
import UserForm from '../UserForm'
import UserTable from '../UserTable'
import styles from './styles.module.css'
import { useState } from 'react'
export default function BodyMain() {

    const users = [{
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
    },
    {
        firstName: "Bob",
        lastName: "Smith",
        email: "bob.smith@example.com",
    },
    {
        firstName: "Charlie",
        lastName: "Davis",
        email: "charlie.davis@example.com",
    }]

    const [userState, setUserState] = useState(users)
    return (
        <>
            <img src="" alt="" />
            <div className={styles.mainContainer}>

                <UserForm setUserState={setUserState} userState={userState} />


                <UserTable userState={userState} />
            </div>
        </>

    )
}
