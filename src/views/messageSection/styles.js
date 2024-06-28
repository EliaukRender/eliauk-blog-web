import styled from 'styled-components';
import Bg from '@/assets/image/fullImgs/bg-5.png';

export const MessageSectionStyles = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-image: url(${Bg});
	background-size: cover;
	background-position: center;
`;
