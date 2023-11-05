import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ListIcon from '@mui/icons-material/List';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function ReviewReport(props){
    return(
        <div>
            <Typography variant="body1" gutterBottom={true} className="sf-header">
                    Confirm and Submit
                </Typography>
        <List>
            <ListItem>
                <Stack direction='column' gap={2}>
            <ListItemButton>
              <ListItemIcon>
                <CameraAltIcon />
              </ListItemIcon>
              <ListItemText primary="Photos">
                </ListItemText>
            </ListItemButton>
            <img className="sf-list-image" src={props.image} alt="preview" />
            </Stack>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Service" secondary={props.reportDetails?.Problem_Category} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <MyLocationIcon />
              </ListItemIcon>
              <ListItemText primary="Location" secondary="Fort MasonSan Francisco, CA 94109"/>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <PlaylistAddCheckIcon />
              </ListItemIcon>
              <ListItemText primary="Additional Details" secondary={props.reportDetails?.Additional_details} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ContactMailOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" secondary="John, 634-456-1234"/>
            </ListItemButton>
          </ListItem>
        </List>
        </div>
    )


}