import styled from 'styled-components';

export const LeftMenuListStyles = styled.div`
	height: 165px;
	padding-bottom: 25px;
	box-sizing: border-box;

	.title {
		font-weight: 600;
		padding-bottom: 10px;
	}

	.item {
		width: 100%;
		height: 38px;
		line-height: 38px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		cursor: pointer;
		padding-left: 10px;
		border-radius: 8px;
		box-sizing: border-box;

		.item-text {
			margin-left: 10px;
		}
	}

	.active {
		background-color: #dddddd;
	}
`;
