import React,{useState} from 'react'



function InsertApi() {


    const [name,setName]=useState("")
    const [chocalate,setChocalate]=useState("")






function saveUser(){
console.log(name,chocalate)
    let data={name,chocalate}
    
fetch('http://localhost:3004/students',{
    method:'post',
    headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
    },
    body:JSON.stringify(data)
}).then((result)=>{
console.warn(result)
result.json().then((resp)=>{
    console.warn(resp)
})
})
}



    return (
        <>
            <h1>im insert method</h1>
<input type="text"  value={name}  name="name"  onChange={(e)=>{setName(e.target.value)}}/>
<input type="text"  value={chocalate} name="chocalate" onChange={(e)=>{setChocalate(e.target.value)}}/>
<button onClick={saveUser}>click me to creatye new user</button>

        </>
    )
}

export default InsertApi
