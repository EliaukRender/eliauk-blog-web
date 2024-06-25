import styled from 'styled-components';
import { french_Cool_blue } from '@/assets/css/variables';
import { hexToRgba } from '@/utils/hexToRgba';

export const PageProgressIndicatorWrapper = styled.div`
	.bar {
		position: fixed;
		height: 4px;
		top: 0;
		left: 0;
		right: 0;
		background: ${hexToRgba(french_Cool_blue, 0.7)};
		transform-origin: 0;
		z-index: 999;
	}
`;
