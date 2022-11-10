import { AppPage, appPages } from '../components/Menu';

export const usePage = (name: string): AppPage | { icon: null } =>
    appPages.find((p) => p.title === name) || { icon: null };
