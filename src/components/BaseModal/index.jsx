import React, {memo} from 'react';
import {Modal} from 'antd';
import './styles.css';
import PropTypes from 'prop-types';

/**
 * @description: 二次封装Modal
 */
const BaseModal = memo((props) => {
	const {
		showModal = false, // Modal的显示与隐藏
		title = '', // 标题
		width = 400, // 自定义宽度
		okText = '确定', // 确定按钮文本
		cancelText = '取消', // 取消按钮文本
		closeIcon = true, // 默认显示右上角关闭按钮
		footer = '', // 不显示底部按钮区域时，设置footer = null
		handleConfirm = () => {}, // 确定事件
		handleCancel = () => {}, // 取消事件
		wrapClassName = 'my-modal', //为对话框设置类名，用来修改modal样式
		children // body中的自定义内容
	} = props;

	return (
		<Modal
			title={title}
			width={width}
			centered={true}
			closeIcon={closeIcon}
			footer={footer}
			open={showModal}
			onOk={() => {
				handleConfirm();
			}}
			onCancel={() => {
				handleCancel();
			}}
			okText={okText}
			cancelText={cancelText}
			wrapClassName={wrapClassName}>
			{children}
		</Modal>
	);
});

BaseModal.propTypes = {
	showModal: PropTypes.bool,
	title: PropTypes.string,
	width: PropTypes.number,
	okText: PropTypes.string,
	cancelText: PropTypes.string,
	closeIcon: PropTypes.bool,
	footer: PropTypes.string,
	handleConfirm: PropTypes.func,
	handleCancel: PropTypes.func,
	wrapClassName: PropTypes.string,
	children: PropTypes.node
};

BaseModal.displayName = 'BaseModal';

export default memo(BaseModal);
