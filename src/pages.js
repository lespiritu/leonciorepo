import React from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./navigation";

export function Home(){
    return(
        <div>
            <h1>Home</h1>
            <Navigation/>
            
        </div>
    );
}
export function Gallery(){
    return(
        <div>
            <h1>Gallery</h1>
            <Navigation/>
        </div>
    );
}

export function Projects(){
    return(
        <div>
           <h1>Projects</h1> 
           <Navigation/>
        </div>
    );
}

export function Contact(){
    return(
        <div>
           <h1>Contact</h1> 
           <Navigation/>
        </div>
    );
}

export function NotExitPage(){
let location = useLocation();
console.log(location);
    return(
        <div>
            <h1>
                Resource not found at {location.pathname}!
            </h1>
        </div>
    );
}