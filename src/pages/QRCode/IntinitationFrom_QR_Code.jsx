import "./IntinitationFrom_QR_Code.css";
import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import QRCode from "qrcode";
import axios from "axios";
import BackGroundImg from "../QRCode/Background_Image.jpg";
export default function QR_Code() {
  const { RegNo, IntinitationFromNo } = useParams();
  const [imageUrl, setImageUrl] = useState("");
  const [PageAlignment, SetPageAlignment] = useState([]);

  const generateQrCode = async () => {
    try {
      const ResultedCode = await QRCode.toDataURL(
        `Registration=${RegNo} + IntinitationLetterSerial= ${IntinitationFromNo}`
      );
      setImageUrl(ResultedCode);
      console.log(imageUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const LoadPageSetting = async () => {
    const PageSettingLoaded = await axios.get(
      "http://localhost:4000/loadpagesetting"
    );
    if (PageSettingLoaded) {
      SetPageAlignment(PageSettingLoaded.data);
    } else {
      alert("Error!");
    }
  };

  useEffect(() => {
    LoadPageSetting();
    generateQrCode();
  }, []);

  const LeftMargin = PageAlignment && PageAlignment[0] && PageAlignment[0].LeftMargin ? PageAlignment[0].LeftMargin : "0px"

  return (
    <>
      <div className="QRCode">

      <div
        style={{ background: `url(${BackGroundImg})` , width:"1249px" , height:"1755px", backgroundSize:'cover'}}
      >
              {/* <div
                style={{
                  padding: `${LeftMargin}`
                }}
              >
                <h2>Registartion Number :</h2>
                <span>{RegNo}</span>
                <br />
                <h2>Intinition Number :</h2>
                <span>{IntinitationFromNo}</span>
                <br />
                <h1>QR Code</h1>
                {imageUrl ? (
                  <a href={imageUrl} download>
                    <img src={imageUrl} alt="img" />
                  </a>
                ) : null}
              </div> */}
      </div>

      </div>
    </>
  );
}
