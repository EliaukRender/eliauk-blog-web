import styled from 'styled-components';
import homeBg from '@/assets/image/fullImgs/bg-6.png';

export const FirstSectionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${homeBg}); // 背景图
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;
