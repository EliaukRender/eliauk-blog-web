import React, { memo } from 'react';
import { HomeWrapper } from '@/views/home/styles';
import NavigationBar from 'src/views/home/components/NavigationBar';
import ProjectSection from '@/views/projectSection';
import EntrySection from '@/views/entrySection';
import PersonalProfileSection from '@/views/profileSection';
import MessageSection from '@/views/messageSection';
import TopHomeBar from '@/views/home/components/TopHomeBar';

const Home = () => {
	return (
		<HomeWrapper>
			{/* 定位导航栏 */}
			<NavigationBar></NavigationBar>
			{/* 首页菜单栏 */}
			<TopHomeBar></TopHomeBar>

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
