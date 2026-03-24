type Props = {
  children: React.ReactNode;
  showNav?: boolean;
};

export default function PageWrapper({ children, showNav = false }: Props) {
  return (
    <main className={`bg-bg ${showNav ? 'pb-6' : ''}`}>
      <div className="px-6 pt-12 pb-8">{children}</div>
    </main>
  );
}
