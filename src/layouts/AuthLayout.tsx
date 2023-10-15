import Logo from "../components/Logo";

interface LayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({children}: LayoutProps) {
  return (
    <section className="p-[53px_10px] sm:p-[53px_30px] bg-[url('/src/assets/bg.png')]">
      <div className="mb-[21.27px]">
        <Logo />
      </div>
      <div>
        {children}
      </div>
    </section>
  )
}