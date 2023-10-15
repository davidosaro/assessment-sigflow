import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({children}: LayoutProps) {
  return (
    <section className="flex relative">
      <Sidebar />
      <div className="w-full">
        {children}
      </div>
    </section>
  )
}