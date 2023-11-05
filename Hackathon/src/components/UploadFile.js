import React, { useState } from "react";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import '../styles.css';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

export default function UploadFile(props) {
    return (<div className="sf-uploadFile">
        <IconButton component="label" variant="outlined" className="sf-iconButton">
            <input type="file" accept="image/*" hidden onChange={props.onfileChange}/>
            <Stack direction='column' gap={2} className="sf-stack">
            <AddAPhotoIcon />
            <label className="sf-label">Click to upload</label>
            </Stack>
        </IconButton>
    </div>)
}