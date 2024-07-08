import React, { memo, useEffect } from 'react';
import { MusicSectionStyles } from '@/views/musicSection/styles';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { setCurSectionId } from '@/store/modules/globalReducer';
import { changeVolume, playAudio } from '@/store/actions/musicPlayerAction';

/**
 * @description：音乐
 */
const MusicSection = () => {
	const { ref, inView } = useInView({ threshold: 0.4 });
	const dispatch = useDispatch();

	useEffect(() => {
		if (!inView) return;
		dispatch(setCurSectionId(3));
	}, [inView]);

	const { volume } = useSelector((state) => ({
		volume: state.musicPlayer.volume,
	}));

	return (
		<MusicSectionStyles ref={ref}>
			<button
				onClick={() => {
					playAudio();
				}}>
				开始播放
			</button>

			<button
				onClick={() => {
					changeVolume(volume + 1);
				}}>
				+音量
			</button>
			<button
				onClick={() => {
					changeVolume(volume - 1);
				}}>
				-音量
			</button>
		</MusicSectionStyles>
	);
};

export default memo(MusicSection);
