"use client"
import styles from "./page.module.css";
import { useState } from 'react';
import BackBar from '../backbar'

// EmailJS for emailing
import emailjs from 'emailjs-com';

// MUI Imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';

// Image Imports
import Image from "next/image";
import pattern from "/src/app/assets/pattern.png";

const SERVICE_ID: string = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID ?? 'user_id'
const TEMPLATE_ID: string =  process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID ?? 'template_id'
const PUBLIC_ID: string = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_ID ?? 'public_id'

type TextFieldProps = {
  borderColor?: string;
};
const outlinedSelectors = [
  '&:hover .MuiOutlinedInput-notchedOutline',
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline',
];
const CSSTextField = styled(
  TextField,
)<TextFieldProps>(() => ({
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
  
  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const [submit, setSubmit] = useState(false)
  const handleSubmit = () => {
    setSubmit( !submit );
  }

  function sendEmail(e: any) {
    e.preventDefault();

    // If there is an empty value in any of the formData attributes
    if (formData.name.trim() !== "" && formData.email.trim() !== "" && formData.message.trim() !== "") {
      try {
        emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          e.target,
          PUBLIC_ID,
        )
      } catch(err) {console.log(err)}

      setFormData({
        name: "",
        email: "",
        message: "",
      })
      setSubmit(true)
    } else {
      setSubmit(false)
    }
  }

  return (
    <main className={styles.main}>
      {
        submit ?
        <div className={styles.alert}><Alert variant="filled" severity='success'>Email Sent.</Alert></div> : <div></div>
      }

      <BackBar/>

      <div className={styles.contact}>
          <div className={styles.contact_form}>
            <h1>Contact</h1>
            <p>I’m currently available for work. Email me for Inquiries.</p>

            <form onSubmit={sendEmail}>
              <div className={styles.contact_info}>
                <CSSTextField 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="NAME"
                  label="NAME"
                  variant="outlined"
                  error={submit === false && formData.name.trim() === "" ? true : false}
                  sx={{ input: { color: 'white', fontFamily: 'Chillax-Regular' }, label: { color: 'gray', fontFamily: 'Chillax-Regular' } }}
                />
                <CSSTextField 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="EMAIL"
                  label="EMAIL"
                  variant="outlined"
                  error={submit === false && formData.email.trim() === "" ? true : false}
                  sx={{ input: { color: 'white', fontFamily: 'Chillax-Regular' }, label: { color: 'gray', fontFamily: 'Chillax-Regular' } }}
                />
              </div>

              <div className={styles.contact_message}>
                <CSSTextField 
                  multiline
                  rows={18}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="MESSAGE"
                  label="MESSAGE"
                  variant="outlined"
                  error={submit === false && formData.message.trim() === "" ? true : false}
                  inputProps={{ style: { color: "white", fontFamily: 'Chillax-Regular' } }}
                  sx={{label: { color: 'gray', fontFamily: 'Chillax-Regular' } }}
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


