import React from 'react'
import { Vmc } from '../components/inc/Vmc';

export const Aboutus = () => {
    return (
        <div >
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 my-auto">
                        <h2>About Page</h2>

                        </div>
                        <div className="col-md-8 my-auto">
                        <h6 className="float-end">
                            Home/ About Us
                        </h6>
                    </div>
                    

                    </div>
                    
                    
                
                </div>
            </section>
            <section className="section bg-c-light border-bottom">
                <div className="container">
                    
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline">

                    </div>
                    <p> 
                    We offer many varieties of fresh fruits and vegetables from our market and also serve many varieties of 
                      smoothies mixed with different vegetables and fruit that have been clinically proven to help fight diabetes, cancer, 
                      or any kind of illnes the body has.Now serving the best mexican food around we deliver to many city's. feel free to call for more info 
                        
                    
                   
                    </p>
                    
                
                </div>
            </section>
            <Vmc/>
            
        </div>
    )
}
