import React,{useState,useEffect} from 'react'





function Getapi() {

const [data,setData]=useState([]);

useEffect(()=>{
    fetch('http://localhost:3004/students').then((result)=>{
        result.json().then((resp)=>{
            setData(resp)
        })
    })
},[])



    return (
        <>
           <h1>im fetching the data</h1> 
           <table border="1">
               <tr>
                   <td>ID</td>
                   <td>name</td>
                   <td>Cocalate</td>
               </tr>
{
    data.map((item)=><tr>

        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.chocalate}</td>
    </tr>)
}



           </table>
        </>
    )
}

export default Getapi
