import React, { forwardRef, memo } from 'react';
import { PersonProfileWrapper } from '@/views/home/components/personalProfileSection/styles';

/**
 * @description: 个人简介
 */
const PersonalProfile = () => {
	return <PersonProfileWrapper></PersonProfileWrapper>;
};

export default memo(forwardRef(PersonalProfile));
