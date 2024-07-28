import React, { memo, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useLoginRegisterDialogAnimation } from '@/hooks/animation/useLoginRegisterDialogAnimation';
import LoginContent from '@/views/common/LoginRegisterDialog/components/LoginContent';
import RegisterContent from '@/views/common/LoginRegisterDialog/components/RegisterContent';
import { LoginRegisterDialogStyles } from '@/views/common/LoginRegisterDialog/styles';
import Dialog from '@/components/DialogAnimation';
import { loginRegisterAnimateEnum } from '@/constant';

/**
 * @description: 登录、注册弹窗
 */
const LoginRegisterDialog = ({ showDialog, closeDialog, mode }) => {
	const [animateMode, setAnimateMode] = useState(null); // 1-打开登录；2-注册转登录；3-打开注册；3-登录转注册
	const scope = useLoginRegisterDialogAnimation(animateMode); // 弹窗的动画（内容的宽度高度在动画中设置）
	// 返回值：true-显示登录、false-显示注册
	const showLoginFlag = useMemo(() => {
		return [loginRegisterAnimateEnum.OPEN_LOGIN, loginRegisterAnimateEnum.REGISTER_TO_LOGIN].includes(animateMode);
	}, [animateMode]);

	// 父组件传过来的mode值(1或3)，即animateMode的值
	useEffect(() => {
		setAnimateMode(mode);
	}, [mode]);

	return (
		<LoginRegisterDialogStyles>
			<Dialog
				showDialog={showDialog}
				closeDialog={closeDialog}
				scope={scope}
				style={{ clipPath: 'inset(30% 50% 70% 50% round 10px)' }}>
				{/* 登录时显示的内容 */}
				{showLoginFlag && <LoginContent setAnimateMode={setAnimateMode} closeDialog={closeDialog}></LoginContent>}
				{/* 注册时显示的内容 */}
				{!showLoginFlag && <RegisterContent setAnimateMode={setAnimateMode}></RegisterContent>}
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
