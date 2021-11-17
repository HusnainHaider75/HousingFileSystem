import React from 'react'
import { Grid,Paper, Avatar, TextField, Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';


export default function TopLeftSetting() {

  const redirect = useHistory();
  const [PageSetting, SetPageSetting]=useState({
    LeftMargin:"", RightMargin:""
  });


  let name, value;
  function HandleInputs(e){
    name= e.target.name;
    value = e.target.value;

    SetPageSetting({ ...PageSetting, [name]:value})

  }

  const SubmitPageSetting =async ()=>{
    
    const result = await axios.put('http://localhost:4000/pagesetting', PageSetting);
    if (result.data) {
      alert(result.data)
    }
    else {
        redirect.push(`/newUser`)
    }
  }

  const paperStyle={padding :20,height:'57vh',width:400, margin:"70px 29%"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'40px 0'}

  return (
    <div className="userList">
            <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><SettingsIcon/></Avatar>
                    <h2>Reset Page</h2>
                </Grid>
                <TextField label='Left Margin' name="LeftMargin" value={PageSetting.LeftMargin} fullWidth required variant="outlined" onChange={(e)=>HandleInputs(e)}/>
                <br/>
                <br/>
                <br/>
                <TextField label='Right Margin' name="RightMargin"  value={PageSetting.RightMargin} fullWidth required variant="outlined" onChange={(e)=>HandleInputs(e)}/>
  
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={()=>SubmitPageSetting()}>Set Page</Button>

            </Paper>
        </Grid>
    </div>
  );
}
