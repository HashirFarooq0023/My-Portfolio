import { useState, useEffect, useCallback } from 'react';

export type RouteState =
  | { type: 'home'; section?: string }
  | { type: 'project'; slug: string };

function parseRoute(): RouteState {
  const path = window.location.pathname;
  const hash = window.location.hash;

  // 1. Check path e.g. /projects/asanshipping
  const pathMatch = path.match(/^\/projects\/([a-zA-Z0-9_-]+)/);
  if (pathMatch) {
    return { type: 'project', slug: pathMatch[1] };
  }

  // 2. Check hash e.g. #/projects/asanshipping or #projects/asanshipping
  const hashMatch = hash.match(/^#\/?projects\/([a-zA-Z0-9_-]+)/);
  if (hashMatch) {
    return { type: 'project', slug: hashMatch[1] };
  }

  // 3. Otherwise home
  const section = hash.replace(/^#/, '');
  return { type: 'home', section: section || undefined };
}

export function useRouter() {
  const [route, setRoute] = useState<RouteState>(() => parseRoute());

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseRoute());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateToProject = useCallback((slug: string) => {
    window.history.pushState(null, '', `/projects/${slug}`);
    setRoute({ type: 'project', slug });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const navigateToHome = useCallback((sectionId?: string) => {
    const targetUrl = sectionId ? `/#${sectionId}` : '/';
    window.history.pushState(null, '', targetUrl);
    setRoute({ type: 'home', section: sectionId });
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  }, []);

  return {
    route,
    navigateToProject,
    navigateToHome
  };
}
