import SideNav from '@/app/ui/home/sidenav';
import Header from '@/app/ui/home/header';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="w-64 h-full flex-shrink-0">
        <SideNav />
      </div>
      <div className="flex-grow overflow-y-auto">
        <Header />       
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}