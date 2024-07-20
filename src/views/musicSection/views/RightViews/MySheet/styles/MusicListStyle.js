import styled from 'styled-components';
import { music_green, music_green_select } from '@/assets/css/variables';

export const MusicListStyles = styled.div`
	width: 100%;
	height: calc(100% - 120px);
	box-sizing: border-box;
	padding-top: 20px;

	.top {
		height: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 15px;
		box-sizing: border-box;

		.left {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			height: 100%;

			.item {
				margin-right: 20px;
				cursor: pointer;
			}

			.item-active {
				display: inline-block;
				position: relative;
				color: ${music_green_select};

				&::after {
					content: '';
					position: absolute;
					left: 0;
					bottom: -10px;
					width: 100%;
					height: 2px;
					background-color: ${music_green_select};
				}
			}
		}

		.right {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			height: 100%;

			.item {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 30px;
				line-height: 30px;
				padding: 5px;
				margin-left: 15px;
				cursor: pointer;

				.iconfont {
					margin-right: 5px;
				}

				&:hover {
					background-color: #ebebeb;
					border-right: 8px;
				}
			}
		}
	}

	.song-list {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		height: calc(100% - 40px);
		overflow-y: auto;
	}
`;
