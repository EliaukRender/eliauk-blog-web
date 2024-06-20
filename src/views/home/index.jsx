import React, { memo } from 'react';
import { HomeWrapper } from '@/views/home/styles';
import NavigationBar from 'src/views/home/components/navigationBar';
import ProjectSection from '@/views/home/components/projectSection';
import EntrySection from 'src/views/home/components/entrySection';
import PersonalProfileSection from 'src/views/home/components/profileSection';
import { useSelector } from 'react-redux';
import MessageSection from '@/views/home/components/messageSection';
import NextPageBtn from '@/views/home/components/nextPageBtn';

const Home = () => {
	const { currentSectionId } = useSelector((state) => ({
		currentSectionId: state.global.currentSectionId
	}));
	return (
		<HomeWrapper>
			{/* 定位导航栏 */}
			{currentSectionId !== 0 && <NavigationBar></NavigationBar>}
			{/* 下一页按钮 */}
			{currentSectionId !== 3 && <NextPageBtn></NextPageBtn>}
			{/* 首页 */}
			<EntrySection />
			{/* 项目 */}
			<ProjectSection></ProjectSection>
			{/* 个人简介 */}
			<PersonalProfileSection></PersonalProfileSection>
			{/* 留言板 */}
			<MessageSection></MessageSection>
		</HomeWrapper>
	);
};

export default memo(Home);
