import React, { forwardRef, memo, useEffect } from 'react';
import { ProfileSectionStyles } from '@/views/profileSection/styles';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setCurSectionId } from '@/store/modules/globalReducer';

/**
 * @description: 板块---个人简介
 */
const ProfileSection = () => {
	const { ref, inView } = useInView({ threshold: 0.4 });
	const dispatch = useDispatch();

	useEffect(() => {
		if (!inView) return;
		dispatch(setCurSectionId(2));
	}, [inView]);

	return <ProfileSectionStyles ref={ref}></ProfileSectionStyles>;
};

export default memo(forwardRef(ProfileSection));
