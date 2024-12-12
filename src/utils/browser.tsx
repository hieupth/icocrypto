export const getTouch = () => {
  return (("ontouchstart" in document.documentElement)) ? 'has-touch' : 'no-touch';
}


export const getMobile = () => {
  if (window?.innerWidth <= 768) {
    return 'has-mobile';
  } else if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|/i)) {
    return 'has-mobile';
  } else {
    return 'no-mobile';
  }
};


export const isUserAgent = (agent: string) => {
  return navigator.userAgent.indexOf(agent) !== -1;
}


export const getUserAgent = () => {
  const agents = ["Chrome", "Edge", "Safari", "Firefox", "Opera", "OPR", "MSIE"];
  for (const agent of agents)
    if (isUserAgent(agent))
      return agent == "OPR" ? "Opera" : agent;
  return "";
};