export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const handleHashNavigation = () => {
  const hash = window.location.hash;
  if (hash) {
    const elementId = hash.substring(1); // Remove the '#'
    setTimeout(() => {
      smoothScrollTo(elementId);
    }, 100); // Small delay to ensure page is loaded
  }
};
