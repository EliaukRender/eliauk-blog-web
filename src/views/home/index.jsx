import React, { memo } from 'react';
import { HomeWrapper } from '@/views/home/styles';
import NavigationBar from 'src/views/home/components/navigationBar';
import ProjectSection from '@/views/home/components/projectSection';
import FirstSection from '@/views/home/components/firstSection';
import PersonalProfileSection from '@/views/home/components/personalProfileSection';
import { useSelector } from 'react-redux';

const Home = () => {
	const { currentSectionId } = useSelector((state) => ({
		currentSectionId: state.home.currentSectionId
	}));
	return (
		<HomeWrapper>
			{/* 导航栏 */}
			{currentSectionId !== 0 && <NavigationBar></NavigationBar>}
			{/* 首页 */}
			<FirstSection />
			{/* 项目 */}
			<ProjectSection></ProjectSection>
			{/* 个人简介 */}
			<PersonalProfileSection></PersonalProfileSection>
		</HomeWrapper>
	);
};

export default memo(Home);
