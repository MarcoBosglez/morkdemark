"use client"
import styles from "./page.module.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import BackBar from '../backbar'

import emailjs from 'emailjs-com';

import Image from "next/image";
import pattern from '../assets/pattern.png'

let NEXT_PUBLIC_EMAIL_JS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID
let TEMPLATE_ID =  process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID
let PUBLIC_ID = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_ID

type TextFieldProps = {
  borderColor?: string;
};

const options = {
  shouldForwardProp: (prop) => prop !== 'borderColor',
};
const outlinedSelectors = [
  '&:hover .MuiOutlinedInput-notchedOutline',
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline',
];
const CSSTextField = styled(
  TextField,
  options,
)<TextFieldProps>(({ borderColor }) => ({
  '& label': {
    color: borderColor,
  },
  '& label.Mui-focused': {
    color: borderColor,
  },
  [outlinedSelectors.join(',')]: {
    borderWidth: 0,
  },
}));

export default function Contact() {
  const [formData, setFormData] = useState(({
    name: "",
    email: "",
    message: "",
  }))
  
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const [submit, setSubmit] = useState('')
  const handleSubmit = () => {
    setSubmit(!submit);
  }

  function sendEmail(e) {
    e.preventDefault();

    // If there is an empty value in any of the formData attributes
    if (formData.name.trim() !== "" && formData.email.trim() !== "" && formData.message.trim() !== "") {
      try {
        emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
          e.target,
          process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_ID,
        )
      } catch(err) {console.log(err)}

      setFormData({
        name: "",
        email: "",
        message: "",
      })
      setSubmit('true')
    } else {
      setSubmit('false')
    }
  }

  return (
    <main className={styles.main}>
      <BackBar/>

      <div className={styles.contact}>
          <div className={styles.contact_form}>
            <h1>Contact</h1>
            <p>I’m currently available for work. Email me for Inquiries.</p>

            <form onSubmit={sendEmail}>
              <div className={styles.contact_info}>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="NAME"
                />
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="EMAIL"
                />
              </div>

              <div className={styles.contact_message}>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="MESSAGE"
                />
                <Button type="submit" value="Send">SUBMIT</Button> {/* onClick={sendEmail} */}
              </div>
            </form>
          </div>

        <div className={styles.contact_image}>
          <Image src={pattern} width={800} height={800} style={{borderRadius: 25}} alt=""/>
        </div>
      </div>
    </main>
  );
}


