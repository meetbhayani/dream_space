interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">{children}</div>
  );
}
