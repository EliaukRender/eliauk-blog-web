import React, { Fragment, memo, useEffect, useState } from 'react';
import { AddSheetStyles } from '@/views/eliaukMusic/components/AddSheet/AddSheetStyles';
import { Button, Input, Popover } from 'antd';
import { addSheetIconList } from '@/views/eliaukMusic/constant';
import classNames from 'classnames';
import MessageToast from '@/components/MessageToast';
import { handleCreateSheet } from '@/views/eliaukMusic/store/actions/musicAppAction';

/**
 * @description: 新增歌单
 */
const AddSheet = () => {
	const [open, setOpen] = useState(false);
	const [curIconName, setCurIconName] = useState('');
	const [inputValue, setInputValue] = useState('');

	const handleOpenChange = (newOpen) => {
		setOpen(newOpen);
	};

	const onChange = (e) => {
		setInputValue(e.target.value.trim());
	};

	const cancel = () => {
		setOpen(false);
	};

	// 创建歌单
	const confirm = async () => {
		if (!inputValue) {
			MessageToast.warning('请输入歌单名');
			return;
		}
		if (!curIconName) {
			MessageToast.warning('请选择歌单图标');
			return;
		}
		const res = await handleCreateSheet({ sheetName: inputValue, sheetIcon: curIconName });
		res && setOpen(false);
	};

	useEffect(() => {
		setInputValue('');
	}, [open]);

	return (
		<AddSheetStyles>
			<Popover
				overlayClassName='add-sheet-popover'
				content={
					<Fragment>
						<div className='name'>
							<div className='text'>歌单名：</div>
							<Input
								value={inputValue}
								onChange={onChange}
								rootClassName={'input-sheet-name'}
								showCount
								maxlength={8}></Input>
						</div>
						<div className='list'>
							{addSheetIconList.map((item) => {
								return (
									<i
										className={classNames('iconfont', item, item === curIconName ? 'selected' : '')}
										onClick={() => {
											setCurIconName(item);
										}}></i>
								);
							})}
						</div>
						<div className='btns'>
							<Button onClick={cancel}>取消</Button>
							<Button onClick={confirm} type='primary'>
								创建
							</Button>
						</div>
					</Fragment>
				}
				placement='right'
				trigger='click'
				open={open}
				onOpenChange={handleOpenChange}>
				<i className='iconfont icon-jia'></i>
			</Popover>
		</AddSheetStyles>
	);
};

export default memo(AddSheet);
