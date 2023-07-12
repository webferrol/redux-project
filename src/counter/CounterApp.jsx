import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { AddOutlined, RemoveOutlined } from '@mui/icons-material'
// redux
import { increment, decrement } from '../store/slices/counter/counter-slice'
import { useDispatch, useSelector } from 'react-redux'

export function CounterApp () {
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <Grid container spacing={2} p={2} alignItems='center'>
      <Grid xs={12}>
        <Typography variant='h3' component='h1'>Counter</Typography>
      </Grid>
      <Grid xs={1}>
        <Button
          variant='outlined'
          startIcon={<AddOutlined />}
          onClick={() => dispatch(increment())}
        />
      </Grid>
      <Grid xs={1}>
        <Button
          variant='outlined'
          startIcon={<RemoveOutlined />}
          onClick={() => dispatch(decrement())}
        />
      </Grid>
      <Grid xs={1}>
        <Typography component='strong'>
          {count}
        </Typography>
      </Grid>
    </Grid>
  )
}
