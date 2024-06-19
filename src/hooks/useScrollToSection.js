import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

/**
 * @description: 组件滚动到页面可视区域的钩子
 * sectionId: 当前组件所对应的section-id值
 */
const useScrollToSection = (sectionId) => {
	const sectionRef = useRef(null);
	const currentSectionId = useSelector((state) => state.home.currentSectionId);

	useEffect(() => {
		// 基于currentSectionId的值的变化，来移动不同的section到可视区域
		if (currentSectionId === sectionId && sectionRef.current) {
			sectionRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [currentSectionId, sectionId]);

	useEffect(() => {}, []);

	return sectionRef;
};

export default useScrollToSection;
