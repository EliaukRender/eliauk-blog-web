import styled from 'styled-components';
import profileBg from '@/assets/image/personal-profile-bg.jpg';

export const PersonProfileWrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-image: url(${profileBg});
	background-size: cover;
	background-position: center;
`;
