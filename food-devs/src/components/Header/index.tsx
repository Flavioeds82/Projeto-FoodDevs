import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Container } from './styled';
import logo from "../../assets/images/logo.png";
import search_icon from "../../assets/images/search.png";

interface HeaderProps {
   search ?: string;
   onSearch ?:  React.Dispatch<React.SetStateAction<string>>;
   showSearch ?: boolean;
}

const Header: React.FC<HeaderProps> = ({search, onSearch, showSearch }) => {

   const [clicked, setClicked] = useState(false);
   // const [show, setShow] = useState(showSearch == false ? showSearch : true);

   function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
      if(event){
         if(onSearch){
            onSearch(event.target.value)
         }
      }
      
   }
  


   return (
      <Container>
         <div className="container">
            <div className="header-logo">
               <img src={logo} alt="" />
            </div>
            { showSearch &&
               <div 
                  className="header-search" 
                  onMouseOver={()=>setClicked(true)} 
                  onMouseOut={()=>setClicked(search == "" ? false : true)}
               >
                  {clicked &&
                     <div className={clicked ? "search-input active" : "search-input"}>
                        <input type="text" value={search} onChange={handleChange} placeholder='Digite um produto' />
                     </div>
                  }
                  
                  <div className="search-icon" >
                     <img src={search_icon} alt="search-icon"/>
                  </div>
                  
               </div> 
            }
         </div>
      </Container>
   );
};

export default Header;