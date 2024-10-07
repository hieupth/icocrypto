const enum StyledColor {
  Default = 'default',
  Theme = 'theme',
  Light = 'light',
  Dark = 'dark',
  Gradient = 'grad',
  Alternet = 'alternet',
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger',
  Outline = 'outline',
}

const enum Stylable {
  Text = 'tc',
  Button = 'btn',
  Background = 'bg',
  ThemeBackground = 'bg-theme',
  Badge = 'badge',
  OnBackground = 'on-bg',
  Border = 'bd',
}

const getColorStyleClass = (
  item: Stylable,
  color?: StyledColor | string,
  alt?: boolean,
  dark?: boolean
) => {
  return (
    item +
    (color ? `-${color}` : '') + // Chỉ thêm màu nếu nó được cung cấp
    (dark ? '-dark' : '') + // Tùy chọn cho dark class
    (alt ? '-alt' : '') // Tùy chọn cho alt class
  );
};

export { StyledColor as ColorStyle, Stylable, getColorStyleClass };


