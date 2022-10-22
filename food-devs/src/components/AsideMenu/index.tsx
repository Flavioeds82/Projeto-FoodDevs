import React from 'react';
import { Container } from "./styled";
import store from "../../assets/images/store.png";
import order from "../../assets/images/order.png";
import profile from "../../assets/images/profile.png";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';


interface indexProps {
   
}

export const AsideMenu: React.FC<indexProps> = () => {

   const location = useLocation();

   function isActive(link:string) {
      const res = location.pathname === link;
      return res;
   }


   return (
      <Container>
         <div className="container">
            <div className="menu-aside">
               <div className={isActive('/') ? "aside-icon active" : "aside-icon"} ><Link to={'/'}><img src={store} alt="store icon" /></Link></div>
               <div className={isActive('/orders')? "aside-icon active" : "aside-icon"} ><Link to={'/orders'}><img src={order} alt="cart icon" /></Link></div>
               <div className={isActive('/profile')? "aside-icon active" : "aside-icon"} ><Link to={'/profile'}><img src={profile} alt="profile icon" /></Link></div>
            </div>
          </div>
      </Container>
   );
};
