import styled from 'styled-components';
import { text_black } from '@/assets/css/variables';

export const CurrentSongListStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	overflow-y: auto;

	.title {
		color: ${text_black};
		font-weight: 600;
		margin-bottom: 10px;
	}
`;
