import styled from 'styled-components';

export const FadeInAnimateWrapper = styled.div`
	.animate {
		animation: fade-in 1.5s cubic-bezier(0.42, 0, 0.58, 1);
		transition: opacity 1.5s ease;
	}

	@keyframes fade-in {
		0% {
			opacity: 0.4;
			transform: translateY(40px);
		}

		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;
