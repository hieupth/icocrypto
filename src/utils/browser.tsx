/**
 * Browser supports touch?
 * @returns has-touch | no-touch
 */
export const hasTouch = () => {
  return (('ontouchstart' in document.documentElement)) ? 'has-touch' : 'no-touch';
}

/**
 * Browser supports mobile?
 * @returns has-mobile | no-mobile
 */
export const hasMobile = () => {
  if (window?.innerWidth <= 768) {
    return 'has-mobile';
  } else if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|/i)) {
    return 'has-mobile';
  } else {
    return 'no-mobile';
  }
};

/**
 * Browser supports user agent?
 * @param agent given user agent.
 * @returns boolean
 */
export const isUserAgent = (agent: string) => {
  return navigator.userAgent.indexOf(agent) !== -1;
}

/**
 * Get browser user agent.
 * @returns user agent name.
 */
export const getUserAgent = () => {
  const agents = ['Chrome', 'Edge', 'Safari', 'Firefox', 'Opera', 'OPR', 'MSIE'];
  for (const agent of agents)
    if (isUserAgent(agent))
      return agent == 'OPR' ? 'Opera' : agent;
  return "";
};