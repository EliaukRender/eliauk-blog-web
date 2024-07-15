import styled from 'styled-components';
import { text_black, text_gray } from '@/assets/css/variables';

export const SongItemStyles = styled.div`
	.container {
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0 10px;
		box-sizing: border-box;
		position: relative;

		.img {
			width: 40px;
			height: 40px;
			margin-right: 10px;
			border-radius: 5px;
		}

		.mask {
			position: absolute;
			top: 10px;
			left: 10px;
			width: 40px;
			height: 40px;
			background-color: rgba(0, 0, 0, 0.5);
			border-radius: 5px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;

			.icon-bofang:hover,
			.icon-zanting:hover {
				color: #00cc65 !important;
			}
		}

		.song-info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			color: ${text_black};

			.singer {
				font-size: 12px;
				color: ${text_gray};
				margin-top: 8px;
			}
		}
	}

	.odd {
		background-color: #fafafa;
	}

	&:hover {
		background-color: #f3f3f3;
	}

	.active {
		background-color: #ebebeb;
	}
`;
