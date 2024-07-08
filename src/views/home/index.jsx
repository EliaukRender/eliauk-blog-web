import React, { memo } from 'react';
import { HomeStyles } from '@/views/home/styles';
import ProjectSection from '@/views/projectSection';
import EntrySection from '@/views/entrySection';
import PersonalProfileSection from '@/views/profileSection';
import MessageSection from '@/views/messageSection';
import TopHomeBar from '@/views/home/components/TopHomeBar';
import MusicSection from '@/views/musicSection';

const Home = () => {
	return (
		<HomeStyles>
			{/* 首页菜单栏 */}
			<TopHomeBar></TopHomeBar>
			{/* 首页 */}
			<EntrySection />
			{/* 项目 */}
			<ProjectSection></ProjectSection>
			{/* 个人简介 */}
			<PersonalProfileSection></PersonalProfileSection>
			{/* 音乐角 */}
			<MusicSection></MusicSection>
			{/* 留言板 */}
			<MessageSection></MessageSection>
		</HomeStyles>
	);
};

export default memo(Home);
