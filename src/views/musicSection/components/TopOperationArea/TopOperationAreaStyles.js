import styled from 'styled-components';

export const TopOperationAreaStyles = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 50px;
	line-height: 5px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;

	.left {
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.icon-youjiantou {
			margin: 0 10px;
		}

		.input-search-music {
			height: 32px;
			background-color: #e3e3e3;

			.ant-input-prefix,
			.ant-input::placeholder {
				color: #a3a5a4;
			}

			&:hover,
			&:focus {
				border-color: #e3e3e3 !important;
			}
		}
	}

	.right {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		.iconfont {
			margin-left: 15px;
		}

		.username {
			margin-right: 5px;
		}

		.img {
			width: 25px;
			height: 25px;
			margin-right: 8px;
		}
	}

	.iconfont {
		font-size: 22px;

		&:hover {
			cursor: pointer;
			color: #00cc65;
		}
	}
`;
