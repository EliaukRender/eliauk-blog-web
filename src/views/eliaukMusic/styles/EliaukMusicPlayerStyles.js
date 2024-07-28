import styled from 'styled-components';

export const EliaukMusicPlayerStyles = styled.div`
	min-width: 1150px;
	min-height: 750px;
	display: flex;
	flex-direction: column;
	font-size: 14px;
	border-radius: 6px 6px 0 0;
	position: relative;

	.main-area {
		display: flex;
		height: calc(100% - 80px);
	}

	.bottom-area {
		height: 80px;
	}
`;
