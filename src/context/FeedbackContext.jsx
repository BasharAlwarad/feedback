import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true,
    })
    // if (window.confirm('Are you sure you wont to delete this Feedback?')) {
    //   setFeedback(pre => pre.filter(e => e.id !== id))
    // }
  }

  // desc    fetch all feedbacks
  // URL     /feedback_v1   GET
  const fetchFeedback = async () => {
    try {
      const res = await fetch('/feedback_v1?_sort=id&_order=desc')
      const data = await res.json()
      setFeedback(data)
      setIsLoading(false)
    } catch (error) {
      console.error(error.message)
    }
  }

  // desc    add new feedbacks
  // URL     /feedback_v1   POST
  const addFeedback = async newFeedback => {
    try {
      const response = await fetch('/feedback_v1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFeedback),
      })
      const data = await response.json()

      setFeedback(pre => [data, ...pre])
    } catch (error) {
      console.error(error.message)
    }
  }

  // desc    update new feedbacks
  // URL     /feedback_v1   PUT
  const updateFeedback = async (id, updItem) => {
    try {
      const response = await fetch(`/feedback_v1/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updItem),
      })
      const data = await response.json()
      setFeedback(pre => pre.map(e => (e.id === id ? { ...e, ...data } : e)))
    } catch (error) {
      console.error(error.message)
    }
  }

  // desc    delete new feedbacks
  // URL     /feedback_v1   DELETE
  const deleteFeedback = async id => {
    if (window.confirm('Are you sure you wont to delete this Feedback?')) {
      try {
        await fetch(`/feedback_v1/${id}`, {
          method: 'DELETE',
        })
        setFeedback(pre => pre.filter(e => e.id !== id))
      } catch (error) {
        console.error(error.message)
      }
    }
  }

  useEffect(() => {
    return () => {
      fetchFeedback()
    }
  }, [])

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
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
