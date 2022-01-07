import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({ character }) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      <Accordion onChange={handleChange('panel1')} sx={{m: 2}}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          {character.name}
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', width: '100%', flexDirection: 'row', textAlign: 'left' }} spacing={2}>
              <Typography component={'span'} sx={{ width: '100%' }}>
                Name: {character.name}
                <Divider />
                Mass: {character.mass}
                <Divider />
                Hair color: {character.hair_color}
                <Divider />
                Skin color: {character.skin_color}
                </Typography>
                <Typography component={'span'} sx={{width: '100%'}}>
                <Divider />
                Height: {character.height}
                <Divider />
                Eye color:  {character.eye_color}
                <Divider />
                Birth year: {character.birth_year}
                <Divider />
                Gender: {character.gender}
                <Divider />
                </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}