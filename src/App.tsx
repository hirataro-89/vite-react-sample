import { SectionTitle } from './components/SectionTitle'
import './App.css'
import { UserCard } from './components/UserCard'
import { useAllUsers } from './hooks/useAllUsers'
import './components/todo.css'
import { AddTodo } from './components/AddTodo'
import { Counter } from './components/Counter'
import { Modal } from './components/Modal'
import { Timer } from './components/Timer'
import { Alert } from './components/Alert'

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
      <hr style={{ margin: '6rem 0' }} />
      <SectionTitle title="サンプル：TODO" className="main__title" />
      <AddTodo />
      <hr style={{ margin: '6rem 0' }} />
      <SectionTitle title="サンプル：カウントアップ" className="main__title" />
      <Counter />
      <hr style={{ margin: '6rem 0' }} />
      <SectionTitle title="サンプル：モーダル" className="main__title" />
      <Modal>
        <p>モーダルの中身です</p>
        <p>モーダルの中身です笑</p>
      </Modal>
      <hr style={{ margin: '6rem 0' }} />
      <SectionTitle title="サンプル：タイマー" className="main__title" />
      <Timer />
      <hr style={{ margin: '6rem 0' }} />
      <SectionTitle title="サンプル：アラート" className="main__title" />
      <Alert />
    </>
  )
}
export default App
