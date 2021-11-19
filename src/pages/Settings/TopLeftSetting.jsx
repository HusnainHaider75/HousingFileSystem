import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Box,
  styled,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./TopLeftSetting.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function TopLeftSetting() {
  const redirect = useHistory();

  const [QRCodeSetting, SetQRCodeSetting] = useState({
    LeftMargin: "",
    TopMargin: "",
  });

  const [RegistrationSetting, SetRegistrationSetting] = useState({
    LeftMargin: "",
    TopMargin: "",
  });

  const [SecurityKeySetting, SetSecurityKeySetting] = useState({
    LeftMargin: "",
    TopMargin: "",
  });

  const [NotSerialNoSetting, SetNotSerialNoSetting] = useState({
    LeftMargin: "",
    TopMargin: "",
  });

  const [IssueDateSetting, SetIssueDateSetting] = useState({
    LeftMargin: "",
    TopMargin: "",
  });

  let name, value;
  function HandleInputs(e) {
    name = e.target.name;
    value = e.target.value;

    SetQRCodeSetting({ ...QRCodeSetting, [name]: value });
  }

  const SubmitPageSetting = async () => {
    const result = await axios.post(
      "http://localhost:4000/pagesetting",
      QRCodeSetting
    );
    if (result.data) {
      redirect.push(`/users`);
    } else {
      redirect.push(`/users`);
    }
  };

  return (
   

        <div className="userList">

      {/* First Form */}

            <div className="user">
            <div className="userUpdate">
              <span className="userUpdateTitle">Set QR Code</span>
              <div className="userUpdateForm">
                <div className="userUpdateLeft">

                  <div className="userUpdateItem">
                    <label>Left Margin</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      name="LeftMargin"

                      onChange={(e)=>HandleInputs(e)}

                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Top Margin</label>
                    <input
                      type="text"s
                      className="userUpdateInput"
                      name="TopMargin"

                      onChange={(e)=>HandleInputs(e)}
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userUpdateButton" >Update</button>
                </div>
              </div>
            </div>
          </div>

    {/* Second Form */}
    <div className="user">
            <div className="userUpdate">
              <span className="userUpdateTitle">Set Registration No.</span>
              <div className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Left Margin</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      name="LeftMargin"

                      onChange={(e)=>HandleInputs(e)}

                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Right Margin</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      name="RightMargin"

                      onChange={(e)=>HandleInputs(e)}
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userUpdateButton" >Update</button>
                </div>
              </div>
            </div>
          </div>

    {/* Third Form */}
    <div className="user">
            <div className="userUpdate">
              <span className="userUpdateTitle">Set Security Key</span>
              <div className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Left Margin</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      name="LeftMargin"
                      onChange={(e)=>HandleInputs(e)}
                    />
                  </div>
                  <div className="userUpdateItem">

                    <label>Top Margin</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      name="TopMargin"

                      onChange={(e)=>HandleInputs(e)}
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">

                  </div>
                  <button className="userUpdateButton" >Update</button>
                </div>
              </div>
            </div>
          </div>

    {/* Forth Form */}
    <div className="user">
            <div className="userUpdate">
              <span className="userUpdateTitle">Set Issue Date</span>
              <div className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Left Margin</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      name="LeftMargin"

                      onChange={(e)=>HandleInputs(e)}
                    />
                  </div>
                  <div className="userUpdateItem">

                    <label>Top Margin</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      name="TopMargin"

                      onChange={(e)=>HandleInputs(e)}
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userUpdateButton" >Update</button>
                </div>
              </div>
            </div>
          </div>

    {/* Fifth Form */}

    <div className="user">
            <div className="userUpdate">
              <span className="userUpdateTitle">Set Note Serial No.</span>
              <div className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Left Margin</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      name="LeftMargin"

                      onChange={(e)=>HandleInputs(e)}
                    />
                  </div>
                  <div className="userUpdateItem">

                    <label>Top Margin</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      name="TopMargin"

                      onChange={(e)=>HandleInputs(e)}
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userUpdateButton" >Update</button>
                </div>
              </div>
            </div>
          </div>

        </div>
  );
}
