import styled from 'styled-components';
import { text_black, text_gray } from '@/assets/css/variables';

export const SongItemStyles = styled.div`
	width: 100%;

	.container {
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
		box-sizing: border-box;
		border-radius: 8px;

		/* 左侧区域 */

		.left-info-area {
			position: relative;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 220px;

			.img {
				width: 40px;
				height: 40px;
				margin-right: 10px;
				border-radius: 5px;
			}

			.mask {
				position: absolute;
				top: 0;
				left: 0;
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
				width: 160px;
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

		/* 操作按钮区域 */

		.operation {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;

			.heart {
				margin-right: 15px;
			}

			.iconfont {
				margin-right: 15px;
			}
		}

		.album {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.duration {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.odd {
		background-color: #fafafa;
		border-radius: 8px;
	}

	&:hover {
		background-color: #f3f3f3;
		border-radius: 8px;
	}

	.active {
		border-radius: 8px;
		background-color: #ebebeb;
	}
`;
