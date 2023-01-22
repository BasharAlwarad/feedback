import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback, handelDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>Np Feedback Yet.</p>
  }

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map(item => (
  //       <FeedbackItem handelDelete={handelDelete} key={item.id} item={item} />
  //     ))}
  //   </div>
  // )

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              handelDelete={handelDelete}
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
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
