import React, { useState } from 'react'
import {AppBar, Toolbar, Typography, styled, Box,InputBase,Badge, Avatar, Menu, MenuItem} from "@mui/material";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {Mail, Notifications,} from "@mui/icons-material";


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between",
});

const Search = styled("div")(({theme})=>({
backgroundColor: "white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%"
}));
const Icons = styled(Box)(({theme})=>({
    display:"none",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex",
    }
}));
const UserBox = styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none",
    }
}));
const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
     <StyledToolbar>

       <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>
           Burhan FaceBook
       </Typography>
         <PeopleAltIcon sx={{display:{xs:"block",sm:"none"}} } />
         <Search><InputBase placeholer="Search here....!!"/></Search>
         <Icons>
             <Badge badgeContent={4} color="error" >
                 <Mail color="action"/>
             </Badge>
             <Badge badgeContent={2} color="error" >
                 <Notifications/>
             </Badge>
             <Avatar sx={{width:30 , height:30}}src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyAhFC5c7LwdH4pn6PODuCPbFjYIHWXqvFcu0pFkH38SgN4msB-RNMPo6rqk2iYbaEszsBxT1NxhJwcJyk7YIN04bX6pxooq7nIHrDaquh9HOgucLfSb6_LW9XaBLzAoROdt63rJdYPD83xjTcvJcbBGkVQhuESCyWh6geolYPvRQClDDPhmuvkRJVoWMb/s1280/WhatsApp%20Image%202023-05-18%20at%2012.19.22%20PM.jpeg'
             onClick={(e)=>setOpen(true)}
             />
            
         </Icons>
         <UserBox onClick={(e)=>setOpen(true)}>  
         <Avatar sx={{width:30 , height:30}}src='https://www.whyislam.org/wp-content/uploads/2019/06/Jerusalem-Dome-of-the-Rock.jpg'/>
         <Typography variant="span">Burhan</Typography>
         </UserBox>
     </StyledToolbar>
     <Menu
     id="demo-positioned-menu"
     aria-labelledby="demo-positioned-button"
     open={open}
     onClose={(e)=>setOpen(false)}
     anchorOrigin={{
        vertical:'top',
        horizontal:'right'
     }}
     transformOrigin={{
        vertical:'top',
        horizontal:'right'
     }}
     >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
     </Menu>
    </AppBar>
  )
}

export default Navbar