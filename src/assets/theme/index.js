/**
 * @description: 项目的主题样式
 */

const appTheme = {
  // 主题颜色
  color: {
    firstColor: 'red'
  },
  // css样式
  mixins: {
    // hover时的box阴影效果
    boxShadowHover: `
      transition: box-shadow 300ms ease;
      &:hover {
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
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