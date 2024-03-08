import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter } from '../../Store/slices/counterSlice'

const Home = () => {

  const selector = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()

  


  return (
    <div>
      <button onClick={()=>dispatch(addCounter())}>add</button>
      <h1>{selector.counterValue}</h1>
    </div>
  )
}

export default Home