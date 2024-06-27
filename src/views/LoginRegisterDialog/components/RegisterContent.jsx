import React, { memo } from 'react';
import { RegisterContentWrapper } from '@/views/LoginRegisterDialog/styles/RegisterContentStyles';
import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SvgIcon from '@/components/SvgIcon';

const RegisterContent = ({ setAnimateMode }) => {
	// 提交注册
	const onFinish = (value) => {
		console.log('value', value);
	};

	return (
		<RegisterContentWrapper>
			<motion.div className='register-box'>
				<div className='title'>
					<img src={require('@/assets/image/logo.jpg')} alt='' />
					<div className='text'>EliaukBlog</div>
				</div>
				<div className='sub-title'>
					<SvgIcon name='expression-1' width={26} height={26}></SvgIcon>欢迎注册~
				</div>
				<Form name='basic' className='input-box' labelCol={{ span: 5 }} labelAlign='right' onFinish={onFinish}>
					<Form.Item label='用户名：' name='username' rules={[{ required: true, message: '请输入用户名' }]}>
						<Input allowClear />
					</Form.Item>
					<Form.Item label='密码：' name='password' rules={[{ required: true, message: '请输入密码' }]}>
						<Input.Password />
					</Form.Item>
					<Form.Item label='确认密码：' name='passwordAgain' rules={[{ required: true, message: '请输入密码' }]}>
						<Input.Password />
					</Form.Item>
					<Form.Item label='邮箱：' name='mail' rules={[{ required: true, message: '请输入邮箱' }]}>
						<Input allowClear />
					</Form.Item>
					<Form.Item>
						<Button type='primary' htmlType='submit'>
							注册
						</Button>
					</Form.Item>
				</Form>
				<div className='tip-text'>
					<span>已有账号？</span>
					<span
						className='text'
						onClick={() => {
							setAnimateMode(2);
						}}>
						前往登录
					</span>
				</div>
			</motion.div>
		</RegisterContentWrapper>
	);
};

RegisterContent.propTypes = {
	setAnimateMode: PropTypes.func
};
export default memo(RegisterContent);
