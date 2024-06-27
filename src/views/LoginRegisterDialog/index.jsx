import React, {memo, useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {CloseOutlined} from '@ant-design/icons';
import {useLoginDialogAnimation} from '@/hooks/useLoginDialogAnimation';
import {motion} from 'framer-motion';
import MaskLayer from '@/components/MaskLayer';
import classNames from 'classnames';
import LoginContent from '@/views/LoginRegisterDialog/components/LoginContent';
import RegisterContent from '@/views/LoginRegisterDialog/components/RegisterContent';
import {LoginRegisterDialogWrapper} from '@/views/LoginRegisterDialog/LoginRegisterDialogStyles';

/**
 * @description: 登录弹窗
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

	const scope = useLoginDialogAnimation(animateMode); // 弹窗的动画

	return (
		<LoginRegisterDialogWrapper>
			<MaskLayer showMask={showDialog}>
				<div ref={scope}>
					<motion.ul
						className={classNames('container', !showLoginFlag() ? 'container-register' : '')}
						style={{
							clipPath: 'inset(30% 50% 70% 50% round 10px)'
						}}>
						{/*  关闭按钮 */}
						<div
							className='close'
							onClick={() => {
								closeDialog();
							}}>
							<CloseOutlined />
						</div>
						{/* 登录时显示的内容 */}
						{showLoginFlag() && <LoginContent setAnimateMode={setAnimateMode}></LoginContent>}
						{/* 注册时显示的内容 */}
						{!showLoginFlag() && <RegisterContent setAnimateMode={setAnimateMode}></RegisterContent>}
					</motion.ul>
				</div>
			</MaskLayer>
		</LoginRegisterDialogWrapper>
	);
};

LoginRegisterDialog.propTypes = {
	closeDialog: PropTypes.func,
	showDialog: PropTypes.bool,
	mode: PropTypes.number
};

export default memo(LoginRegisterDialog);
