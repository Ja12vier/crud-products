
import './App.css'
import UserForm from './component/UserForm'
import axios from 'axios'
import { useState, useEffect, useReducer } from 'react'
import UserList from './component/UserList'




function App() {
const [user, setUser]=useState([])
const [updateUser,setUpdateUser]=useState(null)


const userData=()=>{
  axios
  .get("https://products-crud.academlo.tech/products/")
  .then((resp)=>setUser(resp.data))
  .catch((error)=>console.error(error))
}

useEffect(()=>{

userData()

}, [])



const getData=(data)=>{
  axios
  .post("https://products-crud.academlo.tech/products/", data)
  .then(()=>userData())
  .catch((error)=>console.error(error))

}

const delet=(miId)=>{
  axios
  .delete(`https://products-crud.academlo.tech/products/${miId}/`)
  .then(()=>userData())
  .catch((error)=> console.error(error))
}

const edit=(selecdata)=>{
  setUpdateUser(selecdata)
  }

console.log(user)

const userIndex=(editID)=>{

   axios
   .put(`https://products-crud.academlo.tech/products/${editID.id}/`, editID)
   .then( ()=>userData())
   .catch((error)=>console.error(error))

   setUpdateUser(null)
}
  return (
    <div className="App">
<UserForm
createUser={(data)=>getData(data)}

selectdata={updateUser}
userUpdate={userIndex}
/>
<UserList
users={user}
delet={delet}
edit={edit}
/>
    </div>
  )
}

export default App

