import styled from 'styled-components';
import bg from '@/assets/image/bg-3.jpg';

export const ProfileSectionStyles = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-image: url(${bg});
	background-size: cover;
	background-position: center;
`;
