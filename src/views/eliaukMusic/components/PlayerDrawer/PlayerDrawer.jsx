import React, { memo } from 'react';
import { Drawer } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setDrawerVisible } from '@/views/eliaukMusic/store/modules/musicAppReducer';
import { PlayerDrawerStyles } from '@/views/eliaukMusic/components/PlayerDrawer/PlayerDrawerStyles';

/**
 * @description: 播放器的全局抽屉
 */
const PlayerDrawer = ({ children }) => {
	const dispatch = useDispatch();
	const { drawerVisible } = useSelector(
		(state) => ({
			drawerVisible: state.musicApp.drawerVisible,
		}),
		shallowEqual,
	);

	const onClose = () => {
		dispatch(setDrawerVisible(false));
	};

	return (
		<PlayerDrawerStyles>
			<Drawer
				width
				placement='right'
				autoFocus={false}
				destroyOnClose={true}
				mask={true}
				maskClosable={true}
				closable={false}
				onClose={onClose}
				open={drawerVisible}
				getContainer={false}>
				{children}
			</Drawer>
		</PlayerDrawerStyles>
	);
};

export default memo(PlayerDrawer);
