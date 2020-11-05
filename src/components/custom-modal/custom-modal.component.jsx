import React from 'react';

import './custom-modal.styles.scss';

const CustomModal = ({children, toggle}) => {

    const handleClick = () => {
        toggle();
    }

    return (
        <div className="modal">
            <div className="modal_content">
                <span className="close" onClick={handleClick} >&#10006;</span>
                {children}
            </div>
        </div>
    );
}

export default CustomModal;
