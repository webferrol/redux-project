import ListItemButton from '@mui/material/ListItemButton'
import Grid from '@mui/material/Unstable_Grid2'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { Link as LinkRouter, Outlet, useLocation } from 'react-router-dom'

const links = [
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/counter',
    text: 'Counter'
  },
  {
    to: '/pokemon',
    text: 'Pokemon API'
  },
  {
    to: '/todo',
    text: 'Todo APP'
  }
]

export function MainLayout () {
  const { pathname } = useLocation()
  return (
    <Grid container component='main' spacing={2} p={2}>
      <Grid xs={12} md={6}>
        <Typography variant='h3' component='h1'>Listado de Redux</Typography>
        <List>
          {
            links.map(({ to, text }) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  component={LinkRouter}
                  to={to}
                  divider
                  dense
                  selected={pathname === to}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Grid>
      <Grid xs={12} md={6}>
        <Outlet />
      </Grid>
    </Grid>
  )
}
