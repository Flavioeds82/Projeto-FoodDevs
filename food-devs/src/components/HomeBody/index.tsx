import React, { useEffect, useState } from 'react';
import {useDispatch} from "react-redux";
import Container from './styled';
import api from '../../api';
import { Category, Product, Products } from '../../types';
import food_icon from "../../assets/images/food-and-restaurant.png";
import next_icon from "../../assets/images/next.png";
import minus from "../../assets/images/minus.png";
import plus from "../../assets/images/plus.png";
import ReactTooltip from 'react-tooltip';
import Modal from '../Modal';

interface BodyProps {
   search: string;
   onSearch:  React.Dispatch<React.SetStateAction<string>>;
   modalActive: boolean;
   setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}


const Body: React.FC<BodyProps> = ({search, onSearch, modalActive, setModalActive }) => {

   const [categories, setCategories] = useState<Category[]>([]);
   const [products, setProducts] = useState<Product[]>([]);
   const [activeCategory, setActiveCategory] = useState<number>(0);
   const [modalQt, setModalQt] = useState<number>(1);
   const [selectedProduct, setSelectedProduct] = useState<Product|undefined>(undefined)
   const sp = selectedProduct;
   const dispatch = useDispatch();

   async function getProducts(){
      const res = await api.getProducts(activeCategory, search);
      setProducts(res.data);
      console.log(activeCategory)
   }

   function handleProductClick(item:Product){
      setModalActive(true);
      setSelectedProduct(item)
      setModalQt(1);
   }
   function handleAddCart(){
      dispatch({
         type: "ADD_PRODUCT",
         payload:{selectedProduct, modalQt}
      })
      setModalActive(false);
   }

   useEffect(() => {
     
      const getCategories = async ()=>{
         const res = await api.getCategories();
         setCategories(res);
         ReactTooltip.rebuild();
      }
      getCategories();
   }, []);

   // useEffect(() => {
      
   //    if(selectedProduct){
   //       setModalActive(true);
   //    }
      
   // }, [selectedProduct]);

   useEffect(() => {
      
      setProducts([]);
      getProducts();
      
   }, [activeCategory, search]);

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
               {
                  products.map((item, index)=>
                     <div className="product-item" key={index} onClick={()=>handleProductClick(item)}>
                        <div className="product-image"><img src={item.image} alt="" /></div>
                        <div className="product-text">
                           <div className="product-title">{item.name}</div>
                           <div className="product-price">{`R$ ${item.price}`}</div>
                           <div className="product-ingredients">{item.ingredients}</div>
                        </div>
                        <div className="product-icon">
                           <img src={next_icon} alt="" />
                        </div>
                     </div>
                  )
               }
            </div>

            {modalActive && sp &&
               <Modal modalActive={modalActive} setModalActive={setModalActive}>

                     <div className="modal-content">
                        <div className="content-top">
                           <div className="modal-image"><img src={sp.image} alt="" /></div>
                           <div className="modal-text">
                              <div className="modal-title">{sp.name}</div>
                              <div className="modal-weight">{`500g`}</div>
                              <div className="modal-ingredients">{sp.ingredients}</div>
                              <div className="container-price-quantity">
                                 <div className="modal-quantity">
                                    <div className="bt-minus" onClick={()=> setModalQt(modalQt>0 ? modalQt-1 : 0 )}>
                                       <div className="minus"></div>
                                    </div>
                                    <div className="quantity-number">{modalQt}</div>
                                    <div className="bt-plus" onClick={()=> setModalQt(modalQt+1 )}>
                                       <div className="plus1"></div>
                                       <div className="plus2"></div>
                                    </div>
                                 </div>
                                 <div className="modal-price">{`R$ ${(sp.price*modalQt).toFixed(2)}`}</div>
                              </div>
                           </div>
                        </div>
                        <div className="content-bottom">
                           <div className="bt-cancelar" onClick={()=> setModalActive(false)}>Cancelar</div>
                           <div className="bt-addCart" onClick={()=>handleAddCart()}>Adicionar ao Carrinho</div>
                        </div>
                     </div>
                  
               </Modal>
            }

         </div>
      </Container>
   );
};

export default Body;