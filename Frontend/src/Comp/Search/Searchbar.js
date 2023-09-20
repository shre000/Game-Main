import React from 'react'
// import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import '../../Comp-style/searchbar.css'

const Searchbar = () => {
    return (

        //  <MDBInputGroup>
        //   <MDBInput placeHolder='Search' />
        //   <MDBBtn rippleColor='dark'>
        //     <MDBIcon icon='search' />
        //   </MDBBtn>
        // </MDBInputGroup>
        <div className="container justify-content-center py-4">

            <div>

                <div >

                    <div className="input-group mb-3 mt-2">
                        <input type="text" className="form-control input-text input-dark text-center" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div className="input-group-append mx-2">
                                <button className="btn btn-outline-warning btn-lg" type="button"><i className="fa fa-search"></i></button>
                            </div>
                    </div>

                </div>

            </div>


        </div>

    )
}

export default Searchbar;
