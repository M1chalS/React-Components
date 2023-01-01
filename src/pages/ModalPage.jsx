import Modal from "../components/Modal";
import {useState} from "react";
import Button from "../components/Button";

export function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    }

    const modal = <Modal onClose={handleClose} actionBar={<Button onClick={handleClose} primary>I Accept</Button>}>
    <p>Here is an important agreement for you to accept</p>
    </Modal>;

    return (
        <div>
            <Button primary onClick={handleClick}>Open modal</Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPage;