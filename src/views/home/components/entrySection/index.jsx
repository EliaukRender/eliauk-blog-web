import React, { Fragment, memo, useCallback, useState } from 'react';
import { FirstSectionWrapper } from '@/views/home/components/entrySection/styles';
import { GithubOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons';
import BaseModal from 'src/components/BaseModal';
import MoveAnimation from '@/components/Animation/moveAnimation';
import PropTypes from 'prop-types';

/**
 * @description: 个人信息
 */
const FirstSection = () => {
	const [showModal, setShowModal] = useState(false);
	const [qrCode, setQrCode] = useState('weChat');

	// 打开github
	const goToGitHub = useCallback(() => {
		window.open('https://github.com/yang0007221123', '_blank');
	}, []);

	// 打开联系方式弹窗
	const showDialog = useCallback((qrCodeValue) => {
		setQrCode(qrCodeValue);
		setShowModal(true);
	}, []);

	// 隐藏弹窗
	const hiddenModal = useCallback(() => {
		setShowModal(false);
	}, []);

	return (
		<FirstSectionWrapper>
			<MainSection showDialog={showDialog} goToGitHub={goToGitHub}></MainSection>
			{/* 弹窗 */}
			<ModalContact showModal={showModal} qrCode={qrCode} hiddenModal={hiddenModal}></ModalContact>
		</FirstSectionWrapper>
	);
};

export default memo(FirstSection);

/**
 * @description: 个人信息的主要部分
 */
const MainSection = memo(({ goToGitHub, showDialog }) => {
	return (
		<Fragment>
			{/* 主页头像 */}
			<MoveAnimation>
				<div className='img-box'>
					<img className='person-pic' src={require('@/assets/image/personal-pic.jpg')} alt='' />
				</div>
			</MoveAnimation>
			{/* 联系方式 */}
			<MoveAnimation start={'40px'} duration={'2s'}>
				<div className='personal-info'>
					<span>EliaukRender</span>
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
				</div>
			</MoveAnimation>
		</Fragment>
	);
});
MainSection.displayName = 'FirstMain';
MainSection.propTypes = {
	goToGitHub: PropTypes.func,
	showDialog: PropTypes.func
};

/**
 * @description: 扫码弹窗
 */
const ModalContact = memo(({ showModal, hiddenModal, qrCode }) => {
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
});
ModalContact.displayName = 'ModalContact';
ModalContact.propTypes = {
	showModal: PropTypes.bool,
	hiddenModal: PropTypes.func,
	qrCode: PropTypes.string
};
