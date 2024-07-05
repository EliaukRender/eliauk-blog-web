import React, { forwardRef, memo, useState } from 'react';
import { UserLoginRegisterStyles } from '@/views/home/css/UserLoginRegisterStyles';
import { MenuOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useLoginOptionsAnimation } from '@/hooks/animation/useLoginOptionsAnimation.js';
import LoginRegisterDialog from '@/views/LoginRegisterDialog';
import SvgIcon from '@/components/SvgIcon';
import { shallowEqual, useSelector } from 'react-redux';
import { loginRegisterAnimateEnum } from '@/constant';

/**
 * @description: 用户登录、注册的入口
 */
const UserLoginRegister = () => {
	const [isOpen, setIsOpen] = useState(false); // popover显示隐藏
	const [showDialog, setShowDialog] = useState(false); // 显示隐藏登录注册弹窗
	const [mode, setMode] = useState(null); // 1-打开登录；3-打开注册
	const scope = useLoginOptionsAnimation(isOpen); // 动画

	const { token } = useSelector(
		(state) => ({
			token: state.user.token,
		}),
		shallowEqual,
	);

	// 点击空白位置关闭浮窗
	window.addEventListener('click', () => {
		setIsOpen(false);
	});

	// 打开弹窗
	const openLoginRegisterDialog = (modeValue) => {
		setMode(modeValue);
		setShowDialog(true);
		setIsOpen(false);
	};

	// 关闭弹窗
	const closeDialog = () => {
		setShowDialog(false);
	};

	return (
		<UserLoginRegisterStyles>
			{/* 用户头像 */}
			<motion.div
				className='login-box'
				whileTap={{ scale: 0.8 }}
				onClick={(event) => {
					setIsOpen(!isOpen);
					event.stopPropagation(); // 阻止冒泡到全局监听的点击事件中
				}}>
				<SvgIcon name={token ? 'expression-2' : 'expression-4'}></SvgIcon>
				<MenuOutlined></MenuOutlined>
			</motion.div>
			{/* 登录注册选项的浮窗 */}
			<div ref={scope}>
				<motion.ul
					className='popover'
					style={{
						clipPath: 'inset(10% 50% 90% 50% round 10px)',
					}}>
					<div
						className='item'
						onClick={() => {
							openLoginRegisterDialog(loginRegisterAnimateEnum.OPEN_LOGIN);
						}}>
						登录
					</div>
					<div
						className='item'
						onClick={() => {
							openLoginRegisterDialog(loginRegisterAnimateEnum.OPEN_REGISTER);
						}}>
						注册
					</div>
				</motion.ul>
			</div>
			{/* 登录注册弹窗 */}
			{showDialog && <LoginRegisterDialog closeDialog={closeDialog} showDialog={showDialog} mode={mode}></LoginRegisterDialog>}
		</UserLoginRegisterStyles>
	);
};

export default memo(forwardRef(UserLoginRegister));
