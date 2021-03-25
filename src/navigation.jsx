import React,{useState} from "react";
import {Link} from "react-router-dom";


function Navigation(){

    const [NavActive, SetNavActive] = useState('home');
    const Click = indexClick=>SetNavActive(indexClick);
    const ActivBtn = indexActive => NavActive === indexActive? 'active' : '';


    return(
        <div className='navigation'>
            <Link className={ActivBtn('home')} onClick={()=>Click('home')} to="/" >Home</Link>
            <Link className={ActivBtn('gal')} onClick={()=>Click('gal')} to="/gallery"  >Gallery</Link>
            <Link className={ActivBtn('pro')} onClick={()=>Click('pro')} to="/projects" >Projects</Link>
            <Link className={ActivBtn('con')} onClick={()=>Click('con')} to="/contact">Contact</Link>
        </div>
    );
}

export default Navigation;