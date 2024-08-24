/**
 * Check if current browser is touchable?
 * @returns true or false.
 */
export const isTouch = () => {
  return (("ontouchstart" in document.documentElement)) ? true : false;
}

/**
 * Check if current browser is mobile?
 * @returns true or false.
 */
export const isMobile = () => {
  if (window?.innerWidth <= 768) {
    return true;
  } else if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|/i)) {
    return true;
  } else {
    return false;
  }
};

/**
 * Check if current broswer has an user agent?
 * @param agent user agent.
 * @returns true or false.
 */
export const isUserAgent = (agent: string) => {
  return navigator.userAgent.indexOf(agent) !== -1;
}

/**
 * Get current browser user agent.
 * @returns user agent.
 */
export const getUserAgent = () => {
  const agents = ["Chrome", "Edge", "Safari", "Firefox", "Opera", "OPR", "MSIE"];
  for (const agent of agents)
    if (isUserAgent(agent))
      return agent == "OPR" ? "Opera" : agent;
  return "";
};