import React, { forwardRef, memo, useState } from 'react';
import { LoginRegisterWrapper } from '@/views/home/css/LoginRegisterStyles';
import { MenuOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useLoginBoxAnimation } from '@/hooks/useLoginBoxAnimation.js';

const LoginRegister = () => {
	const [isOpen, setIsOpen] = useState(false); // popover显示隐藏
	const scope = useLoginBoxAnimation(isOpen); // 动画

	window.addEventListener('click', () => {
		setIsOpen(false); // 关闭popover
	});

	return (
		<LoginRegisterWrapper>
			<motion.div
				className='login-box'
				whileTap={{ scale: 0.8 }}
				onClick={(event) => {
					event.stopPropagation(); // 阻止冒泡
					setIsOpen(!isOpen);
				}}
				ref={scope}>
				<img src={require('@/assets/image/duola.png')} alt='' />
				<MenuOutlined></MenuOutlined>
				<motion.ul
					className='popover'
					style={{
						clipPath: 'inset(10% 50% 90% 50% round 10px)'
					}}>
					<li className='item'>注册</li>
					<li className='item'>登录</li>
				</motion.ul>
			</motion.div>
		</LoginRegisterWrapper>
	);
};

export default memo(forwardRef(LoginRegister));
