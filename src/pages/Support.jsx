import React, { useLayoutEffect } from "react";
import Header from "../components/common/Header";
import '../styles/support.css'
import {images} from '../assets/images'

function Support() {
  const [success, setSuccess] = React.useState(false)
  return (
    <>
      <Header />
      <div class="container">
        <div style={{ textAlign: 'center' }}>
          <h2>Contact Us</h2>
        </div>
        <div class="row">
          <div class="column">
            <img src={images.logoDark} style={{ width: '30%', height: '30%' }} />
          </div>
          <div class="column">
            <form action="" onSubmit={(e)=>{
              e.preventDefault();
              setTimeout(() => {
                setSuccess(true)
              }, 2000);
            }}>
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <label for="lname">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email.."
              />
              <label for="country">Country</label>
              {/* <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select> */}
              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: 170 }}
              ></textarea>
              <input value={success ? "submited" : "submit"} type="submit" />
            </form>
            {success && <p style={{color: 'green'}}>Submited successfully</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;
