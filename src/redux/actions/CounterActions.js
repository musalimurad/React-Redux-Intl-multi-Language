import React from 'react'
import { increment, decrement, incrementByAmount } from '../reducers/counterReducer'
import { useDispatch } from 'react-redux'

const CounterActions = () => {

  const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=> dispatch(decrement())}>Azalt (-)</button>
        <button onClick={()=> dispatch(increment())}>Artir (+)</button>
        <button onClick={()=> dispatch(incrementByAmount(4))}> 4 Artir (+)</button>

    </div>
  )
}

export default CounterActions