import { SectionTitle } from './components/SectionTitle'
import './App.css'
import { UserCard } from './components/UserCard'
import { useAllUsers } from './hooks/useAllUsers'
import './components/todo.css'
import { AddTodo } from './components/AddTodo'


const App = () => {
  const { getUsers, userProfiles, loading, error } = useAllUsers()
  const onClickFetchUser = () => {
    getUsers()
  }

  return (
    <>
      <SectionTitle title="課題1.カード横並び" className="main__title" />
      <button onClick={onClickFetchUser}>データ取得ボタン</button>
      <ul className='user-cards'>
        {error ? <p>データの取得に失敗しました</p> : loading ? <p>Loading...</p> : userProfiles?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
      <SectionTitle title="課題2.TODOサンプル" className="main__title" />
      <AddTodo />
    </>
  )
}
export default App
