import { APP_NAME } from '@/shared/config';

interface IUseCookie<T> {
    value: T;
    setCookieValue: (value: T) => void;
}

export function useCookie<T>(key: string, initialValue: T): IUseCookie<T> {
    const keyCookie = `${APP_NAME}_${key}`;

    const getCookieValue = () => {
        const cookie = document.cookie
            .split('; ')
            .find(row => row.startsWith(`${keyCookie}=`));

        return cookie ? JSON.parse(cookie.split('=')[1]) : initialValue;
    };

    const value: T = getCookieValue();

    function setCookieValue(value: T): void {
        document.cookie = `${keyCookie}=${JSON.stringify(value)}; path=/`;
    }

    return { value, setCookieValue };
}
