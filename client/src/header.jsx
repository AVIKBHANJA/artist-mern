import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './UserContext.jsx';
import AccountNav from './accountnav.jsx';
export default function Header(){
  const {user}=useContext(UserContext);
      return(
        <header className=" flex justify-between bg-sky-700 text-white rounded-lg">
      <Link to={"/"} className="flex items-center gap-1 px-2">
      <svg xmlns="http://www.w3.org/2000/svg"  margin="1em" height="1.5em" viewBox="0 0 512 512 " fill="beige"><path d="M2 377.4l43 74.3A51.35 51.35 0 0 0 90.9 480h285.4l-59.2-102.6zM501.8 350L335.6 59.3A51.38 51.38 0 0 0 290.2 32h-88.4l257.3 447.6 40.7-70.5c1.9-3.2 21-29.7 2-59.1zM275 304.5l-115.5-200L44 304.5z"/></svg>
        <span className="font-bold text-xl px-2">Artisan</span>
      </Link>
      
      <div className="flex  gap-2 border border-grey-300 rounded-full py-4 px-4 shadow-md shadow-gray-300">
        <AccountNav />
        <button className="bg-primary text-white p-1 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

        </button>
      </div>
      <Link to={user?'/account':'/login'}className="flex items-center  gap-2 rounded-full py-4 px-4 ">
      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:hidden">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
      <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
</svg>


      </div>
      {!!user&&(
        <div>
          {user.name}
        </div>
      )}
      </Link>
    </header>
      )
}