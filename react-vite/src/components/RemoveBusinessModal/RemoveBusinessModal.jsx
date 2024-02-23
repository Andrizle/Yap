import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { thunkDeleteBusiness } from '../../redux/business';

function RemoveBusinessModal({businessId}) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(thunkDeleteBusiness(businessId))
    closeModal()
  };

  return (
    <div id='deleteModal'>
      <h1 id='deleteHeader'>Confirm Delete</h1>
      <div className='deleteModalContent'>
        <p id='deleteConfirmText'>Are you sure you want to delete this business?</p>
        <div className='deleteModalButtonsContainer'>
          <button
          className='modalBtn' id='dontDeleteButton'
          onClick={closeModal}
          >Keep Business</button>
          <button className='modalBtn redBtn' id='deleteButton'
          onClick={handleClick}
          >Remove Business</button>
        </div>
      </div>
    </div>
  );
}

export default RemoveBusinessModal;
