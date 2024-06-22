import React, { memo } from 'react';
import { FirstSectionWrapper } from '@/views/entrySection/styles';
import NextPageBtn from '@/views/home/components/NextPageBtn';
import HomeImage from '@/views/entrySection/components/HomeImage';
import InfoBar from '@/views/entrySection/components/InfoBar';

/**
 * @description: 个人信息
 */
const FirstSection = () => {
	return (
		<FirstSectionWrapper>
			{/* 主页头像 */}
			<HomeImage></HomeImage>
			{/* 联系方式 */}
			<InfoBar></InfoBar>
			{/* 下一页按钮 */}
			<NextPageBtn></NextPageBtn>
		</FirstSectionWrapper>
	);
};

export default memo(FirstSection);
