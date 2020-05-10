import React, { useState, useEffect } from 'react'

export default function FunctionComPage (props) {
  const [date, setDate] = useState(new Date())
  // componentDidMount componentDidUpdate componentWillUnmount
  useEffect(() => {
    console.log('useEffect')
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000)
    // 组件卸载执行
    return () => clearInterval(timer)
  }, [])
  console.log('return')
  return (
    <div>
      <h3>FunctionComPage</h3>
      <div>{date.toLocaleTimeString()}</div>
    </div>
  )
}
