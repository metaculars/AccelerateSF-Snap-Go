import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../styles.css';
import Button from '@mui/material/Button';
import DescribeImage from "./DescribeImage";
import { evaluateText, getServiceCategory, getAdditionalDetails } from "../multiModalApi/evaluateImage";
import Stack from '@mui/material/Stack';
import Drawer from "./Drawer";
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function SubmitRequest() {

    const [issueDetails, setIssueDetails] = useState(null);
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState(null);
    const [busy, setBusy] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [language, setLanguage] = useState("English");
    const [reportDetails, setreportDetails] = useState('');

    const handleImgDescr = (description, file) => {
        setIssueDetails(description);
        setImage(file);
        getIssueCategory(description);
    }

    const handleReview = () => {
        toggleDrawer();
    }

    const toggleDrawer = () => {
        setOpen(!open);
    }

    const handleSubmit = () => {
        setOpen(false);
        setIssueDetails(null);
        setImage(null);
        setShowDialog(true);
    }

    async function getIssueCategory(issueDetails) {
        setBusy(true);
        const reportDetails = await evaluateText(issueDetails, language);
        console.log(`neha${reportDetails}`);
        setreportDetails(JSON.parse(reportDetails));
        setBusy(false);
    }

    const handleSelectChange = (event) => {
        setLanguage(event.target.value);
    }

    const handleDialogClose = () => {
        setShowDialog(false);
        location.reload();
    }

    return (
        <div>
            <Stack direction='row' gap={30} className="sf-header">
            <Typography variant="body1" gutterBottom>
                Submit a new Report
            </Typography>
            <Select  className="sf-select" value={language} onChange={handleSelectChange} autoWidth label="Select Language">
                <MenuItem value="English">EN</MenuItem>
                <MenuItem value="Hindi">HI</MenuItem>
                <MenuItem value="Spanish">ES</MenuItem>
                <MenuItem value="Chinese">CH</MenuItem>
            </Select>
            </Stack>
            <Stack direction='column' gap={2}>
                <DescribeImage title="Tell us about the issue" getImageDescription={handleImgDescr} handlefileChange={() => setBusy(true)} />
                {image && <TextField id="outlined-basic" className="sf-description" value={reportDetails.Problem_Description} variant="outlined" multiline
                    maxRows={4} placeholder="Description" onChange={(e) => {setIssueDetails(e.target.value); getIssueCategory(e.target.value);}} />}
                {image && <Button className="sf-button" variant="contained" onClick={handleReview}>Review</Button>}
                <Drawer open={open} onClose={toggleDrawer} onOpen={() => setOpen(true)} image={image} onSubmit={handleSubmit} reportDetails={reportDetails}/>
            </Stack>
            {busy && <CircularProgress />}
            {showDialog &&
                <Dialog onClose={handleDialogClose} open={showDialog}>
                    <DialogTitle className="sf-dialog">Report submitted</DialogTitle>
                    <TextField disabled multiline maxRows={2}
                        defaultValue=" Thank you for submitting your report. Your case ID is 1234.
          You can track your case status using this ID."
                    />
                </Dialog>}
        </div>
    );
}