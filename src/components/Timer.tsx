import { useState, useEffect } from "react"
import styles from './Timer.module.css';


export const Timer = () => {
  const [time, setTime] = useState(0);
  const [isDisplay, setIsDisplay] = useState(true);

  const toggleTimer = () => {
    setIsDisplay(prev => !prev);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('updatedTime');
      setTime(prev => prev + 1);
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div>
        <div className={styles.timer__wrap}>
          {isDisplay && (
            <>
              <time>{time}</time>
              <span>秒経過</span>
            </>
          )}
        </div>
      <button className={styles.timer__button} onClick={() => setTime(0)}>リセット</button>
      <button className={styles.timer__button} onClick={toggleTimer}>トグル</button>
    </div>
  )
}