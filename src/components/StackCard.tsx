import Image from "next/image";
import Link from "next/link";

interface ThingCardProps {
    title: string;
    background: string;
    icon: string;
    href: string;
}

export default function StackCard({
    title,
    background = "#2B5CEA",
    icon,
    href,
}: ThingCardProps) {
    return (
        <Link
            href={href}
            rel="noreferrer"
            target="_blank"
            className={`hover:bg-[${background}] p-2 rounded-xl text-gray-400 bg-gray-800 hover:shadow-xl transition-all flex items-center`}
        >
            <span
                className="inline-flex items-center justify-center w-8 h-8 md:w-11 md:h-11 bg-gray-800 rounded-lg mr-3 shrink-0"
                style={{ backgroundColor: background }}
            >
                <span className="relative w-4 h-4 md:w-6 md:h-6">
                    <Image
                        src={icon}
                        fill
                        alt={title}
                    />
                </span>
            </span>

            <h4 className="text-sm md:text-base lg:text-lg font-bold text-gray-200 truncate">
                {title}
            </h4>
        </Link>
    );
}
