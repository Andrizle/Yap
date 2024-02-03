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
        <p id='deleteConfirmText'>Are you sure you want to remove your business?</p>
        <button className='bigButton' id='deleteButton'
        onClick={handleClick}
        >Yes (Remove Business)</button>
        <button
        className='bigButton' id='dontDeleteButton'
        onClick={closeModal}
        >No (Keep Business)</button>
      </div>
    </div>
  );
}

export default RemoveBusinessModal;
