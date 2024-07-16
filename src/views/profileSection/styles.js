import styled from 'styled-components';
import bg from '@/assets/image/fullImgs/bg-1.png';

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
	padding: 120px 20% 4% 20%;
	box-sizing: border-box;

	.card-box {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		position: relative;

		.card:nth-child(2n + 1) {
			flex: 0 0 35%;
		}

		.card:nth-child(2n) {
			flex: 0 0 30%;
		}

		.card:nth-child(5) {
			flex-grow: 1;
		}
	}
`;
