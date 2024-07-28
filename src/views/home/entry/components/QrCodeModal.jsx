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
			width={400}
			title={qrCode === 'weChat' ? '微信公众号' : 'QQ群'}
			wrapClassName={'qr-code-modal'}
			handleCancel={() => {
				hiddenModal();
			}}>
			<div>
				<img className='qr-code' src={require(`@/assets/image/${qrCode}.jpg`)} alt='' />
			</div>
		</BaseModal>
	);
};

QrCodeModal.propTypes = {
	showModal: PropTypes.bool,
	hiddenModal: PropTypes.func,
	qrCode: PropTypes.string,
};

export default memo(QrCodeModal);
