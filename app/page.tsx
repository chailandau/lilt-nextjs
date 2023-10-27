import Page from '@/templates/Page';

export const revalidate = 1;
export default async function Home() {
    return <Page slug='home' />;
}
