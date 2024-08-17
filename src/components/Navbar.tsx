
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar=()=>{
    return(
        <div className='border-b flex bg-transparent '>
            <Link to='/' className=' italic text-2xl font-sans flex justify-items-start p-4 hover:bg-blue-500'>Mongabuy</Link>
            <span className='flex-1'></span>
            <Link to='/login' className=' font-sans font-medium flex justify-center p-4 hover:bg-blue-500'>Login</Link>
            <Link to='/signup' className=' font-sans font-medium flex justify-center p-4 hover:bg-blue-500'>Signup</Link>
        </div>
    )
}


export default Navbar;