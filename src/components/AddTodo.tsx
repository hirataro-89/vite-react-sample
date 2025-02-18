
import { useState } from 'react'
import { Input } from './Input'

export const AddTodo = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [newTodoText, setNewTodoText] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value)
  }
  const onClickAddTodo = () => {
    setTodos([...todos, newTodoText])
    setNewTodoText('')
  }
  return (
    <>
      <div className='todo-sample'>
        <Input handleChange={handleChange} value={newTodoText} />
        <button onClick={onClickAddTodo}>追加</button>
      </div>
      <ul className='todo-list'>
        {todos.map((todo, index) => (
          <li key={`${todo}-${index}`}>{todo}</li>
        ))}
      </ul>
    </>
  )
}