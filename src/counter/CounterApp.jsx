import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { AddOutlined, RemoveOutlined } from '@mui/icons-material'
// redux
import { increment, incrementBy, decrement } from './slices/counter-slice'
import { useDispatch, useSelector } from 'react-redux'

const incrementNumber = 5

export function CounterApp () {
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <Grid container spacing={2} p={2} alignItems='center'>
      <Grid xs={12}>
        <Typography variant='h4' component='h2'>Counter</Typography>
      </Grid>
      <Grid xs={12} sx={{ display: 'flex', direction: 'column', gap: 2, alignItems: 'center', justifyContent: 'start' }}>
        <Button
          variant='outlined'
          startIcon={<AddOutlined />}
          onClick={() => dispatch(increment())}
        />
        <Button
          variant='outlined'
          startIcon={<RemoveOutlined />}
          onClick={() => dispatch(decrement())}
        />
        <Button
          variant='outlined'
          startIcon={<AddOutlined />}
          onClick={() => dispatch(incrementBy(incrementNumber))}
        >
          <Typography component='strong'>
            {incrementNumber}
          </Typography>
        </Button>
        <Typography component='strong'>
          {count}
        </Typography>
      </Grid>
    </Grid>
  )
}
