import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'

import FeedbackData from './data/FeedbackData'

function App() {
  const [text, setText] = useState()
  const [style, setStyle] = useState()
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = id => {
    if (window.confirm('Are you sure you wont to delete this Feedback?')) {
      setFeedback(pre => pre.filter(e => e.id !== id))
    }
  }

  return (
    <div>
      <Header text={text && text} style={style && style} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handelDelete={deleteFeedback} />
    </div>
  )
}

export default App
