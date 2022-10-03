import React from 'react'

export const Contact = () => {
    return (
        <div>
        <section className="py-4 bg-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 my-auto">
                    <h2>Contact us</h2>

                    </div>
                    <div className="col-md-8 my-auto">
                    <h6 className="float-end">
                        Home/ About Us
                    </h6>
                </div>
                

                </div>
                
                
            
            </div>
        </section>
<section className="section">
    <div className="conatiner">
        <div className="card shadow">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <h6>contact form</h6>
                        <hr/>
                        <div className="form-group">
                            <label for="">Full Name</label>
                            <input type="text"  className="form-control" placeholder="Enter Full Name"/>
                        </div>
                        <div className="form-group">
                            <label for="">Phone Number</label>
                            <input type="text"  className="form-control" placeholder="Enter EMAIL"/>
                        </div>
                        <div className="form-group">
                            <label for="">Email</label>
                            <input type="text"  className="form-control" placeholder="Enter EMAIL"/>
                        </div>
                        <div className="form-group">
                            <label for="">Message</label>
                           
                            <textarea rows="3" className="form-control"placeholder="type your message..."></textarea>
                        
                        </div>
                        <div className="form-group py-3">
                            
                           
                            <button type="button" className="btn btn-primary shadow w-100">Send Message</button>
                        
                        </div>


                    </div>
                    <div className="col-md-6">
                        <h5 className="main-heading">Address Information</h5>
                        <div className="underline"></div>
                        <p>West Palm Beach</p>
                        <p>phone:561-502-9869</p>
                        <p>email:whatever@gmail.com</p>

                    </div>

                </div>
                
            
            </div>
        </div>
        
    </div>
    </section>
</div>
    )
}