import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-neutral-900 font-sans">
      <Navbar />
      <main className="flex-1">
        <Outlet /> 
      </main>
    </div>
  );
}
