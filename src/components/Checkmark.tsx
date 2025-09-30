// Checkmark.tsx
interface CheckmarkProps {
    children: React.ReactNode;
}

export default function Checkmark({ children }: CheckmarkProps) {
    return (
        <div className="flex items-center gap-4">
            <img src="/images/icon-check.svg" alt="" className="w-[10px] h-2" />
            <span className="text-grayish-blue text-xs">{children}</span>
        </div>
    );
}
