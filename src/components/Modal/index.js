import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import './styles.scss';

const Modal = ({ children, onClose, open }) => {
    const handleOpen = () => {
        return (document.body.style.overflow = 'hidden');
    };

    const handleClose = () => {
        return (document.body.style.overflow = 'unset');
    };

    return (
        <ReactModal
            isOpen={open}
            onRequestClose={onClose}
            shouldCloseOnOverlayClick={true}
            onAfterOpen={handleOpen}
            onAfterClose={handleClose}
            closeTimeoutMS={300}
            ariaHideApp={false}
            style={{
            overlay: {
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                overflowX: 'hidden',
                overflowY: 'hidden',
                zIndex: 100,
            },
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                transform: 'translate(-50%, -50%)',
                padding: 0,
                margin: 0,
                border: 0,
            },
            }}
        >
            <div className='modal' open={open}>
                {children}
            </div>
        </ReactModal>
    )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  onClose: () => {},
};


export default Modal;