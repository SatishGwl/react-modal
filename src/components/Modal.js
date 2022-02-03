function Modal (props) {
    function onCancelHandler () {
        props.onCancel()
    }
    function onConfrimHandler() {
        props.onConfirm()

    }
    return(
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={onCancelHandler}>Cancel</button>
            <button className="btn" onClick={onConfrimHandler}>Confirm</button>
        </div>
    );
}
export default Modal