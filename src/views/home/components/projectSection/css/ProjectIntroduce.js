import styled from 'styled-components';
import { primaryColor } from '@/assets/css/variables';

export const ProjectIntroduceWrapper = styled.div`
  width: 70%;
  padding-left: 50px;

  .project-title {
    color: ${primaryColor};
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 40px;
    cursor: pointer;
  }

  .project-web,
  .project-server {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .project-desc {
    margin-top: 30px;
    line-height: 2;
    text
  }
`;
