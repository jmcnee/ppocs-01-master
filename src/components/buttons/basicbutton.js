import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './buttons.css';

export default function BasicButtons() {
    return (
        <>
        <div className='basic--button-container'>
                <Button className='basic--button' 
                    // sx={{px:'7rem', py: '2rem'}}
                variant="outlined"
                href='https://waterkeys.ca/q2a'
                target="_blank"
                >
                    Q-2-A
                </Button>
                <Button className='basic--button' 
                    // sx={{px:'7rem', py: '2rem'}}
                variant="outlined"
                href='https://waterkeys.ca/moodle'
                target="_blank"
                >
                    SIS Tools
                </Button>
        </div>
        <div className='basic--button-container'>
                <Button className='basic--button' 
                    // sx={{px:'7rem', py: '2rem'}}
                variant="outlined"
                href='https://waterkeys.ca/q2a'
                target="_blank"
                >
                    PPO Q2A
                </Button>
                <Button className='basic--button' 
                    // sx={{px:'7rem', py: '2rem'}}
                variant="outlined"
                href='https://waterkeys.ca/moodle'
                target="_blank"
                >
                    PPO Learn
                </Button>
        </div>
        
        </>
    );
}
