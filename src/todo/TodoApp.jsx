import CircularProgress from '@mui/material/CircularProgress'
import List from '@mui/material/List'
import { Box, Typography, ListItem, ListItemText, ListItemButton } from '@mui/material'
import { useGetTodosQuery } from './api/todoApi'
import { Link, Outlet } from 'react-router-dom'

export function TodoApp () {
  const { data: todos = [], isLoading } = useGetTodosQuery()
  return (
    <Box>
      <Typography variant='h4' component='h2'>Todo App</Typography>
      <Outlet />
      <List dense>
        {
          todos?.map(({ id, title }) => (
            <ListItem key={id}>
              <ListItemButton component={Link} to={`/todo/${id}`}>
                <ListItemText
                  primary={title}
                />
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
      {isLoading && <CircularProgress />}
    </Box>
  )
}
