import  {useForm} from 'react-hook-form'
import { useEffect } from 'react'
import { FaBreadSlice } from "react-icons/fa";
import { FaAccusoft } from "react-icons/fa";




  
  const UserForm = ({createUser, selectdata,userUpdate}) => {
   
    console.log(selectdata)
  const {register,handleSubmit, formState:{errors},reset}=useForm()
  

  const getFruta=(data)=>{

if(selectdata){

  userUpdate(data)
}else{
  createUser(data)
  resetUser()
}
  }

  useEffect(()=>{

    if(selectdata!==null){

 reset(selectdata)


    }else{
    resetUser()
    }
  },[selectdata])

  const resetUser=()=>{
reset({
  name: "",
  category: "",
  price: "",
  iAvailable:""

})

  }

  

    return (
    <div className='form'>
     
      <form onSubmit={handleSubmit(getFruta)}>
<div className="input">
<div className='label'>
<label htmlFor="input-name">Name</label>
</div>
<input type="text" 

id='input-name'

{...register("name",
{required:true}
)}
/>
{errors.name?.type == "required" && (<span role="alert"> ESTE CAMPO ES REQUERIDO</span>)}
</div>
<div className="input">
<div className='label'>
<label htmlFor="input-category">Category</label>
</div>

<input type="text" 
id='input-category'
{...register("category")}
/>

</div>
<div className="input">
<div className='label'>
<label htmlFor="input-price">Price</label>
</div>
<input type="number" 
id='input-price'

{...register("price",{required: true})}
/>
{errors.price?.type == "required" && (<span role="alert">ESTE CAMPO ES REQUERIDO</span>)}

<div className="inputIs">

<label htmlFor="input-isAvailable">Disponible</label>
<input type="checkbox" 


id='input-isAvailable'
{...register("isAvailable")}
/>

</div>
<div>

</div>
<button type='submit'>Enviar</button>

</div>



      </form>
    </div>
    );
  };
  


export default UserForm