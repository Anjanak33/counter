import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/counterSlice'


function Counter() {

 const count =useSelector((state)=>state.counter.count)
 const dispatch =useDispatch()


  return (
    <div className='text-center ' style={{marginTop:'250px'}} >
        <h1 className='fw-bolder'>Counter App</h1>
        <h1>{count}</h1>
       
        <div className='m-3'>
        <button className='btn btn-secondary mx-2' onClick={()=>dispatch(increment())}>Increment</button>
        <button className='btn btn-secondary mx-2' onClick={()=>dispatch(decrement())}>Decrement</button>
        <button className='btn btn-secondary mx-2' onClick={()=>dispatch(reset())}>Reset</button>
        </div>

    </div>
  )
}

export default Counter
