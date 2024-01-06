import React from 'react'
import styles from './styles.module.css'

export default function UserTable({ userState }) {

    return (
        <div className={styles.userTableContainer}>UserTable
            <table>
                <thead>

                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userState.map((user, index) => {
                        return <tr key={index}>

                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>

                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
