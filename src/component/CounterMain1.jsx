import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increase,reset,decrease } from '../redux/slice'

function CounterMain1() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  return (
    <div className='w-100 d-flex justify-content-center align-items-center ' style={{height:'100vh'}}>
    <div className='w-50 border border-light p-3'>
        <h1 className='text-light text-center'>Counter </h1>
        <h2 className='text-warning text-center'>{count}</h2>
        <div className='mt-3 d-flex justify-content-between'>
          <button className='btn btn-success' onClick={()=>{dispatch(increase())}}>Increase</button>
          <button className='btn btn-info' onClick={()=>{dispatch(reset())}}>Reset</button>
          <button className='btn btn-danger' onClick={()=>{dispatch(decrease())}}>Decrease</button>
        </div>
    </div>
</div>
  )
}

export default CounterMain1