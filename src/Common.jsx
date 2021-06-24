import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import homeimg from "../src/images/mainhome.svg";


const Common = (props) => {
    return (
        <>
            <section id='header' className="d-flex align-item-center">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-12 mx-auto">
                            <div className='row'>
                                <div className="col-lg-6  col-12 pt-5 pt-lg 0 order-lg-1 order-2 d-flex justify-content-center flex-column">
                                    <h1>{props.name} <span style={{color:"#00a8ff"}}>{props.company}</span> </h1>
                                    <h2 className="my-4 paragraph">{props.title} </h2>
                                    <div className='mt-3'>
                                        <NavLink className="btn-get-started" to={props.link}>{props.btnname}</NavLink>
                                    </div>
                                    {/* <NavLink to='/'><Button variant="outlined" color="primary">
                                    Primary
                                </Button></NavLink> */}
                                </div>
                                <div className='col-lg-6 order-lg-2 col-12 order-1'>
                                    <img src={props.imgsrc} className="img-fluid animated" />

                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </>
    );
}

export default Common;