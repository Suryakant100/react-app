import React, { useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })


  const inputEvent = (e) => {

    const { value, name } = e.target;
    console.log(e.target.value);
    console.log(e.target.name);
    setData((preval) => {
      console.log(preval);
      return { ...preval, [name]: value }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
   
    toast.success("Successfully Submited");
  }
  return (
    <>
      <div className="my-4 contact-heading text-center">
        <h1 >Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-8 col-10 offset-1">
            <form onSubmit={formSubmit}>
              <>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                  <input type="text" required autoComplete="off" className="form-control" name="name" value={data.name} onChange={inputEvent} id="exampleFormControlInput1" placeholder=" &#61447; Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" required autoComplete="off" className="form-control" name="email" value={data.email} onChange={inputEvent} id="exampleFormControlInput1" placeholder="&#xf0e0; name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Phone No.</label>
                  <input type="number" required autoComplete="off" className="form-control" name="phone" value={data.phone} onChange={inputEvent} id="exampleFormControlInput1" placeholder="&#xf095; Phone no" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Messege</label>
                  <textarea className="form-control" name="message" value={data.message} onChange={inputEvent} id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                </div>
                <div class="col-12 text-center">
                  <button className="btn btn-outline-primary" type="submit">Submit form</button>
                </div>
              </>

            </form>

          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default Contact;