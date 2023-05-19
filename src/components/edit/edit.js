import React, { useState } from 'react';
import './edit.css';
import axios from 'axios'




const Edit = ({editData, onSubmitPost, setOpenEdit}) => {


    const [status, setStatus] = useState(editData?.status)


    console.log(status)
    const editUserStatus =(e)=>{
       e.preventDefault();
        fetch('http://localhost:3000/users/' + editData.id, {
          method: 'PUT',
          body: JSON.stringify({
            id:editData.id,
            title:editData.title,
            description: editData.description,
            dueDate: editData.dueDate,  
            status: status
          }),
          headers: {
            'Content-type': 'application/json',
          },
        }).then((response) => response.json()).then((result) => {
            alert("Record updated");
            onSubmitPost(e);
            setOpenEdit(false);
           
          })
        .catch((err)=>{
            console.log(err)
        })
        
      }
   


    console.log(editData, 'status');
  return (
    <div className='editPage_wraper'>
        <div className='editCard'>
            <h4>Status Update</h4>
            <div className='editClose'>
                <button onClick={()=>setOpenEdit(false)}>X</button>
            </div>
           <div className='editCrdInputHolder'>
           <input value={editData?.title} type='text' readOnly/>
                     </div>
           <div className='editCrdInputHolder'>
           <input value={editData?.description} type='text' readOnly/>
           </div>
           <div className='editCrdInputHolder'>
           <input value={editData?.dueDate} type='text' readOnly/>
           </div>
           <div className='editForm_status_holder'>
            <p className='editStaus_btn' style={{backgroundColor:status ==='pending'?'rgb(206 206 248)':''}} onClick={()=>setStatus('pending')}>Pending</p>
            <p className='editStaus_btn' style={{backgroundColor:status ==='completed'?'rgb(206 206 248)':''}} onClick={()=>setStatus('completed')}>Completed</p>
            <p className='editStaus_btn' style={{backgroundColor:status ==='Reject'?'rgb(206 206 248)':''}} onClick={()=>setStatus('Reject')}>Reject</p>
           </div>
           <div style={{width:'100%', textAlign:'center'}}>
           <button className='editUpdate_btn' onClick={(e)=>editUserStatus(e)}>Update</button>
           </div>
        </div>
    </div>
  )
}


export default Edit;