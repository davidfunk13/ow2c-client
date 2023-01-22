import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { decrement, increment } from './counterSlice'
import { RootState } from '../../app/store'
import { Button, Grid, Typography } from '@mui/material'

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <Grid>

      <Typography>
        Count: {count}
        </Typography>
      <Button onClick={() => dispatch(increment())} variant='contained' color='primary'>
        + Increment
      </Button>
      <Button onClick={() => dispatch(decrement())} variant='contained' color='primary'>
        + Decrement
      </Button>
    </Grid>
  )
}