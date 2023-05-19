import React, { useState } from 'react'

//style
import './userlist.css'

const UserList = () => {

    const users= [
        { name: 'john Doe', email: 'johndoe@example.com' },
        { name: 'jane Smith', email: 'janesmith@example.com' },
        { name: 'alice Johnson', email: 'alicejohnson@example.com' },
        { name: 'darshan kumar', email: 'darshan@example.com' },
      ]

    const [userData=users, setUserData] = useState()

    const ascendingOrder = ()=>{
    let assOreder = userData.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    setUserData(assOreder);
    return;
    }

    // const descendingOrder = ()=>{
    //     const dssOreder = userData.sort((a,b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0))
    // console.log(dssOreder, 'dssOreder')

    //     setUserData(dssOreder)
    // }   


    return (
        <div className='userList_container'>
            <div className='sorting_btns'>
                <button onClick={()=>ascendingOrder()}> Sort by Name</button>

            </div>
            <div className='userListTable'>
                <table style={{ width: '50%' }}>
                    <thead>
                        <tr>
                            <th >Name</th>
                            <th >Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        { userData.map((head, headID) => {
                            return (
                                <tr key={headID}>
                                    <td >{head.name}</td>
                                    <td >{head.email}</td>

                                </tr>
                            )

                        }

                        )}



                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList