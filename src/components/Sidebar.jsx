import React from 'react'
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/Campaign';
import CastConnectedSharpIcon from '@mui/icons-material/CastConnectedSharp';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import WatchIcon from '@mui/icons-material/Watch';
import BloodtypeSharpIcon from '@mui/icons-material/BloodtypeSharp';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StoreSharpIcon from '@mui/icons-material/StoreSharp';
import LayersIcon from '@mui/icons-material/Layers';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import StadiumSharpIcon from '@mui/icons-material/StadiumSharp';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import {  Group, ModeNight, Person, Settings, Storefront} from '@mui/icons-material';
const Sidebar = ({mode,setMode}) => {
  return (
        <Box flex={1} p={2}
        sx={{display:{xs:"none",sm:"block"}}}>
          <Box position="fixed">
            <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
                <HomeIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
               <Group color='success'/>
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Market Place" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
                <CampaignIcon/>
              </ListItemIcon>
              <ListItemText primary="Ad Centre" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
                <FormatIndentIncreaseIcon/>
              </ListItemIcon>
              <ListItemText primary="Ads Manager" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
                <EventBusyIcon/>
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
                <VideogameAssetIcon/>
              </ListItemIcon>
              <ListItemText primary="Gaming Videos" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon color='#F5137A'> 
                <MarkChatUnreadIcon />
              </ListItemIcon>
              <ListItemText primary="Messanger" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
                <LayersIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
                <BookmarkIcon/>
              </ListItemIcon>
              <ListItemText primary="Saved" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
              <WatchIcon/>
              </ListItemIcon>
              <ListItemText primary="Memories" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
              <BloodtypeSharpIcon color="danger"/>
              </ListItemIcon>
              <ListItemText primary="Blood Donation" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
              <CastConnectedSharpIcon/>
              </ListItemIcon>
              <ListItemText primary="Live Streaming" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
              <StadiumSharpIcon/>
              </ListItemIcon>
              <ListItemText primary="Recent ad Activity" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
              <StoreSharpIcon/>
              </ListItemIcon>
              <ListItemText primary="Meta Business Suite" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
              <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list"> 
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
            <Switch onChange={(e)=>setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
        </Box>
    )
}

export default Sidebar