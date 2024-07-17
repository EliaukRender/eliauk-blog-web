import React, { memo, useEffect, useState } from 'react';
import MenuMusicInfoArea from '@/views/musicSection/views/RightViews/MenuMusicInfoArea';
import { MusicCommonPageStyles } from '@/views/musicSection/views/RightViews/styles/MusicCommonPageStyles';
import MenuMusicList from '@/views/musicSection/views/RightViews/MenuMusicList';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * @description: 我的音乐---公共页面
 */
const MusicCommonPage = () => {
	const { curMenuId } = useSelector(
		(state) => ({
			curMenuId: state.musicApp.curMenuId,
		}),
		shallowEqual,
	);
	const [playAnimation, setPlayAnimation] = useState(1);

	useEffect(() => {
		setPlayAnimation((pre) => pre + 1);
	}, [curMenuId]);

	return (
		<MusicCommonPageStyles key={playAnimation} className='common-page'>
			{/* 歌单信息介绍 */}
			<MenuMusicInfoArea></MenuMusicInfoArea>
			{/* 歌单区域 */}
			<MenuMusicList></MenuMusicList>
		</MusicCommonPageStyles>
	);
};

export default memo(MusicCommonPage);
