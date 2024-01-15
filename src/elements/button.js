
export default function Button({
  href = '#',
  auto = true,
  size = false,
  round = false,
  style = false,
  outline = false,
  additional = false,
  children 
}) {
  /**
   * Get class based on parameters.
   * @returns class of button.
   */
  const getClass = () => {
    // Base button class.
    let cls = 'btn '
    // Set auto button.
    if(auto) cls = `${cls} btn-auto`;
    // Set button size.
    switch(size) {
      case 'xs': case 'sm': case 'md': case 'lg': cls = `${cls} btn-${size}`;
    };
    // Rounded button.
    if(round) cls = `${cls} btn-round`;
    // Set button style.
    switch(style) {
      case false: break;
      case 'primary':
      case 'secondary':
      case 'info':
      case 'warning':
      case 'success':
      case 'danger':
      case 'light':
      case 'dark':
      case 'facebook':
      case 'google':
        cls = `${cls} btn-${style}`;
        break;
      default:
        cls = `${cls} btn-grad`;
    };
    // Set outline.
    switch(outline) {
      case false: break;
      case 'on-bg-light':
      case 'on-bg-light-alt':
      case 'on-bg-theme':
      case 'on-bg-theme-alt':
      case 'on-bg-theme-dark':
      case 'on-bg-theme-dark-alt':
        cls = `${cls} btn-outline ${outline}`;
        break;
      default:
        cls = `${cls} btn-outline`;
    };
    // Set additional classes.
    if(additional) cls = `${cls} ${additional}`;
    // Return button class.
    return cls;
  };

  /**
   * Render button component.
   * @returns button component.
   */
  return (
    <a href={href} className={`${getClass()}`}>
      {children}
    </a>
  );
}