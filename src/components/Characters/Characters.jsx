import { useState, useEffect } from 'react';
import { Box } from '@mui/material/';
import Accordion from '../Accordion/Accordion';
import LoadingSpinner from '../common/LoadingSpinner/LoadingSpinner';
import { v4 as uuidv4 } from 'uuid'

const Characters = ({ open, film }) => {
    const [characters, setCharacters] = useState([])
    const [charactersIsLoading, setCharactersIsLoading] = useState(true)

    const characterPromises = film.characters.map(character => fetch(character).then(res => res.json()))
    useEffect(() => {
        const timer = setTimeout(() => {
          Promise.all(characterPromises).then(res => setCharacters(res)).finally(() => setCharactersIsLoading(false))
        }, 2000);
        return () => clearTimeout(timer);        
      }, [open])

    const loadingCharsIsDone = () => {

      return (
        <Box  sx={{ fontSize: 14, textAlign: 'left', maxWidth: '100%'}}>{characters.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        }).map(character => {
            return (
            <Box key={uuidv4()}>
           <Accordion key={character.name} character={character}> {character.name} </Accordion>
            </Box>
            )
        })}</Box>
        )
    }

    return (
      <Box>
          {charactersIsLoading ? <LoadingSpinner /> : loadingCharsIsDone()}        
      </Box>
      )
      
}

export default Characters;