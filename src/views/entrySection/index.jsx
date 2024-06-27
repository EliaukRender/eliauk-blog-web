import React, { memo, useEffect } from 'react';
import { FirstSectionWrapper } from '@/views/entrySection/styles';
import NextPageBtn from '@/views/entrySection/components/NextPageBtn';
import Image from '@/views/entrySection/components/Image';
import InfoBar from '@/views/entrySection/components/InfoBar';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setCurSectionId } from '@/store/modules/globalReducer';

/**
 * @description: 板块---个人信息
 */
const FirstSection = () => {
	const { ref, inView } = useInView({ threshold: 0.4 });
	const dispatch = useDispatch();

	useEffect(() => {
		if (!inView) return;
		dispatch(setCurSectionId(0));
	}, [inView]);

	return (
		<FirstSectionWrapper ref={ref}>
			{/* 主页头像 */}
			<Image></Image>
			{/* 联系方式 */}
			<InfoBar></InfoBar>
			{/* 下一页按钮 */}
			<NextPageBtn></NextPageBtn>
		</FirstSectionWrapper>
	);
};

export default memo(FirstSection);
