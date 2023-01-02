import PropTypes from 'prop-types'
import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback, handelDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>Np Feedback Yet.</p>
  }

  return (
    <div className='feedback-list'>
      {feedback.map(item => (
        <FeedbackItem handelDelete={handelDelete} key={item.id} item={item} />
      ))}
    </div>
  )
}

FeedbackList.prototypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackList
