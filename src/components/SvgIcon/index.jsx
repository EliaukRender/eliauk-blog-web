import React, { memo, useState } from 'react';
import { Tooltip } from 'antd';
import '@/assets/svgIcons/index';
import PropTypes from 'prop-types';

/**
 * @description: SVG组件
 */

const SvgIcon = (props) => {
  const {
    name, // svg名称
    iconColor, // 颜色
    width = 32, // 宽度
    height = 32, // 高度
    hasHover, // hover效果
    hoverColor, // hover时的颜色
    needPointer, // 鼠标
    toolTipValue, // 文字提示
  } = props;

  const [svgColor, setSvgColor] = useState(iconColor);

  // 鼠标进入
  const handleMouseEnter = () => {
    if (hasHover) {
      setSvgColor(hoverColor);
    }
  };

  // 鼠标离开
  const handleMouseLeave = () => {
    if (hasHover) {
      setSvgColor(iconColor);
    }
  };

  return (
    <Tooltip title={toolTipValue} arrow={false}>
      <div
        id='svg-icon'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: width,
          height: height,
        }}>
        <svg
          fill={svgColor}
          style={{
            width: width,
            height: height,
            cursor: needPointer ? 'pointer' : 'normal',
          }}>
          <use xlinkHref={'#' + name} />
        </svg>
      </div>
    </Tooltip>
  );
};

SvgIcon.propTypes = {
  name: PropTypes.string,
  iconColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  hasHover: PropTypes.bool,
  needPointer: PropTypes.bool,
  toolTipValue: PropTypes.string,
  hoverColor: PropTypes.string,
};

export default memo(SvgIcon);
