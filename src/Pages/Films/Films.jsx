import FilmCard from "../../components/FilmCard/FilmCard"
import { useState, useEffect } from "react"
import { Grid, Paper } from "@mui/material"
import LoadingSpinner from "../../components/common/LoadingSpinner/LoadingSpinner"
import { Box } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'

const Films = () => {
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://swapi.dev/api/films/')
            .then(res => {if(res.ok) {return res.json()}})
            .catch(err => console.log('Error fetching data', err))
            .then(data => setFilms(data.results))
            .finally(() => {
                setLoading(false)   
               })
    }, [])
    
    const loadingIsDone = () => { 
        return (
        <Grid container p={4} sx={{justifyContent: 'center'}} spacing={{md: 4}}  columns={{ xs: 2, sm: 4, md: 6}} key={uuidv4()}>
        {films.length > 0 &&  
          films.sort((a, b) => a.episode_id - b.episode_id).map((film) => {
              
              return (
                  <Paper key={uuidv4()} sx={{ maxWidth: 'md', align: 'center', m: 2}}>
                  <Grid item  key={uuidv4()}>
                  <FilmCard key={uuidv4()} film={film}  />
                  </Grid>
                  </Paper>
              )
          })}
          </Grid>
        )    
    }

  return (
      <Box>
      {loading ? <LoadingSpinner /> : loadingIsDone() }
      </Box>
  );
  
}

export default Films;