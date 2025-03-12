import { useState, FC } from 'react'
import './Counter.css'


export const Counter: FC = () => {
  const [count, setCount] = useState<number>(0)

  const onClickCountUp = () => {
    setCount(count + 1)
  }
  const onClickCountDown = () => {
    setCount(count - 1)
  }

  return (
    <div className='counter'>
      <button className='counter__button' onClick={onClickCountDown}>-</button>
      <p className='counter__text'>{count}</p>
      <button className='counter__button' onClick={onClickCountUp}>+</button>
    </div>
  )
}