import { Avatar, Box, Button, ButtonGroup, Fab,Modal,Stack,TextField,Tooltip, Typography } from '@mui/material'
import {Add as AddIcon, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"
import React, { useState } from 'react'
import styled from '@emotion/styled'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import DateRangeIcon from '@mui/icons-material/DateRange';
const Add = () => {
  const StyledModal = styled(Modal)(
    {
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }
  )
  const UserBox = styled(Box)(
    {
      display:"flex",
      alignItems:"center",
      gap:"10px",
      marginBottom:"20px"
    }
  )
  const [open,setOpen] =useState(false)
  return (
    <div>
        <Tooltip onClick={(e)=>{
          setOpen(true)
        }} 
        title="Delete" sx={{position:"fixed"
        ,bottom:20, left:{xs:"calc(50%)", md:30}}}>
     <Fab color="primary" aria-label='add'>
        <AddIcon/>
     </Fab>
        </Tooltip> 
        <StyledModal
  open={open}
  onClose={(e)=>{setOpen(false)}}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor = { "background.default" }
        color = { "text.primary" } p={3} borderRadius={5}>
    <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
    <UserBox>
    <Avatar sx={{width:30 , height:30}}src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyAhFC5c7LwdH4pn6PODuCPbFjYIHWXqvFcu0pFkH38SgN4msB-RNMPo6rqk2iYbaEszsBxT1NxhJwcJyk7YIN04bX6pxooq7nIHrDaquh9HOgucLfSb6_LW9XaBLzAoROdt63rJdYPD83xjTcvJcbBGkVQhuESCyWh6geolYPvRQClDDPhmuvkRJVoWMb/s1280/WhatsApp%20Image%202023-05-18%20at%2012.19.22%20PM.jpeg'/>
    <Typography >Burhan</Typography>
    </UserBox>
    <TextField
      sx={{width:"100%"}}
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          placeholder="Chalo Kuch Post Karte hain"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
          <EmojiEmotionsIcon color="primary"/>
          <Image color="secondary"/>
          <VideoCameraBack color="success"/>
          <PersonAdd color="error"/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button sx={{width:"100px"}}> 
<DateRangeIcon/>
  </Button>
</ButtonGroup>
  </Box>
</StyledModal>
    </div>
  )
}

export default Add