/**
 * Detect if browser has touch supported?
 * @returns "has-touch" or "no-touch".
 */
export const hasTouch = () => {
  return (("ontouchstart" in document.documentElement)) ? 'has-touch' : 'no-touch';
}

/**
 * Detect if browser has mobile supported?
 * @returns "has-mobile" or "no-mobile".
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
 * Verify if browser is an user agent.
 * @param agent user agent name to be verified.
 * @returns boolean.
 */
export const isUserAgent = (agent: string) => {
  return navigator.userAgent.indexOf(agent) !== -1;
}

/**
 * Get user agent of browser.
 * @returns user agent name.
 */
export const getUserAgent = () => {
  const agents = ["Chrome", "Edge", "Safari", "Firefox", "Opera", "OPR", "MSIE"];
  for (const agent of agents)
    if (isUserAgent(agent))
      return agent == "OPR" ? "Opera" : agent;
  return "";
};