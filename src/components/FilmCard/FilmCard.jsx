import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import { useState } from 'react'
import Characters from '../Characters/Characters'
import { Modal, Divider } from '@mui/material';



export default function FilmsCard({ film,}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: 4,
        boxShadow: 24,
        overflow: 'scroll',
        overflowX: 'hidden',

        p: 4,
      };
      


    return (
        <Box>
         <Card variant="outlined" key={uuidv4()}>        
            <CardContent key={uuidv4()}>
                <Typography key={uuidv4()} sx={{fontSize: 16, fontWeight: 'bold', textAlign: 'center'}} color="text.primary" gutterBottom>
                    {film.title}
                </Typography>
                <Divider color="deepOrange.primary" sx={{height: '4px'}} />
                <Typography sx={{fontSize: 14, textAlign: 'left', m: '10px'}} color="text.secondary" gutterBottom>
            
                Episode: {film.episode_id}        
                </Typography>
                <Typography sx={{fontSize: 14, textAlign: 'left', m: '10px'}} color="text.secondary" gutterBottom>
                Release Date: {film.release_date}
                </Typography>
            </CardContent>
        <CardActions key={uuidv4()}>
        <Button size="small" sx={{ mx: "auto"}} key={uuidv4()} onClick={handleOpen}>Learn More</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontSize: 16, textAlign: 'center'}}>
            Characters in <strong>{film.title}</strong>
            </Typography>
            <Characters open={open} setOpen={setOpen} film={film} />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            </Typography>
        </Box>
        </Modal>
        
      </CardActions>
        </Card>
        </Box>
        )
}

