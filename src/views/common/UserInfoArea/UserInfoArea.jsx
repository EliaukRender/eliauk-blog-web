import React, { forwardRef, Fragment, memo, useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useLoginOptionsAnimation } from '@/hooks/animation/useLoginOptionsAnimation.js';
import LoginRegisterDialog from '@/views/common/LoginRegisterDialog';
import SvgIcon from '@/components/SvgIcon';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loginRegisterAnimateEnum } from '@/constant';
import { setToken } from '@/store/modules/userReducer';
import MessageToast from '@/components/MessageToast';
import { UserInfoAreaStyles } from '@/views/common/UserInfoArea/UserInfoAreaStyles';

/**
 * @description: 用户登录、注册的入口
 */
const UserInfoArea = () => {
	const [isOpen, setIsOpen] = useState(false); // popover显示隐藏
	const [showDialog, setShowDialog] = useState(false); // 显示隐藏登录注册弹窗
	const [mode, setMode] = useState(null); // 1-打开登录；3-打开注册
	const scope = useLoginOptionsAnimation(isOpen); // 动画
	const dispatch = useDispatch();

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

	// 退出登录
	const loginOut = () => {
		dispatch(setToken(''));
		MessageToast.success('退出登录');
	};

	return (
		<UserInfoAreaStyles>
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
						boxShadow: '	0 2px 10px rgba(0, 0, 0, 0.1), 0 4px 20px rgba(0, 0, 0, 0.15)',
					}}>
					{!token && (
						<Fragment>
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
						</Fragment>
					)}
					{token && (
						<div className='item' onClick={loginOut}>
							退出登录
						</div>
					)}
				</motion.ul>
			</div>
			{/* 登录注册弹窗 */}
			{showDialog && (
				<LoginRegisterDialog closeDialog={closeDialog} showDialog={showDialog} mode={mode}></LoginRegisterDialog>
			)}
		</UserInfoAreaStyles>
	);
};

export default memo(forwardRef(UserInfoArea));
