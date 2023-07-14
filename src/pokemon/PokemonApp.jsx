import Box from '@mui/material/Box'
import { useEffect } from 'react'
import { getPokemons } from './slices'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import { ListItem, ListItemText } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export function PokemonApp () {
  const dispatch = useDispatch()
  const { pokemons, isLoading, nextPage } = useSelector(state => state.pokemons)
  useEffect(
    () => {
      dispatch(getPokemons())
    }, [dispatch]
  )
  return (
    <Box>
      <Typography variant='h4' component='h2'>Pokemon API</Typography>
      <List dense>
        {
          pokemons?.map(({ name, url }) => (
            <ListItem key={name}>
              <ListItemText
                primary={name}
                secondary={url}
              />
            </ListItem>
          ))
        }
      </List>
      <Button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(nextPage))}
      >
        Siguiente {isLoading ? <CircularProgress size='1rem' /> : <NavigateNextIcon />}
      </Button>
    </Box>
  )
}
