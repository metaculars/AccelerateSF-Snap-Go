import React from "react";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ReviewReport from "./ReportForm";
import  Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Drawer(props) {
    return (
        <div>
            <SwipeableDrawer className="sf-drawer"
                anchor="right"
                open={props.open}
                onClose={props.onClose}
                onOpen={props.onOpen}
            >
                <ReviewReport image={props.image} reportDetails={props.reportDetails}/>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button variant="contained" className="sf-button" onClick={props.onClose}>Back</Button>
                <Button variant="contained" className="sf-button" onClick={props.onSubmit}>Submit</Button>
                </ButtonGroup>
            </SwipeableDrawer>
        </div>
    );
}