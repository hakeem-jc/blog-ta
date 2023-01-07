import { FC, ReactNode } from "react";
import './Modal.css';


interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
    close: () => void;
}

const Modal:FC<ModalProps> = (props) => {

    return (
        <>
            {props.isOpen &&
                <section className="modal">
                    <div className="modal__content">
                        <div className="modal__close-btn-container">
                            <span className="modal__close-btn" onClick={()=>props.close()}>&times;</span>

                        </div>
                        {props.children}
                    </div>
                </section>
            }
        </>
    );
}

export default Modal;