import React from 'react'
import Counter from '../components/counter/Counter'
import CounterActions from '../redux/actions/CounterActions'
import Main from '../components/main/Main'

const Home = () => {
 

  return (
    <>
      <Counter/>
      <CounterActions/>
      <Main/>
    </>
  )
}

export default Home