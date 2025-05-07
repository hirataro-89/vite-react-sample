import { useState, useEffect } from "react"
import styles from './Timer.module.css';


export const Timer = () => {
  const [time, setTime] = useState(0); // タイマーの時間
  const [isDisplay, setIsDisplay] = useState(true); // タイマーの表示・非表示
  const [isRunning, setIsRunning] = useState(true); // タイマーの実行・停止

  const toggleTimer = () => {
    setIsDisplay(prev => !prev);
  }

  const resetTimer = () => {
    setTime(0);
  }

  const stopTimer = () => {
    setIsRunning(false);
  }

  const startTimer = () => {
    setIsRunning(true);
  }

  // 時間を分と秒に変換する関数
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}分${remainingSeconds}秒`;
  }

  useEffect(() => {
    let interval: number;
    if (isRunning && isDisplay) {
      interval = window.setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, [isRunning, isDisplay]);

  return (
    <div>
      <div className={styles.timer__wrap}>
        {isDisplay && (
          <>
            <time className={styles.timer__time}>{formatTime(time)}</time>
            <span>経過</span>
          </>
        )}
      </div>
      <div className={styles.timer__buttonWrap}>
        <button className={styles.timer__button} onClick={resetTimer}>リセット</button>
        <button className={styles.timer__button} onClick={toggleTimer}>表示・非表示の切り替え</button>
        {isRunning ? (
          <button className={styles.timer__button} onClick={stopTimer}>ストップ</button>
        ) : (
          <button className={styles.timer__button} onClick={startTimer}>スタート</button>
        )}
      </div>
    </div>
  )
}