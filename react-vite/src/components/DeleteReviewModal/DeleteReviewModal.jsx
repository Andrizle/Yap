import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { thunkDeleteReview } from '../../redux/reviews';
import { thunkFetchBusinesses } from '../../redux/business';


function DeleteReviewModal({review}) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleClick = async (e) => {
    e.preventDefault();

    await dispatch(thunkDeleteReview(review))
    .then(dispatch(thunkFetchBusinesses()))
    .then(closeModal);
  };

  return (
    <div id='deleteModal'>
      <h1 id='deleteHeader'>Confirm Delete</h1>
      <div className='deleteModalContent'>
        <p id='deleteConfirmText'>Are you sure you want to delete this review?</p>
        <button className='bigButton' id='deleteButton'
        onClick={handleClick}
        >Yes (Delete Review)</button>
        <button
        className='bigButton' id='dontDeleteButton'
        onClick={closeModal}
        >No (Keep Review)</button>
      </div>

    </div>
  );
}

export default DeleteReviewModal;
