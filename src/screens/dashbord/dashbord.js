import { useEffect, useState } from 'react';
import './dashbord.css';
import axios from 'axios'
import Edit from '../../components/edit/edit';

function Dashbord() {

  const [filterdata, setfilterData] = useState([])
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({});
  const [openEdit, setOpenEdit] = useState(false);
  const [postuser, setPostuser] = useState({
    title:'',
    description:'',
    dueDate:'',
    status:'pending',
  });
  const [postOpen, setPostOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
 


  const onChangeuserPost = (e)=>{
    setPostuser({...postuser, [e.target.name]:e.target.value});
  }


  const onSubmitPost = (e)=>{
    e.preventDefault();
    fetch('http://localhost:3000/users/', {
          method: 'POST',
          body: JSON.stringify(postuser),
          headers: {
            'Content-type': 'application/json',
          },
        }).then((response) => response.json()).then((result) => {
          alert("Record inserted")
          fetchData();
          setPostOpen(false);
        })
  }


  const fetchData = ()=>{
    axios("http://localhost:3000/users")
    .then((res) => {
      setData([...res.data]);
      setfilterData([...res.data])
    })
    .catch((err) => {
      console.log(err)
    })
  }


  useEffect(() => {
    fetchData()
  }, [])


  const deletUser = (id) => {
    fetch("http://localhost:3000/users/" + id, { method: 'DELETE' }).then((response) => response.json())
      .then((result) => {
        alert("Record deleted")
        fetchData();
      })
  }

  const searchByTitle = ()=>{
    const filtTask = filterdata.filter((item)=>{
      return item.title.toLocaleLowerCase().trim('').includes(searchValue.toLocaleLowerCase());
    })
    setData(filtTask)

  }

  return (
    <>
    <div className="App">
      <div className='dashbord_container'>
        <div className='dashbord_header_wraper'>
          <input type='text' value={searchValue} placeholder='Search by Title' onChange={(e)=>{setSearchValue(e.target.value); searchByTitle()}}/>
          <p className='addnewTask_btn' onClick={()=>setPostOpen(true)}>Add New Task</p>
        </div>
          
          <div className='usertask_wraper'>
      {
        data.length > 0 ? data.map((item, idx)=>{
          return(
            <div className='cards_container' key={idx}>
             <div className='card_contentWrap'>
             <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.dueDate}</p>
              <p>{item.status}</p>
             </div>
              <div className='userItem_edit_wraper'>
                <p style={{color:'var(--primary)'}} onClick={()=>{setEditData(item);setOpenEdit(true)}}>Edit</p>  
                <p style={{color:'red'}} onClick={()=>deletUser(item.id)}>Delete</p>
                </div>
            </div>
          )
        }):
          <h3 style={{textAlign:'center', width:'100%'}}>Data Not Found</h3>
      }
          </div>  
        </div>
    </div>  
    {openEdit && <Edit editData={editData} onSubmitPost={fetchData} setOpenEdit={setOpenEdit}/>}
    {
      postOpen &&


      <div className='addPost_task_wraper'>
        <div className='PostuserForm'>
          <div className='addpostClose' onClick={()=>setPostOpen(false)}>X</div>
          <h4>Add New Task</h4>
          <form>
            <div className='postInputHolder'>
              <input type="text" name='title' placeholder='Title' value={postuser.title} onChange={(e)=>onChangeuserPost(e)}/>
            </div>
            <div className='postInputHolder'>
              <input type="text" name='description' placeholder='Description' value={postuser.description} onChange={(e)=>onChangeuserPost(e)}/>
            </div>
            <div className='postInputHolder'>
              <input type="date" name='dueDate' value={postuser.dueDate} onChange={(e)=>onChangeuserPost(e)}/>
            </div>
            <div className='postInputHolder'>
              <input type="text" name='status' placeholder='Title' value={postuser.status} onChange={(e)=>onChangeuserPost(e)} readOnly/>
            </div>
            <div  className='postInputHolder' style={{textAlignLast:'center'}}>
            <button onClick={(e)=>onSubmitPost(e)}>Submit</button>
            </div>
            
          </form>
      </div>
      </div>
      
    }


    </>
  );
}


export default Dashbord;

