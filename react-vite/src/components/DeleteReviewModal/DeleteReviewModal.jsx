import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { thunkDeleteReview, thunkFetchMyReviews } from '../../redux/reviews';
import { thunkFetchBusinesses } from '../../redux/business';


function DeleteReviewModal({review}) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleClick = async (e) => {
    e.preventDefault();

    await dispatch(thunkDeleteReview(review))
    .then(dispatch(thunkFetchBusinesses()))
    .then(dispatch(thunkFetchMyReviews()))
    .then(closeModal);
  };

  return (
    <div id='deleteModal'>
      <h1 id='deleteHeader'>Confirm Delete</h1>
      <div className='deleteModalContent'>
        <p id='deleteConfirmText'>Are you sure you want to delete this review?</p>
        <div className='deleteModalButtonsContainer'>
          <button
          className='modalBtn' id='dontDeleteButton'
          onClick={closeModal}
          >Keep Review</button>
          <button className='modalBtn redBtn' id='deleteButton'
          onClick={handleClick}
          >Remove Review</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteReviewModal;
