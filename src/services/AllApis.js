import {commonrequest} from './coomonrequest'
import  {base_url}  from './base_url'


// get all products
export const getAllproducts = async()=>{
   return await commonrequest("GET",`${base_url}/Allproducts`)
}