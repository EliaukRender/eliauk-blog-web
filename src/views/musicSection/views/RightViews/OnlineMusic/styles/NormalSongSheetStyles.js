import styled from 'styled-components';
import { hexToRgba } from '@/utils/hexToRgba';
import { music_green_select } from '@/assets/css/variables';

export const NormalSongSheetStyles = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	box-sizing: border-box;
	padding-bottom: 20px;

	.song-sheet-title {
		width: 100%;
		height: 20px;
		text-align: left;
		font-weight: 600;
		font-size: 16px;
		box-sizing: border-box;
	}

	.sheet-list {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: nowrap;
		overflow-x: auto;
		overflow-y: hidden; /* 禁用垂直滚动条 */
		scrollbar-width: none; /* Firefox 隐藏滚动条 */
		-ms-overflow-style: none; /* IE/Edge 隐藏滚动条 */
		position: relative;
		box-sizing: border-box;
		padding-top: 10px;

		.sheet-card:last-child {
			margin-right: 0;
		}
	}

	.next,
	.prev {
		position: absolute;
		/* 30px是标题高度，10px是图片盒子padding-top */
		top: ${(props) => (props.height || 127) / 2 + 20 + 'px'};
		transform: translateY(-50%);
		z-index: 10;
		padding: 5px;
		background-color: ${hexToRgba(music_green_select, 0.5)};
		font-size: 20px;
		color: #ffffff;
		cursor: pointer;

		&:hover {
			background-color: ${hexToRgba(music_green_select, 0.8)};
		}
	}

	.next {
		right: 0;
		border-radius: 50% 0 0 50%;
	}

	.prev {
		left: 0;
		border-radius: 0 50% 50% 0;
	}

	.anticon-right {
		transform: translateX(3px);
	}

	.anticon-left {
		transform: translateX(-3px);
	}
`;
