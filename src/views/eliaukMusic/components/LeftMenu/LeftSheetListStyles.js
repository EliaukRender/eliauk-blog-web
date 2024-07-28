import styled from 'styled-components';

export const LeftSheetListStyles = styled.div`
	height: calc(100% - 60px - 165px);
	padding-bottom: 20px;
	box-sizing: border-box;

	.title {
		height: 35px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: 600;
		padding-bottom: 10px;
		box-sizing: border-box;

		.iconfont {
			font-size: 20px;
			cursor: pointer;
		}

		.icon-jia {
			margin-left: 8px;
		}
	}

	.list {
		height: calc(100% - 35px);
		overflow-y: auto;

		.item {
			width: 100%;
			height: 38px;
			margin: 3px 0;
			line-height: 38px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			cursor: pointer;
			padding-left: 10px;
			border-radius: 8px;
			box-sizing: border-box;
			position: relative;

			.item-text {
				margin-left: 10px;
			}

			.icon-guanbi {
				position: absolute;
				top: 50%;
				right: 0;
				transform: translateY(-50%);
				font-size: 20px;
				cursor: pointer;
				padding: 5px;
			}

			&:hover {
				background-color: #e4e4e4;
			}
		}

		.active {
			background-color: #dddddd !important;
		}
	}
`;
