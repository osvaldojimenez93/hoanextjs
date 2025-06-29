
import { Welcome, LatestNews, CommunityForms, CommunityResources } from '@/app/components/home';

export default async function Page() {
  return (
    <main>
      <Welcome />
      <LatestNews />
      <CommunityForms />
      <CommunityResources />
    </main>
  );
}