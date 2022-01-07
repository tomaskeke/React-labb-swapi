import { useState, useEffect } from 'react';
import {Typography, } from '@mui/material/';
import Accordion from '../Accordion/Accordion';

const Characters = ({ open, film }) => {
    const [characters, setCharacters] = useState([])

    const characterPromises = film.characters.map(character => fetch(character).then(res => res.json()))
    useEffect(() => {
        Promise.all(characterPromises).then(res => setCharacters(res));
      }, [open])
    
    return ( 
            <Typography  sx={{ fontSize: 14, textAlign: 'left', maxWidth: '100%'}}>{characters.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        }).map(character => {
            return <Accordion key={character.name} character={character}>{character.name}</Accordion> 
        
        })}</Typography>
      )
      
}

export default Characters;