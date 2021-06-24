import React from 'react';
import Sdata from './Sdata';
import Card from './Card';


const Service = () => {
  return (
    <>
      <div className="text-center text-capitalize font-weight-bolder mt-5 mb-4 service_heading">
        <h1 className ="our-service">Our Services</h1>
      </div>
      <div className="content mt-5">
        <div className="container">
          <div className="row">
            {
              Sdata.map((val, index) => {
                return <Card
                  key={index}
                  imgsrc={val.imgsrc}
                  title={val.title}
                />
              })
            }

          </div>

        </div>
      </div>
    </>
  );
}

export default Service;