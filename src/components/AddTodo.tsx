import { useState, FC } from 'react'
import { Input } from './Input'
import { TodoItem } from './TodoItem'

export type Todo = {
  id: number
  text: string
  completed: boolean
}


export const AddTodo: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodoText, setNewTodoText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value)
  }
  const onClickAddTodo = () => {
    if (newTodoText !== '') {
      setTodos([...todos, { id: todos.length + 1, text: newTodoText, completed: false }])
      setNewTodoText('')
    }
  }

  const onClickCompleteTodo = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: true } : todo))
  }

  const onClickResetTodo = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: false } : todo))
  }

  return (
    <>
      <div className='todo-sample'>
        <Input handleChange={handleChange} value={newTodoText} />
        <button onClick={onClickAddTodo}>追加</button>
      </div>
      <TodoItem todos={todos} onClickCompleteTodo={onClickCompleteTodo} onClickResetTodo={onClickResetTodo} />
    </>
  )
}