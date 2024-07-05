import React, { memo } from 'react';
import { RegisterContentStyles } from '@/views/LoginRegisterDialog/styles/RegisterContentStyles';
import { Button, Form, Input, Select } from 'antd';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SvgIcon from '@/components/SvgIcon';
import { genderOptions, loginRegisterAnimateEnum, occupationOptions } from '@/constant';
import { register } from '@/api/modules/userService';
import MessageToast from '@/components/MessageToast';

const RegisterContent = ({ setAnimateMode }) => {
	// 提交注册
	const onFinish = async (value) => {
		console.log('value', value);
		await handleRegister(value);
	};

	// 用户注册
	const handleRegister = async (params) => {
		try {
			await register(params);
			MessageToast.success('注册成功');
			setAnimateMode(loginRegisterAnimateEnum.REGISTER_TO_LOGIN);
		} catch (e) {
			console.log('error-handleRegister', e);
		}
	};

	return (
		<RegisterContentStyles>
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
						<Input allowClear maxLenght={20} showCount />
					</Form.Item>
					<Form.Item label='密码：' name='password' rules={[{ required: true, message: '请输入密码' }]}>
						<Input.Password maxLenght={20} showCount />
					</Form.Item>
					<Form.Item label='确认密码：' name='repeat_password' rules={[{ required: true, message: '请输入密码' }]}>
						<Input.Password maxLenght={20} showCount />
					</Form.Item>
					<Form.Item label='性别：' name='gender' rules={[{ required: true, message: '请选择' }]}>
						<Select options={genderOptions} />
					</Form.Item>
					<Form.Item label='职业方向：' name='occupation' rules={[{ required: true, message: '请选择' }]}>
						<Select options={occupationOptions} />
					</Form.Item>
					<Form.Item label='邮箱：' name='email' rules={[{ required: true, message: '请输入邮箱' }]}>
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
							setAnimateMode(loginRegisterAnimateEnum.REGISTER_TO_LOGIN);
						}}>
						前往登录
					</span>
				</div>
			</motion.div>
		</RegisterContentStyles>
	);
};

RegisterContent.propTypes = {
	setAnimateMode: PropTypes.func,
};
export default memo(RegisterContent);
