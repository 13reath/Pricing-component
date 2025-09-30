// Button.tsx
interface ButtonProps {
    children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
    return (
        <button className="bg-[hsl(227,35%,25%)] text-[hsl(226,100%,87%)] text-xs font-extrabold px-12 m-2 py-3 rounded-full hover:text-white transition-colors duration-200">
            {children}
        </button>
    );
}
