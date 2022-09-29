import React from 'react';
import Button from '../../Button/index'
import PageHeading from '../../PageHeading/index'
import FormInput from '../../FormInput/index'
import Modal from 'react-modal';
import { CANCEL_BUTTON, OK_BUTTON } from 'constants/buttonConstants';
import closeIcon from "../../../../assets/icons/close.svg";
import ReactHtmlParser from 'react-html-parser';

import './index.css'

export default ({ type = "confirm", isOpen, onRequestClose, handleSave, title = 'Confirmation', description = "Are you sure you want to delete this ?", saveTitle = 'Save' , body}) =>
	<Modal
		isOpen={isOpen}
		onRequestClose={onRequestClose}
		contentLabel="Modal"
		className={{
			base: 'modal-base',
			afterOpen: 'modal-base_after-open',
			beforeClose: 'modal-base_before-close'
		}}
		overlayClassName={{
			base: 'overlay-base',
			afterOpen: 'overlay-base_after-open',
			beforeClose: 'overlay-base_before-close'
		}}
		shouldCloseOnOverlayClick={true}
		closeTimeoutMS={2000}
	>
		{type == 'confirm' ?
		<span>
			<img src= {closeIcon} alt="" className='crossIcn_confirm' onClick={onRequestClose}/>
			<PageHeading title={title} hideEllipses={true} isSticky={true} backButton={false}/>
		
			<div className="mrgn-16" >{description}</div>
			<span>
			<Button
				onClick={handleSave}
				btnWrapper="btn-align-1"
				pageButton={[OK_BUTTON]}
			/>
			<Button
				onClick={onRequestClose}
				btnWrapper="btn-align-2"
				pageButton={[CANCEL_BUTTON]}
			/>
			</span>
		</span>
			: ReactHtmlParser(body)}

	</Modal>


