import styled from 'styled-components';
import bg from '@/views/musicSection/images/music-bg2.png';

export const EliaukMusicPlayerStyles = styled.div`
	min-width: 1150px;
	min-height: 750px;
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
