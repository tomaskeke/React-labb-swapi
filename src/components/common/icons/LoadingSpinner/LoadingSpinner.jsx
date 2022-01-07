import * as React from 'react';
import { LinearProgress, Box } from "@mui/material";


const LoadingSpinner = () => {

    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <h3>Loading...</h3>
            </Box>
            <Box sx={{ mx: 'auto', width: '10%'}}>
                <LinearProgress color="inherit" />
            </Box>
        </Box>
    )
};

export default LoadingSpinner;