import DARK_THEME from './themes/dark';
import DEFAULT_THEME from './themes/default';

type theme = 'DEFAULT_THEME' | 'DARK_THEME';

export const changeTheme = (type: theme) => {
  let themeObj: any;
  switch (type) {
    case 'DEFAULT_THEME':
      themeObj = DEFAULT_THEME;
      break;
    case 'DARK_THEME':
      themeObj = DARK_THEME;
      break;
  }

  const vars = Object.keys(themeObj)
    .map((key: string) => `--${key}:${themeObj[key]}`)
    .join(';');
  document.documentElement.setAttribute('style', vars);
};
