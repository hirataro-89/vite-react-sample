import { useState, useEffect } from 'react'

export const Alert = () => {
  const [isAlert, setIsAlert] = useState(false)

  useEffect(() => {
    if (isAlert) {
      window.alert('アラートが表示されました！')
    }
  }, [isAlert])

  const toggleAlert = () => {
    setIsAlert(prev => !prev)
  }

  return (
    <div>
      <input type="checkbox" id="alert-checkbox" onClick={toggleAlert} />
      <label htmlFor="alert-checkbox">アラートを表示</label>
    </div>
  )
}


const Parent = () => {
  return <Child count={5} />; // ←親から子にcount=5を渡す
};

const Child = ({ count }) => {
  count = count + 1; // ← これは親のcountに影響しない
  return <div>{count}</div>; // ← 表示は6。だけど親のcountは5のまま
};
