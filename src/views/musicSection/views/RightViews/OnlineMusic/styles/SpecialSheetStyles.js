import styled from 'styled-components';
import { hexToRgba } from '@/utils/hexToRgba';
import { music_green_select } from '@/assets/css/variables';

export const SpecialSheetStyles = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;

	.images-box {
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

		.img {
			margin-right: 20px;
			border-radius: 6px;
			cursor: pointer;
		}

		.img:last-child {
			margin-right: 0 !important;
		}
	}

	.next,
	.prev {
		position: absolute;
		top: ${(props) => (props.height || 200) / 2 + 'px'};
		transform: translateY(-50%);
		z-index: 10;
		padding: 10px;
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

	.pointer-list {
		width: 100%;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;

		.pointer {
			width: 6px;
			height: 6px;
			background-color: #adadad;
			margin-right: 5px;
			border-radius: 50%;
		}

		.pointer:last-child {
			margin-right: 0;
		}
	}
`;
