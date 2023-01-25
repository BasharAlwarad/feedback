import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const deleteFeedback = id => {
    if (window.confirm('Are you sure you wont to delete this Feedback?')) {
      setFeedback(pre => pre.filter(e => e.id !== id))
    }
  }

  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true,
    })
    // if (window.confirm('Are you sure you wont to delete this Feedback?')) {
    //   setFeedback(pre => pre.filter(e => e.id !== id))
    // }
  }
  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4()
    setFeedback(pre => [newFeedback, ...pre])
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(pre => pre.map(e => (e.id === id ? { ...e, ...updItem } : e)))
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
