/**
 * @description: 项目的主题样式
 */

const appTheme = {
  // 常用颜色
  color: {
    firstColor: '#d1d6ec',  // 主题色
    secondColor: '#6b96cd',  // 主题色
    darkGrayColor: '#2F4F4F' // 暗灰色
  },
  // css样式
  mixins: {
    // hover时的box阴影效果
    boxShadowHover: `
      transition: box-shadow 300ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(107, 150, 205, 0.6);
      }
    `
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