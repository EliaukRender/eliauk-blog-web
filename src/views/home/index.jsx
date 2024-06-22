import React, { memo } from 'react';
import { HomeWrapper } from '@/views/home/styles';
import NavigationBar from 'src/views/home/components/NavigationBar';
import ProjectSection from '@/views/projectSection';
import EntrySection from '@/views/entrySection';
import PersonalProfileSection from '@/views/profileSection';
import { shallowEqual, useSelector } from 'react-redux';
import MessageSection from '@/views/messageSection';

const Home = () => {
	const { currentSectionId } = useSelector(
		(state) => ({
			currentSectionId: state.global.currentSectionId
		}),
		shallowEqual
	);
	return (
		<HomeWrapper>
			{/* 定位导航栏 */}
			{currentSectionId !== 0 && <NavigationBar></NavigationBar>}
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
