import { useState } from "react";

import { MdChevronRight } from "react-icons/md";
import { FaFolder, FaFileAlt } from "react-icons/fa";

import Footer from "./Footer";

type Folder = {
    name: string;
    folders?: Folder[];
};

const folders: Folder[] = [
    {
        name: "Home",
        folders: [
            {
                name: "Movies",
                folders: [
                    {
                        name: "Series",
                        folders: [
                            {
                                name: "Breaking-Bad.mp4",
                            },
                            {
                                name: "Better-Call-Saul.mp4",
                            },
                            {
                                name: "Hospital-Playlist.mp4",
                            },
                        ],
                    },
                    {
                        name: "Crime",
                        folders: [
                            {
                                name: "The-Silence-of-the-Lambs.mp4",
                            },
                            {
                                name: "Se7en.mp4",
                            },
                            {
                                name: "The-Bone-Collector.mp4",
                            },
                            {
                                name: "Knives-Out.mp4",
                            },
                        ],
                    },
                    {
                        name: "2000's",
                        folders: [],
                    },
                    {
                        name: "Comedy",
                        folders: [
                            {
                                name: "Hitch.mp4",
                            },
                            {
                                name: "Grown-Ups.mp4",
                            },
                            {
                                name: "Click.mp4",
                            },
                            {
                                name: "3-Idiots.mp4",
                            },
                        ],
                    },
                ],
            },
            {
                name: "Music",
                folders: [
                    {
                        name: "Hip Hop",
                        folders: [],
                    },
                    {
                        name: "Pop",
                        folders: [
                            {
                                name: "Birds.mp3",
                            },
                        ],
                    },
                    {
                        name: "Alternative Rock",
                        folders: [
                            {
                                name: "Numb.mp3",
                            },
                            {
                                name: "Wrecked.mp3",
                            },
                            {
                                name: "Whatever-It-Takes.mp3",
                            },
                        ],
                    },
                    {
                        name: "80's",
                        folders: [
                            {
                                name: "Cheri-Cheri-Lady.mp3",
                            },
                            {
                                name: "You're-My-Heart-You're-My-Soul.mp3",
                            },
                            {
                                name: "Brother-Louie.mp3",
                            },
                            {
                                name: "Touch-By-Touch.mp3",
                            },
                        ],
                    },
                ],
            },
            {
                name: "Pictures",
                folders: [
                    {
                        name: "Vacation",
                        folders: [
                            {
                                name: "New York",
                                folders: [],
                            },
                            {
                                name: "London",
                                folders: [],
                            },
                        ],
                    },
                    {
                        name: "Family",
                        folders: [],
                    },
                ],
            },
            {
                name: "Documents",
                folders: [],
            },
            {
                name: "README.md",
            },
            {
                name: "password.txt",
            },
        ],
    },
];

const App = () => {
    return (
        <main className="flex flex-col justify-between gap-8 h-screen p-4 md:p-8 max-w-lg mx-auto">
            <ul>
                {folders.map((folder, idx) => (
                    <Folder folder={folder} key={`${folder.name}-${idx}`} />
                ))}
            </ul>

            <Footer />
        </main>
    );
};

/**
 * Renders a folder and its nested subfolders recursively.
 *
 * @param {Object} props - The props object.
 * @param {Folder} props.folder - The folder object containing name and optional subfolders.
 *
 * @returns {JSX.Element} The JSX element representing a folder and its subfolders.
 */
const Folder = ({ folder }: { folder: Folder }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="my-1.5">
            <span className="flex items-center gap-1.5">
                {folder.folders && folder.folders.length > 0 && (
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <MdChevronRight
                            className={`size-4 text-gray-400 dark:text-gray-300 ${isOpen ? "rotate-90" : ""}`}
                        />
                    </button>
                )}

                {folder.folders ? (
                    <FaFolder className={`size-6 text-primary ${folder.folders.length === 0 ? "ml-[22px]" : ""}`} />
                ) : (
                    <FaFileAlt className="ml-[22px] size-6 text-gray-400 dark:text-gray-300" />
                )}

                <span className="hover:text-primary duration-200 ease-in-out font-semibold">{folder.name}</span>
            </span>

            {isOpen && folder.folders && (
                <ul className="pl-6">
                    {folder.folders.map((folder, idx) => (
                        <Folder folder={folder} key={`${folder.name}-${idx}`} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default App;
