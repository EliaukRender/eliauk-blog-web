import styled from 'styled-components';
import bg from '@/views/musicSection/images/music-bg2.png';

export const EliaukMusicPlayerStyles = styled.div`
	width: 1100px;
	height: 800px;
	min-width: 1000px;
	min-height: 700px;
	display: flex;
	flex-direction: column;
	font-size: 14px;
	border-radius: 6px 6px 0 0;
	position: relative;

	/* 背景图 */
	// background-image: url(${bg});
	// background-size: cover;
	// background-position: center;
	// background-repeat: no-repeat;

	.main-area {
		display: flex;
		height: calc(100% - 80px);
	}

	.bottom-area {
		height: 80px;
	}
`;
