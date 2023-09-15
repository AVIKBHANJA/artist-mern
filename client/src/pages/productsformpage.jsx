import PhotosUploader from "../photosuploader.jsx";
import Perks from '../perkslabel.jsx';
import { useState,useEffect } from "react";
import { Navigate,useParams } from "react-router-dom";
import axios from "axios";
import AccountNav from "../accountnav.jsx";
export default function ProductsFormPage(){
    const {id}=useParams();
    const [title,setTitle]=useState('');
    const [owneraddress,setOwnerAddress]=useState('');
    
    const [addedPhotos,setAddedPhotos]=useState([]);
    const [description,setDescription]=useState('');
    const [perks,setPerks]=useState([]);
    const [catagory,setCatagory]=useState('');
    const [stock,setStock]=useState('');
    
    const [price,setPrice]=useState(100);
    const[redirect,setRedirect]=useState(false);
    useEffect(()=>{
           if(!id){
            return;
           }
           axios.get('/products/'+id).then(response=>{
            const {data}=response;
            setTitle(data.title);
            setOwnerAddress(data.owneraddressaddress);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setPerks(data.perks);
            setCatagory(data.catagory);
            setStock(data.stock);
            
            setPrice(data.price);
           })
    },[id]);
    async function addNewProduct(ev){
        ev.preventDefault();
        const productData={
            title,owneraddress,addedPhotos,description,perks,catagory,price
        }
        if(id){
            await  axios.put('/products',{id,...productData});
            setRedirect(true);
        }
        else
        {
            await  axios.post('/products',productData);
            setRedirect(true);
        }
        
   }
   if(redirect){
    return <Navigate to={'/account/products'}/>
   }
    return(
        <div > 
                 <AccountNav/>
                <form onSubmit={addNewProduct} >
                    <h2 className='text-2xl mt-4'>Title</h2>
                    <p className='text-gray-500 text-sm'>Title for your product.</p>
                    <input className='w-full border my-2 py-2 px-3 rounded-2xl' type='text' value={title} onChange={ev=>setTitle(ev.target.value)}placeholder='title, for eg:My lovely apartment'/>
                    <h2 className='text-2xl mt-4'>Owner Address</h2>
                    <p className='text-gray-500 text-sm'>Address to this place.</p>
                    <input className='w-full border my-2 py-2 px-3 rounded-2xl' type='text'  value={owneraddress} onChange={ev=>setOwnerAddress(ev.target.value)}placeholder='owneraddress'/>
                    <h2 className='text-2xl mt-4'>Photos</h2>
                    <p className='text-gray-500 text-sm'>more=better</p>
                    <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
                    <h2 className='text-2xl mt-4'>Description</h2>
                    <p className='text-gray-500 text-sm'>Description of the place</p>
                    <textarea className='w-full border my-2 py-2 px-3 rounded-2xl'  value={description} onChange={ev=>setDescription(ev.target.value)}/>
                    <Perks selected={perks} onChange={setPerks}/>
                    <h2 className='text-2xl mt-4'>Catagory</h2>
                    <p className='text-gray-500 text-sm'>House rules..etc</p>
                    <textarea className='w-full border my-2 py-2 px-3 rounded-2xl'  value={catagory} onChange={ev=>setCatagory(ev.target.value)}/>
                    <h2 className='text-2xl mt-4'>Stock</h2>
                    <p className='text-gray-500 text-sm'>Provide stock.</p>
                    <div className='grid gap-2 sm:grid-cols-3'>
                        <div className='mt-2 -mb-1'>
                            <h3>Stock</h3>
                            <input type='text' value={stock} onChange={ev=>setStock(ev.target.value)} placeholder='14:00'/>
                        </div>
                        
                        <div className='mt-2 -mb-1'>
                        <h3>Price </h3>
                            <input type='number'  value={price} onChange={ev=>setPrice(ev.target.value)} placeholder='100'/>
                        </div>
                    </div>
                    <button className="bg-primary p-2 w-full text-white rounded-2xl my-6">Save</button>
                </form>
                </div>
    )
}