import React, {useContext} from 'react'
import { Link,  } from "react-router-dom";
import { Slider } from '../components/inc/Slider'
import { Vmc } from '../components/inc/Vmc';
import {Context} from "./appContext"


export const Home = () => {
    const { store, } = useContext(Context);
    
    return (
        <div>
          
            <Slider/>


        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="main-heading">Our Services</h3>
                        <div className="underline mx-auto"></div>
                        <p>
                      We offer many varieties of fresh fruits and vegetables from our market and also serve many varieties of 
                      smoothies mixed with different vegetables and fruit that have been clinically proven to help fight diabetes, cancer, 
                      or any kind of illnes the body has.Now serving the best mexican food around we deliver to many city's. feel free to call for more info 
                        
                    
                        </p>
                        <Link to="/aboutus" className="btn btn-warning shadow">
                            Read More
                        </Link>

                    </div>

                </div>
            </div>
            
            
        </section>
        <Vmc/>
        <section className="section bg-c-light border-top">
            <div className="container">
                <div className="row">
                <h3 className="main-heading text-center">Our Services</h3>
                        <div className="underline mx-auto"></div>
                        {store.allServices.map((item, index) =>{
             return(
                <div className="col-md-4 " key={index}>
                <div className="card shawdow">
                <img src={item.image} className="w-100 border-bottom" alt="services"/>
                <div className="card-body">
                    <h6>{item.label}</h6>
                    <div className="underline"></div>
                    <p>{item.description}</p>
                   
        
                </div>
        
                </div>
               
        
            </div>
           

             )
         })};
      
        
     
     
    
    </div>
            </div>
            
            
        </section>


        
        

        </div>
    )
}
