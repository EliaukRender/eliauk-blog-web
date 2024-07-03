import React, { memo, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLoginDialogAnimation } from '@/hooks/animation/useLoginDialogAnimation';
import LoginContent from '@/views/LoginRegisterDialog/components/LoginContent';
import RegisterContent from '@/views/LoginRegisterDialog/components/RegisterContent';
import { LoginRegisterDialogStyles } from '@/views/LoginRegisterDialog/styles';
import Dialog from '@/components/DialogAnimation';

/**
 * @description: 登录、注册弹窗
 */
const LoginRegisterDialog = ({ showDialog, closeDialog, mode }) => {
	const [animateMode, setAnimateMode] = useState(null); // 1-打开登录；2-注册转登录；3-打开注册；3-登录转注册

	// 父组件传过来的mode值(1或3)，即animateMode的值
	useEffect(() => {
		setAnimateMode(mode);
	}, [mode]);

	// 返回值：true-显示登录、false-显示注册
	const showLoginFlag = useCallback(() => {
		return [1, 2].includes(animateMode);
	}, [animateMode]);

	const scope = useLoginDialogAnimation(animateMode); // 弹窗的动画（内容的宽度高度在动画中设置）

	return (
		<LoginRegisterDialogStyles>
			<Dialog showDialog={showDialog} closeDialog={closeDialog} scope={scope} style={{ clipPath: 'inset(30% 50% 70% 50% round 10px)' }}>
				{/* 登录时显示的内容 */}
				{showLoginFlag() && <LoginContent setAnimateMode={setAnimateMode}></LoginContent>}
				{/* 注册时显示的内容 */}
				{!showLoginFlag() && <RegisterContent setAnimateMode={setAnimateMode}></RegisterContent>}
			</Dialog>
		</LoginRegisterDialogStyles>
	);
};

LoginRegisterDialog.propTypes = {
	closeDialog: PropTypes.func,
	showDialog: PropTypes.bool,
	mode: PropTypes.number,
};

export default memo(LoginRegisterDialog);
