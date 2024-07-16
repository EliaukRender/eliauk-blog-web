import React, { memo } from 'react';
import { FirstSectionWrapper } from '@/views/home/entry/styles';
import NextPageBtn from '@/views/home/entry/components/NextPageBtn';
import Image from '@/views/home/entry/components/Image';
import InfoBar from '@/views/home/entry/components/InfoBar';

/**
 * @description: 主界面
 */
const FirstSection = () => {
	return (
		<FirstSectionWrapper>
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
