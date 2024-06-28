import React, { memo, useCallback, useEffect, useState } from 'react';
import { ProfileSectionStyles } from '@/views/profileSection/styles';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setCurSectionId } from '@/store/modules/globalReducer';
import Card from '@/views/profileSection/components/Card.jsx';
import ProfileDialog from '@/views/profileSection/components/ProfileDialog';

/**
 * @description: 板块---个人简介
 */
const cardList = [
	{ id: 1, title: '定位' },
	{ id: 2, title: '技术栈' },
	{ id: 3, title: '工作经历' },
	{ id: 4, title: '教育经历' },
	{ id: 5, title: '世界观' },
	{ id: 6, title: '人生观' },
	{ id: 7, title: '价值观' },
	{ id: 8, title: '座右铭' },
	{ id: 9, title: '九宫格' }
];

const ProfileSection = () => {
	const { ref, inView } = useInView({ threshold: 0.4 });
	const dispatch = useDispatch();

	useEffect(() => {
		if (!inView) return;
		dispatch(setCurSectionId(2));
	}, [inView]);

	const [curCardId, setCurCardId] = useState(null);

	const handleSelectCardId = useCallback((id) => {
		setCurCardId(id);
	}, []);

	return (
		<ProfileSectionStyles ref={ref}>
			<div className='card-box'>
				{cardList.map((item) => {
					return <Card key={item.id} cardInfo={item} handleSelectCardId={handleSelectCardId}></Card>;
				})}
			</div>
			{!!curCardId && <ProfileDialog curCardId={curCardId} handleSelectCardId={handleSelectCardId}></ProfileDialog>}
		</ProfileSectionStyles>
	);
};

export default memo(ProfileSection);
