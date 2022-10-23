import React, { useEffect, useState } from 'react';
import Container from './styled';
import api from '../../api';
import { Category } from '../../types';
import food_icon from "../../assets/images/food-and-restaurant.png";
import ReactTooltip from 'react-tooltip';




const Body: React.FC = () => {

   const [categories, setCategories] = useState<Category[]>([]);
   const [activeCategory, setActiveCategory] = useState<number>(0);

   useEffect(() => {
     
      const getCategories = async ()=>{
         const res = await api.getCategories();
         setCategories(res);
         ReactTooltip.rebuild();
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
                     <div 
                        className={activeCategory == 0 ? "category-icon-default active" : "category-icon-default"}
                        onClick={()=>setActiveCategory(0)}
                        data-tip="Todas as Categorias"
                        data-for="top"
                     >
                        <img src={food_icon} alt="" />
                     </div>
                     {categories.map((cat, index)=>
                        <div 
                           className={activeCategory == cat.id ? "category-item active" : "category-item"} 
                           key={index}
                           onClick={()=>setActiveCategory(cat.id)}
                           data-tip={cat.name}
                           data-for="top"
                        >
                           <img src={cat.image} alt="" />
                        </div>
                     )}
                  
               </div>
            </div>
            
            <div className="products">
               
            </div>

         </div>
      </Container>
   );
};

export default Body;