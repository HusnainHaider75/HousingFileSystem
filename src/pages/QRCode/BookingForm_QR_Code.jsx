import './BookingForm_QR_Code.css'
import * as React from "react";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import QRCode from 'qrcode';


export default function QR_Code() {
  
  const { RegNo, BookingFormNo}=useParams();
  const [imageUrl, setImageUrl] = useState('');
  const generateQrCode = async () => {
    try {
          const ResultedCode = await QRCode.toDataURL(`Registration=${RegNo} + BookingFormNo= ${BookingFormNo}`);
          setImageUrl(ResultedCode);
          console.log(imageUrl);
          
    }catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    generateQrCode();
  }, [])



  return (
    <>
    <div className="QRCode">
      <h2>Registartion Number :</h2>
      <span>{RegNo}</span>
      <br/>
      <h2>Booking Number :</h2>
      <span>{BookingFormNo}</span>
      <br/>
       <h1>QR Code</h1>
        {imageUrl ? (
              <a href={imageUrl} download>
                  <img src={imageUrl} alt="img"/>
              </a>) : null}
        
    </div>
    </>
  );
}
