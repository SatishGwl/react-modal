import {useState} from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal'
function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    function deleteHandler(){
        setModalIsOpen(true);
    }

    function closeModalHandler () {
        setModalIsOpen(false);
    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <span>{props.text}</span>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler}/>}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
            {/* <Modal/>
            <Backdrop/> */}
        </div>

    )
}
export default Todo;