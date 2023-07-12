import { ListItemButton } from '@mui/material'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { Link as LinkRouter, Outlet } from 'react-router-dom'

export function MainLayout () {
  return (
    <Box component='main' p={2}>
      <Typography variant='h3' component='h1'>Listado de Redux</Typography>
      <List>
        <ListItem>
          <ListItemButton
            component={LinkRouter}
            to='/counter'
            primary='Counter'
          >
            <ListItemText primary='Counter' />
          </ListItemButton>
        </ListItem>
      </List>
      <Outlet />
    </Box>
  )
}
