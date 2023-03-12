import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import './buttons.css';

const buttons = [
    <Button 
        href="https://waterkeys.ca/q2a" 
        target="_blank"
        
        key="one">
            <h3>Q &amp; A </h3> 
            
    </Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
];
const buttons2 = [
    <Button key="one">Four</Button>,
    <Button key="two">Five</Button>,
    <Button key="three">Six</Button>,
];

export default function GroupSizesColors() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                m: 1,
                p: 2,
                
                },
            }}
        >
        {/* <ButtonGroup size="small" aria-label="small button group">
            {buttons}
        </ButtonGroup>
        <ButtonGroup color="secondary" aria-label="medium secondary button group">
            {buttons}
        </ButtonGroup> */}
        <ButtonGroup size="large" aria-label="large button group">
            {buttons}
        </ButtonGroup>
        <ButtonGroup size="large" aria-label="large button group">
            {buttons2}
        </ButtonGroup>
        </Box>
    );
}
