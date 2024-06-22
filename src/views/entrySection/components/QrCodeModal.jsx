import React, { memo } from 'react';
import BaseModal from '@/components/BaseModal';
import PropTypes from 'prop-types';

/**
 * @description: 扫码弹窗
 */
const QrCodeModal = ({ qrCode, showModal, hiddenModal }) => {
	return (
		<BaseModal
			showModal={showModal}
			title={'联系方式'}
			wrapClassName={'first-section-modal'}
			handleCancel={() => {
				hiddenModal();
			}}>
			<div className='first-section-modal'>
				<img className='qr-code' src={require(`@/assets/image/${qrCode}.jpg`)} alt='' />
				<div className='tip'>请备注来源博客，否则不会通过~</div>
			</div>
		</BaseModal>
	);
};

QrCodeModal.propTypes = {
	showModal: PropTypes.bool,
	hiddenModal: PropTypes.func,
	qrCode: PropTypes.string
};

export default memo(QrCodeModal);
