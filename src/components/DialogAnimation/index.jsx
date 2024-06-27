import React, { memo } from 'react';
import { DialogStyles } from '@/components/DialogAnimation/styles';
import MaskLayer from '@/components/MaskLayer';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { CloseOutlined } from '@ant-design/icons';

/**
 * @description: 对话框组件：支持自定义对话框内容的动画
 */
const Dialog = ({ showDialog, showCloseBtn = true, scope, style, closeDialog, children }) => {
	return (
		<DialogStyles>
			<MaskLayer showMask={showDialog}>
				<div ref={scope}>
					{/*  对话框主体区域--开始 */}
					<motion.ul className='body' style={style}>
						{/*  关闭按钮 */}
						{showCloseBtn && (
							<div
								className='close'
								onClick={() => {
									closeDialog();
								}}>
								<CloseOutlined />
							</div>
						)}
						{/*	对话框的自定义内容 */}
						{children}
					</motion.ul>
					{/*  对话框主体区域--结束 */}
				</div>
			</MaskLayer>
		</DialogStyles>
	);
};

Dialog.propTypes = {
	showDialog: PropTypes.bool, // 显示隐藏对话框
	showCloseBtn: PropTypes.bool, // 显示隐藏关闭按钮
	scope: PropTypes.any, // 动画对象
	style: PropTypes.object, // css样式
	closeDialog: PropTypes.func, // 关闭对话框
	children: PropTypes.node // 自定义内容
};

export default memo(Dialog);
