import React from 'react'
import  {useEffect, useState} from 'react'
import { getAllproducts } from '../services/AllApis'
import {Row} from 'react-bootstrap'



function DisplayAll() {

  const [allproducts,setallproducts] = useState([])
  const getproducts = async()=>{
    const response = await getAllproducts()
    setallproducts(response.data);
  }
  useEffect(()=>{
   getproducts()
   },[])

  return (
   <>
    <Row>
    {
  allproducts.map(product=>(
   
   <div class="card m-3" style={{width:'18rem'}}>
  <img style={{height:'250px'}} src={product.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product.title.slice(0,15)}</h5>
   
    <a href="#" class="btn btn-primary">ViewProduct</a>
  </div>
</div>
   

   ))
  }
  </Row> 

   </>
  )
}

export default DisplayAll