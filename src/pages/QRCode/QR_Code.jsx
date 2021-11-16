import './QR_Code.css'
import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { ImFolderPlus } from "react-icons/im";
import { DeleteOutline } from "@material-ui/icons";
import EditIcon from '@material-ui/icons/Edit';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function QR_Code() {

  return (
    <>
    <div className="userList">
       <h1>QR Code</h1>
    </div>
    </>
  );
}
