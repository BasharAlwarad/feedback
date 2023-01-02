import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'

const FeedbackItem = ({ item, handelDelete }) => {
  return (
    <Card>
      <div className='num-display'>{item?.rating} </div>
      <button className='close' onClick={() => handelDelete(item.id)}>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item?.text} </div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
