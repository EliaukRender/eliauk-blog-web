import styled from 'styled-components';

export const LyricStyles = styled.div`
	height: 100%;
	box-sizing: border-box;
	padding: 100px 30px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;

	.lyric-box {
		height: 360px;
		overflow: auto;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		font-size: 14px;

		.lyric-line {
			width: 100%;
			height: 30px;
			line-height: 30px;
			text-align: center;
			position: relative;
		}

		.highlight {
			color: #00cc65;
			font-weight: 600;
		}
	}
`;
