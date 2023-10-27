
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {deleteUser} from '../services/UserService'
import { toast } from 'react-toastify';



const ModalConfirm = (props) => {
    const { show, handleClose, dataUserDelete , handleDeleteUserFromModal} = props;
   
    const confirmDelete = async()=>{
        let res = await deleteUser(dataUserDelete.id);
        if(res && +res.statusCode === 204){
            toast.success("Xóa thành công!")
            handleClose();
            handleDeleteUserFromModal(dataUserDelete);
        }
        else{
            toast.error("Xóa không thành công!")
        }
        console.log(">>>check", res)
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        Bạn chắc chắn muốn xóa!!
                        <b>Email = {dataUserDelete.email}</b>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => confirmDelete()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalConfirm;