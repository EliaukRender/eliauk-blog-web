import React, { forwardRef, memo } from 'react';
import { ProfileSectionWrapper } from '@/views/home/components/profileSection/styles';

/**
 * @description: 个人简介
 */
const ProfileSection = () => {
	return <ProfileSectionWrapper></ProfileSectionWrapper>;
};

export default memo(forwardRef(ProfileSection));
