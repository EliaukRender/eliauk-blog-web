import React, { forwardRef, memo, useState } from 'react';
import { LoginRegisterWrapper } from '@/views/home/css/LoginRegisterStyles';
import { MenuOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useLoginOptionsAnimation } from '@/hooks/useLoginOptionsAnimation.js';
import LoginDialog from '@/views/LoginRegisterDialog/LoginDialog.jsx';

/**
 * @description: 用户登录注册的入口
 */
const UserLoginRegister = () => {
	const [isOpen, setIsOpen] = useState(false); // popover显示隐藏
	const scope = useLoginOptionsAnimation(isOpen); // 动画
	const [showDialog, setShowModal] = useState(false); // 显示隐藏登录弹窗

	// 点击空白位置关闭浮窗
	window.addEventListener('click', () => {
		setIsOpen(false);
	});

	// 打开弹窗
	const openLoginBox = () => {
		setShowModal(true);
		setIsOpen(false);
	};

	// 关闭弹窗
	const closeDialog = () => {
		setShowModal(false);
	};

	return (
		<LoginRegisterWrapper>
			{/* 用户头像 */}
			<motion.div
				className='login-box'
				whileTap={{ scale: 0.8 }}
				onClick={(event) => {
					setIsOpen(!isOpen);
					event.stopPropagation(); // 阻止冒泡到全局监听的点击事件中
				}}>
				<img src={require('@/assets/image/duola.png')} alt='' />
				<MenuOutlined></MenuOutlined>
			</motion.div>
			{/* 登录注册选项的浮窗 */}
			<div ref={scope}>
				<motion.ul
					className='popover'
					style={{
						clipPath: 'inset(10% 50% 90% 50% round 10px)'
					}}>
					<div
						className='item'
						onClick={() => {
							openLoginBox();
						}}>
						登录
					</div>
					<div
						className='item'
						onClick={() => {
							openLoginBox();
						}}>
						注册
					</div>
				</motion.ul>
			</div>
			{/* 登录注册弹窗 */}
			{showDialog && <LoginDialog closeDialog={closeDialog} showModal={showDialog}></LoginDialog>}
		</LoginRegisterWrapper>
	);
};

export default memo(forwardRef(UserLoginRegister));
