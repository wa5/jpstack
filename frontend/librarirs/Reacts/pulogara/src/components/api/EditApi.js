import React,{useState,useEffect} from 'react'
import InsertApi from './InsertApi';

function EditApi() {
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [chocalate,setChocalate]=useState("")
const [DD,setD]=useState();


    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3004/students').then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                setData(resp)
            })
        })
    },[])



function delite(id){
    console.log(id)
fetch(`http://localhost:3004/students/${id}`,{
    method:'delete',
}).then((res)=>{
    res.json().then((res1)=>{
        setD(res1)
    })
})

}

function selectuser(id){
    console.log(data[id-1])
    setId(data[id-1].id)
    setName(data[id-1].name)
    setChocalate(data[id-1].chocalate)
  
  
}


function updateuser(){
    console.log(id,name,chocalate)
        let data={name,chocalate,id}
        
    fetch(`http://localhost:3004/students/${id}`,{
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    }).then((result)=>{
    console.warn(result)
    result.json().then((resp)=>{
       // console.warn(resp)
    })
    })
    }
    






    return (
        <>
            <h1>edit table</h1>
<table border="1">
<tr>
    <td>id</td>
    <td>name</td>
    <td>chocalate</td>
    
</tr>

{
    data.map((item)=>
        <tr>
   <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.chocalate}</td>
        <td><button  onClick={()=>{delite(item.id)}}>delite</button></td>
        <td><button onClick={()=>{selectuser(item.id)}}>update</button></td>
        </tr>
     
    )
}

</table>


<h1>im update</h1>
<input type="text"  value={name}  name="name"  onChange={(e)=>{setName(e.target.value)}}/>
<input type="text"  value={chocalate} name="chocalate" onChange={(e)=>{setChocalate(e.target.value)}}/>
<button onClick={updateuser}>click me to creatye new user</button>






<InsertApi />
        </>
    )
}

export default EditApi
