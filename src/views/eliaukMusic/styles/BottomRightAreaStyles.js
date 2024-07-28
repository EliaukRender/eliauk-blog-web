import styled from 'styled-components';

export const BottomRightAreaStyles = styled.div`
	min-width: 300px;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 15px;

	.iconfont {
		margin-right: 20px;
		cursor: pointer;

		&:last-child {
			margin-right: 0;
		}

		&:hover {
			color: #00cc65;
		}
	}
`;
