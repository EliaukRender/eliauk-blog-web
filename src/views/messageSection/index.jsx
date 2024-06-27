import React, { memo, useEffect } from 'react';
import { MessageSectionStyles } from '@/views/messageSection/styles';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setCurSectionId } from '@/store/modules/globalReducer';

/**
 * @description: 板块---留言板
 */
const MessageSection = () => {
	const { ref, inView } = useInView({ threshold: 0.4 });
	const dispatch = useDispatch();

	useEffect(() => {
		if (!inView) return;
		dispatch(setCurSectionId(3));
	}, [inView]);

	return <MessageSectionStyles ref={ref}></MessageSectionStyles>;
};

export default memo(MessageSection);
