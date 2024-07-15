import styled from 'styled-components';

export const LyricStyles = styled.div`
	height: 100%;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;

	.lyric-box {
		width: 400px;
		height: 360px;
		overflow: auto;
		display: flex;
		flex-wrap: wrap;
		pointer-events: none; /* 禁止鼠标事件 */

		.lyric-line {
			width: 100%;
			height: 40px;
			line-height: 40px;
			text-align: left;
			font-size: 18px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.highlight {
			color: #00cc65;
			font-weight: 600;
		}
	}
`;
