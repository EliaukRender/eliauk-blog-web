import styled from 'styled-components';

export const BottomLeftAreaStyles = styled.div`
	min-width: 300px;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 15px;
	position: relative;

	.info-text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;

		.singer {
			color: #000000;
			margin-bottom: 2px;
		}

		.song-name {
			color: #626262;
		}
	}

	.feat-area {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-left: 30px;

		.heart {
			width: 24px;
			height: 20px;
			cursor: pointer;
			margin-right: 15px;
		}
	}
`;
