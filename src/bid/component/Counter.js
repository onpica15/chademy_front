import React, { useState } from 'react'
import Countdown, {
  zeroPad,
  calcTimeDelta,
  formatTimeDelta,
} from 'react-countdown'
import '../styles/counter.scss'
const Counter = (props) => {
  const { enddate, total } = props
  const Completionist = () => <span>Sold Out!</span>
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />
    } else {
      // Render a countdown
      return (
        <span className="g-smalltime">
          倒數時間：
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      )
    }
  }

  return (
    <>
      {total ? (
        <Countdown
          date={new Date(enddate).getTime()}
          renderer={renderer}
        ></Countdown>
      ) : (
        ''
      )}
    </>
  )
}

export default Counter
