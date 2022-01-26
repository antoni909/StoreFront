import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, selectCount } from '../features/counter/counterSlice'

// bring in state variable wanting to update: count
// bring in actions needed: decrement, increment
// bring in dispatch to update state

export default function Counter(){
  // grab state, its reducer function, and update its var val
  // const count = useSelector((state)=> state.counter.value)
  const count = useSelector(selectCount)

  // use any action from any reducer
  const dispatch = useDispatch()

  return (
    <div>
      <span><button onClick={()=> dispatch(increment())}> + </button></span>
      <div>{count}</div>
      <span><button onClick={()=> dispatch(decrement())}> - </button></span>
      <button onClick={()=> dispatch(incrementByAmount(10))}> +10 </button>
    </div>
  )
}
