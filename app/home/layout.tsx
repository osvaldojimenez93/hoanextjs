import SideNav from '@/app/components/home/sidenav';
import Header from '@/app/components/home/header';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-64 md:h-full md:flex-shrink-0">
        <SideNav />
      </div>
      <div className="flex-grow overflow-y-auto">
        <Header />       
        <div className="p-3 md:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}