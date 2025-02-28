import { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Footer from "../footer";
export default function IndexPage(){
    const [products,setProducts]=useState([]);
   useEffect(()=>{
    axios.get('/products').then(response=>{
        setProducts(response.data);
    });
   },[]);
   return(
    <div className="mt-8 content-center grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1">

    {products.length>0&&products.map(product=>(
              <Link to={'/products/'+product._id}>
            <div className="bg-gray-500 mb-2 rounded-2xl flex">
            {product.photos?.[0]&&(
                     <img className='rounded-2xl object-contain ' src={'http://localhost:4000/uploads/'+product.photos?.[0]} alt=''/>
            )}
            </div>
            {/* <h2className="font-bold overflow-hidden">{product.owneraddress}</h2> */} 
            <h3 className="text-xl font-semibold text-gray-700 ">{product.title}</h3>
            
            <div className="mt-2 flex flex-row items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z"/></svg>
              <span className="font-bold">{product.price}</span>
            </div>
            </Link>
    ))}
    {/* <Footer/> */}
      </div>
    )
}
