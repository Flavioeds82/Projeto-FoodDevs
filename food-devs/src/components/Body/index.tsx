import React, { useEffect, useState } from 'react';
import Container from './styled';
import api from '../../api';
import { Category } from '../../types';
import food_icon from "../../assets/images/food-and-restaurant.png";



const Body: React.FC = () => {

   const [categories, setCategories] = useState<Category[]>([]);

   useEffect(() => {
     
      const getCategories = async ()=>{
         const res = await api.getCategories();
         setCategories(res)
      }
      getCategories();
   }, []);

   return (
      <Container>
         <div className="container">
            <div className="category">
               <div className="category-label">
                  <h4>Escolha uma categoria</h4>
               </div>
               <div className="category-icons">
                     <div className="category-icon-default">
                        <img src={food_icon} alt="" />
                     </div>
                     {categories.map((cat, index)=>
                        <div className="category-item" key={index}>
                           <img src={cat.image} alt="" />
                        </div>
                     )}
                  
               </div>
            </div>
         </div>
      </Container>
   );
};

export default Body;