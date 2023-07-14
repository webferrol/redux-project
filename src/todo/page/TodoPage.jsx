import { useParams } from 'react-router-dom'
import { useGetTodoQuery } from '../api/todoApi'
import { Box, CircularProgress, Typography } from '@mui/material'

export function TodoPage () {
  const { todo } = useParams()
  const { data, isLoading } = useGetTodoQuery(todo)
  return (
    <Box>
      <Typography variant='h5' component='h3'>{data?.title}</Typography>
      {isLoading && <CircularProgress />}
    </Box>
  )
}
