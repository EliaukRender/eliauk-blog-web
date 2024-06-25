/**
 * @description: 项目的主题样式
 */
import {hexToRgba} from '@/utils/hexToRgba';
import {french_Cool_blue} from '@/assets/css/variables';

const appTheme = {
  // css样式
  mixins: {
    // hover时的box阴影效果
    boxShadowHover: `
      transition: box-shadow 300ms ease;
      &:hover {
        box-shadow: 0 2px 2px ${hexToRgba(french_Cool_blue, 0.4)};
      }
    `,
    
    // 文本颜色线性渐变
    textGradient: `
    	background: linear-gradient(45deg, #64b5f6, #9575cd);
		  -webkit-background-clip: text;
		  -webkit-text-fill-color: transparent;
		`,
    
    // 图标hover时的放大效果
    hoverCustomScale: function (scale) {
      return `
        transition: transform 0.3s ease;
			  &:hover {
				  transform: scale(${scale});
			  }
      `
    }
  },
  // 动画
  animation: {
    // 由下往上出现
    bottomToTopEnter: `
      animation: bottomToTopEnter 1s 1 ease-out;
      @keyframes bottomToTopEnter {
        0% {
          transform: translateY(30px);
        }
        100% {
          transform: translateY(0);
        }
      }
    `
  }
}

export default appTheme;