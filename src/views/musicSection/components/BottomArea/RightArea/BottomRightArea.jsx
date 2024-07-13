import React, { memo } from 'react';
import { BottomRightAreaStyles } from '@/views/musicSection/styles/BottomRightAreaStyles';
import { shallowEqual, useSelector } from 'react-redux';

const BottomRightArea = () => {
	const { showFullScreenLyric } = useSelector(
		(state) => ({
			showFullScreenLyric: state.musicApp.showFullScreenLyric,
		}),
		shallowEqual,
	);

	return (
		<BottomRightAreaStyles style={showFullScreenLyric ? { background: 'linear-gradient(to right, #343838 0%, #202021 50%, #1a1a1a 100%)' } : {}}>
			<i className='iconfont icon-pinpu'></i>
			<i className='iconfont icon-ci'></i>
		</BottomRightAreaStyles>
	);
};

export default memo(BottomRightArea);
