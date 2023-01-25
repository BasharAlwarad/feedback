import React, { useState, useContext, useEffect } from 'react'

import FeedbackContext from '../context/FeedbackContext'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext)

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)

  const handelSubmit = e => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }

      if (feedbackEdit?.edit === true) {
        updateFeedback(feedbackEdit?.item?.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }

      setText('')
      setBtnDisabled(true)
      setRating(10)
    }
  }

  const handelChange = e => {
    if (text === '') {
      setMessage(null)
      setBtnDisabled(true)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters.')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  useEffect(() => {
    if (feedbackEdit?.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit?.item?.text)
      setRating(feedbackEdit?.item?.rating)
    }
    return
  }, [feedbackEdit])

  return (
    <Card>
      <form onSubmit={handelSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className='input-group'>
          <input
            onChange={handelChange}
            type='text'
            placeholder='Write a review!'
            value={text}
          />
          <Button type={'submit'} isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'> {message} </div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
