import styled from 'styled-components';
import { text_gray, xihuan_red } from '@/assets/css/variables';

export const MiniPlayerStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 8px 8px 0 0;
  cursor: move;

  .body {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: #fff;
    border-radius: 8px;
    box-sizing: border-box;
    padding-left: 85px;
    padding-right: 30px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
;

  .icon-guanbi {
    position: absolute;
    top: 2px;
    right: 5px;
    font-size: 14px;
    padding: 5px;
    cursor: pointer;

    &:hover {
      color: #0ccf82;
    }
  }

  .image {
    position: absolute;
    left: 10px;
    top: -20px;
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }

  .mask {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);

    .icon-icon_qqyinyue {
      color: #eaeaea;
    }
  }

  .song-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;

    .name {
      margin-bottom: 5px;
      color: #000000;
    }

    .singer {
      color: ${text_gray};
    }
  }

  .control {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .play-pause {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #0ccf82;
    }

    .anticon {
      margin: 0 5px;
      padding: 5px;
      font-size: 22px;
      cursor: pointer;

      &:hover {
        color: #0ccf82;
      }
    }

    .anticon-caret-right,
    .anticon-pause {
      color: #ffffff;
      margin: 0 10px;

      &:hover {
        color: #ffffff;
      }
    }

    .anticon-pause {
      font-size: 22px;
    }

    .iconfont {
      cursor: pointer;
      font-size: 24px;
    }

    .icon-xihuan:hover {
      color: ${xihuan_red};
    }

    .icon-liebiao:hover {
      color: #0ccf82;
    }
  }
}

.song-list-box {
  width: 100%;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1);
}
`;
