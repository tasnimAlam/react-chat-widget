import React, { useState } from "react";
import Popup from "reactjs-popup";

const Modal = ({ data, isOpen, toggleModal }) => {
	return (
		<div className="rcw-modal-wrapper">
			<Popup className="rcw-modal-popup" modal open={isOpen}>
				<div>
					<button
						className="rcw-close-btn"
						onClick={() => toggleModal(false)}
					></button>
					<div dangerouslySetInnerHTML={{ __html: data }}></div>
				</div>
			</Popup>
		</div>
	);
};

export default Modal;
