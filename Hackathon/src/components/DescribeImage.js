import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import '../styles.css';
import { evaluateImage } from "../multiModalApi/evaluateImage";
import UploadFile from "./UploadFile";
import Stack from '@mui/material/Stack';

export default function DescribeImage(props) {

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(null);
        props.handlefileChange();
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setFile(reader.result);
            getImageDescription(file, reader.result);
        };
    }

     const getImageDescription = async (imageFile, image) => {
        const description = await evaluateImage(imageFile);
        props.getImageDescription(description, image);
    }

    return (
        <div>
            <Stack direction='column' gap={2} className="sf-box">
                <Typography variant="h6" gutterBottom={true}>
                    {props.title}
                </Typography>
                {!file && <UploadFile onfileChange={handleFileChange}/>}
                {file && <div className={file ? "sf-file" : "sf-imageContainer"}>
                    <img className="sf-image" src={file} alt="preview" />
                </div>
                }
            </Stack>
        </div>
    );
}