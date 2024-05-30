import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export const authGuard = (to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const isAuthenticated = false;

    if (to.path === '/not-found' || (to.path === '/sign-in' && !isAuthenticated)) {
        next();
    } else if (!isAuthenticated) {
        next({ path: '/sign-in' });
    } else if (to.path === '/sign-in' && isAuthenticated ) {
        next({ path: '/' });
    } else {
        next();
    }
};
