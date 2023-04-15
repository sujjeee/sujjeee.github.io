import {
    TwitterIcon,
    EmailIcon,
    GithubIcon,
    LinkedInIcon,
} from "./Icons";


interface SocialLinkProps {
    href: string;
}

export default function SocialIcons() {
    return (
        <div className="flex flex-wrap justify-between sm:justify-start space-x-0 sm:space-x-7">
            <SocialLink href="https://github.com/sujjeee" />
            <SocialLink href="https://twitter.com/sujjeeee" />
            <SocialLink href="https://linkedin.com/in/sujjeee" />
            <SocialLink href="mailto:surajgupta.college@gmail.com" />
        </div>
    );
}

const SocialLink = ({ href }: SocialLinkProps) => (
    <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className="text-gray-600 hover:bg-gray-700 hover:text-white p-3 rounded-full transition-colors group"
        aria-label={href}
    >
        {(() => {
            if (href.includes("github"))
                return <GithubIcon className="w-8 h-8" />;
            if (href.includes("linkedin"))
                return <LinkedInIcon className="w-8 h-8" />;
            if (href.includes("twitter"))
                return <TwitterIcon className="w-8 h-8" />;
            if (href.includes("mailto"))
                return <EmailIcon className="w-8 h-8" />;
        })()}
    </a>
);
