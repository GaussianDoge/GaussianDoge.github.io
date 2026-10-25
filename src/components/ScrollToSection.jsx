import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToSection() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (!('scrollRestoration' in window.history)) {
      return undefined;
    }

    const previousSetting = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = previousSetting;
    };
  }, []);

  useLayoutEffect(() => {
    const section = new URLSearchParams(location.search).get('section');
    const activeElement = document.activeElement;
    const rootStyle = document.documentElement.style;
    const previousScrollBehavior = rootStyle.scrollBehavior;
    let scrollBehaviorRestored = false;

    rootStyle.scrollBehavior = 'auto';

    const restoreScrollBehavior = () => {
      if (!scrollBehaviorRestored) {
        rootStyle.scrollBehavior = previousScrollBehavior;
        scrollBehaviorRestored = true;
      }
    };

    if (activeElement instanceof HTMLElement) {
      activeElement.blur();
    }

    const moveToRoutePosition = () => {
      if (section) {
        const target = document.getElementById(section);
        if (target) {
          target.scrollIntoView({ block: 'start', behavior: 'auto' });
          return;
        }
      }

      document.querySelector('.site-header')?.scrollIntoView({
        block: 'start',
        behavior: 'auto',
      });
      if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0;
      }
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    };

    moveToRoutePosition();
    const animationFrame = window.requestAnimationFrame(moveToRoutePosition);
    const delayedScroll = window.setTimeout(() => {
      moveToRoutePosition();
      restoreScrollBehavior();
    }, 50);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(delayedScroll);
      restoreScrollBehavior();
    };
  }, [location.key, location.pathname, location.search]);

  return null;
}
