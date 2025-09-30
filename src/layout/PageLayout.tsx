interface PageLayoutProps {
    children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="w-full min-h-screen bg-light-grayish-blue flex gap-1 flex-col items-center p-4 font-family-Manrope text-[15px]">
            {children}
        </div>
    );
}
