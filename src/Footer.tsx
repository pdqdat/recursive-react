import { MdOutlineArrowOutward } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="mx-auto">
            <a
                href="https://github.com/pdqdat/recursive-react"
                target="_blank"
                className="flex items-center gap-1 font-bold hover:text-hover"
            >
                <IoLogoGithub className="size-6" />
                Github
                <MdOutlineArrowOutward />
            </a>
        </footer>
    );
};

export default Footer;
