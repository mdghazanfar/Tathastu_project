import React from 'react';
import { useState } from 'react';


function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert
      (`My name is ${data.fullname}. my mobile is ${data.phone}. email is ${data.email}. massage is ${data.msg}.`)
  }


  return (
    <><div className='my-5'>
      <h1 className='text-center'> Contact Us </h1>
    </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto '>

            <form onSubmit={formSubmit}>
              <div className="form-group mb-3">
                <label for="exampleFormControlInput1">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"
                  name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
              </div>
              <div className="form-group mb-3">
                <label for="exampleFormControlInput1">Phone Number</label>
                <input type="number" className="form-control" id="exampleFormControlInput1"
                  name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Your Phone Number" />
              </div>
              <div className="form-group mb-3">
                <label for="exampleFormControlInput1">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                  name="email" value={data.email} onChange={InputEvent} placeholder="Enter Your Maid id" />
              </div>

              <div className="form-group mb-3">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                  name="msg" value={data.msg} onChange={InputEvent} ></textarea>
              </div>
              <button className='btn btn-primary mt-4' type='submit'>Submit form</button>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
