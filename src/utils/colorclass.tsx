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
  Danger = 'danger'
}

const enum Stylable {
  Text = 'tc',
  Button = 'btn',
  Background = 'bg',
  ThemeBackground = 'bg-theme'
}

const getColorStyleClass = (item: Stylable, color?: StyledColor | string, alt?: boolean) => {
  return item + color ? color : StyledColor.Default + alt ? '-alt' : ''
}

export {StyledColor as ColorStyle, Stylable, getColorStyleClass}
