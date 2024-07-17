import styled from 'styled-components';

export const MenuMusicListStyles = styled.div`
	width: 100%;
	height: calc(100% - 120px);
	box-sizing: border-box;
	padding-top: 20px;

	.top {
		height: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.left {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			height: 100%;

			.item {
				margin-right: 20px;
			}

			.active {
				color: #00cc65;
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
				height: 40px;
				line-height: 40px;
				padding: 5px;
				margin-left: 15px;
				cursor: pointer;

				.iconfont {
					margin-right: 5px;
				}

				&:hover {
					background-color: #f0f0f0;
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
