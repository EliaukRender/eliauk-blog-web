import styled from 'styled-components';
import homeBg from '@/assets/image/home-bg.jpg';

export const FirstSectionWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	background-image: url(${homeBg}); // 背景图
	background-size: cover;
	background-position: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 2;

	/* 遮罩层 */

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(107, 150, 205, 0.08);
		z-index: -1;
	}
`;
