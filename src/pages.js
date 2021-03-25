import React from "react";
import { useLocation } from "react-router-dom";


export function Home(){
    return(
        <div className='header-1'>
            <h1>Home</h1>
        </div>
    );
}
export function Gallery(){
    return(
        <div className='header-1'>
            <h1>Gallery</h1>
        </div>
    );
}

export function Projects(){
    return(
        <div className='header-1'>
           <h1>Projects</h1> 
        </div>
    );
}

export function Contact(){
    return(
        <div className='header-1'>
           <h1>Contact</h1> 
        </div>
    );
}

export function NotExitPage(){
let location = useLocation();
console.log(location);
    return(
        <div className='header-1'>
            <h1>
                Resource not found at {location.pathname}!
            </h1>
        </div>
    );
}