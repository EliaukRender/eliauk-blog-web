import React, { memo } from 'react';
import { HomeStyles } from '@/views/home/styles';
import EntrySection from '@/views/home/entry';
import MessageSection from '@/views/home/message';

/**
 * @description:Home首页
 * @return
 */
const Home = () => {
	return (
		<HomeStyles>
			{/* 首页主界面 */}
			<EntrySection />
			{/* 留言板 */}
			<MessageSection></MessageSection>
		</HomeStyles>
	);
};

export default memo(Home);
