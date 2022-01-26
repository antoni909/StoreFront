import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

export default function Counter(){
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <span><button onClick={()=> dispatch(increment())}> + </button></span>
      <div>{count}</div>
      <span><button onClick={()=> dispatch(decrement())}> - </button></span>
    </div>
  )
}
