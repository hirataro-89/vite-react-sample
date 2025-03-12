import { FC } from 'react'
import { Todo } from './AddTodo'

type Props = {
  todos: Todo[]
  onClickCompleteTodo: (id: number) => void
  onClickResetTodo: (id: number) => void
}

export const TodoItem: FC<Props> = ({ todos, onClickCompleteTodo, onClickResetTodo }) => {
  return (
    <ul className='todo-list'>
        {todos.map((todo, index) => (
          <li key={`${todo.id}-${index}`} className='todo-item'>
            <p>{todo.id}.{todo.text}</p>
            {todo.completed ? <button onClick={() => onClickResetTodo(todo.id)}>戻す</button> : <button onClick={() => onClickCompleteTodo(todo.id)}>完了</button>}
          </li>
        ))}
    </ul>
  )
}