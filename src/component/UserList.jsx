const UserList=({users, delet, edit})=>{
console.log(users)
  return (
    <div className="user1">
      {
        users?.map((lisUser, index)=>(
            
      <div className="user">
    <li key={`index${index}`}>  
          <h3><span>Name:  </span>  {lisUser.name}</h3>
          <h3><span>Category:  </span>{lisUser.category}</h3>
          <h3><span>Price:  </span>{lisUser.price}</h3>

          {lisUser.isAvailable !== true ?<div className="h3claro">
          <h3> No Disponible</h3>

          </div>:<div className="h3opaco">
         <h3>Disponible</h3>
         </div>}
         
         
         <button onClick={()=>delet(lisUser.id)}>DELETE</button>
         <button onClick={()=>edit(lisUser)}>EDIT</button>
          </li>


      </div>

        )
         
         )
      }

    </div>
  )
}

export default UserList