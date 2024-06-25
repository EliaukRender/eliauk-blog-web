import React, { memo, useCallback, useState } from 'react';
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
// import MoveAnimation from '@/components/Animation/moveAnimation';
import PropTypes from 'prop-types';
import QrCodeModal from '@/views/entrySection/components/QrCodeModal';
import { InfoBarWrapper } from '@/views/entrySection/css/InfoBarWrapper';
import { motion } from 'framer-motion';

/**
 * @description: 主页联系方式
 */
const InfoBar = () => {
	const [qrCode, setQrCode] = useState('weChat');
	const [showModal, setShowModal] = useState(false);

	// 隐藏弹窗
	const hiddenModal = useCallback(() => {
		setShowModal(false);
	}, []);

	// 打开弹窗
	const showDialog = useCallback((qrCodeValue) => {
		setQrCode(qrCodeValue);
		setShowModal(true);
	}, []);

	// 打开github
	const goToGitHub = useCallback(() => {
		window.open('https://github.com/yang0007221123', '_blank');
	}, []);

	return (
		<InfoBarWrapper>
			{/*<MoveAnimation start={'35px'} duration={'1.8s'}>*/}
			<motion.div className='personal-info' initial={{ y: '25px' }} animate={{ y: '0px', transition: { duration: 1, ease: 'linear' } }}>
				<span className='name'>EliaukRender</span>
				<div className='divider'></div>
				<GithubOutlined
					onClick={() => {
						goToGitHub();
					}}
				/>
				<WechatOutlined
					onClick={() => {
						showDialog('weChat');
					}}
				/>
				<QqOutlined
					onClick={() => {
						showDialog('qq');
					}}
				/>
			</motion.div>
			{/*</MoveAnimation>*/}
			{/* 扫码弹窗	*/}
			<QrCodeModal qrCode={qrCode} showModal={showModal} hiddenModal={hiddenModal}></QrCodeModal>
		</InfoBarWrapper>
	);
};

InfoBar.propTypes = {
	goToGitHub: PropTypes.func,
	showDialog: PropTypes.func
};
export default memo(InfoBar);
