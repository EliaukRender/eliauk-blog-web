import React, { Fragment, memo, useState } from 'react';
import { LoginDialogWrapper } from '@/views/LoginRegisterDialog/LoginDialogStyles';
import PropTypes from 'prop-types';
import { CloseOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input, Form } from 'antd';
import { useLoginDialogAnimation } from '@/hooks/useLoginDialogAnimation';
import { motion } from 'framer-motion';
import MaskLayer from '@/components/MaskLayer';
import classNames from 'classnames';

/**
 * @description: 登录弹窗
 */
const LoginDialog = ({ showModal, closeDialog }) => {
	const [flag, setFlag] = useState(true); // true-登录； false-注册
	const scope = useLoginDialogAnimation(flag); // 弹窗的动画

	return (
		<LoginDialogWrapper>
			<MaskLayer showMask={showModal}>
				<div ref={scope}>
					<motion.ul
						className={classNames('container', !flag ? 'container-register' : '')}
						style={{
							top: '45%',
							clipPath: 'inset(30% 50% 70% 50% round 10px)'
						}}>
						{/*  关闭按钮 */}
						<div
							className='close'
							onClick={() => {
								console.log('关闭');
								closeDialog();
							}}>
							<CloseOutlined />
						</div>
						{/* 登录时显示的内容 */}
						{flag && (
							<Fragment>
								<div className='left'>
									<img src={require('@/assets/image/login/login-bg.png')} alt='' />
								</div>
								<div className='right'>
									<div className='blog'>EliaukBlog</div>
									<div className='wel'>欢迎回来~</div>
									<div className='box'>
										<Input placeholder='请输入用户名' allowClear prefix={<UserOutlined />} />
										<Input.Password placeholder='请输入密码' prefix={<LockOutlined />} />
									</div>
									<Button type='primary'>登 录</Button>
									<div className='tip'>
										<span>暂无账号？</span>
										<span
											className='register'
											onClick={() => {
												setFlag(false);
											}}>
											前往注册
										</span>
									</div>
								</div>
							</Fragment>
						)}
						{/* 注册时显示的内容 */}
						{!flag && (
							<Fragment>
								<div className='register-box'>
									<div className='blog'>EliaukBlog</div>
									<div className='wel'>开始注册</div>
									<div className='box'>
										<Form
											name='basic'
											labelCol={{ span: 4 }}
											wrapperCol={{ span: 20 }}
											style={{ maxWidth: 600 }}
											initialValues={{ remember: true }}
											autoComplete='off'>
											<Form.Item label='用户名' name='username'>
												<Input />
											</Form.Item>
											<Form.Item label='密码' name='password'>
												<Input.Password />
											</Form.Item>
											<Form.Item label='确认密码' name='password'>
												<Input.Password />
											</Form.Item>
											<Form.Item label='邮箱' name='password'>
												<Input />
											</Form.Item>
										</Form>
									</div>
									<div className='btn'>
										<Button type='primary'>注册</Button>
									</div>
								</div>
							</Fragment>
						)}
					</motion.ul>
				</div>
			</MaskLayer>
		</LoginDialogWrapper>
	);
};

LoginDialog.propTypes = {
	closeDialog: PropTypes.func,
	showModal: PropTypes.bool
};

export default memo(LoginDialog);
