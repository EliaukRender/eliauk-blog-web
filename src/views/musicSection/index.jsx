import React, { memo, useEffect } from 'react';
import { MusicSectionStyles } from '@/views/musicSection/styles';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setCurSectionId } from '@/store/modules/globalReducer';
import AudioPlayer from '@/components/AudioPlayer';

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

	return (
		<MusicSectionStyles ref={ref}>
			<AudioPlayer></AudioPlayer>
		</MusicSectionStyles>
	);
};

export default memo(MusicSection);
