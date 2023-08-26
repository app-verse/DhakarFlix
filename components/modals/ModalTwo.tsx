import { FaInstagram } from 'react-icons/fa'
import { BiMoviePlay } from 'react-icons/bi'
import { VscHistory } from 'react-icons/vsc'
import { MdTravelExplore } from 'react-icons/md'
import { GiAmpleDress } from 'react-icons/gi'
import { FaBowlFood } from 'react-icons/fa6'
import { useRef, useEffect } from 'react'

interface ModalTwoProps {
    greet: boolean,
    greetings: any,
}

const ModalTwo: React.FC<ModalTwoProps> = ({ greet, greetings }) => {
    const modalRef = useRef(null);
    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            // @ts-ignore
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                greetings()
            }
        };

        if (greet) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [greet]);

    return (
        <div
            className={`modal-blur inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center
                        ${greet ? "fix-modal" : "hidden"} flex-wrap z-50`}
        >
            <div className="modal rounded-lg py-16 pb-0 pt-8" ref={modalRef} >
                <div className='.content-wrapper'>
                    <div className="modal-heading">
                        <div className='mr-5'></div>
                        <div className='close-btn cursor-pointer' onClick={greetings}>X</div>
                    </div>
                    <div className='modal-body'>
                        <div className='details-two'>
                            <div className='movie-description text-left'>
                                <h1 className='text-red-400 font-bold'>I am Geyi,</h1>
                                <p>a culinary historian, fashion enthusiast, cinephile, and avid traveler.
                                    <span>
                                        <BiMoviePlay className='inline text-red-400 text-lg ml-1 mr-1' />
                                        <FaBowlFood className='inline text-slate-400 text-md mr-1' />
                                        <MdTravelExplore className='inline text-blue-400 text-xl mr-1' />
                                        <VscHistory className='inline text-green-400' />
                                        <GiAmpleDress className='inline text-white text-lg mr-1' />
                                    </span>
                                </p>
                            </div>
                            <div className='modal-image-cover mb-2'>
                                <img
                                    className='modal-image-two h-full'
                                    src="/images/geyii2.jpg" alt=""
                                />
                                <a
                                    className='insta-link text-md flex justify-end items-center gap-1 cursor-pointer mr-1'
                                    target='_blank'
                                    href="https://www.instagram.com/meformusic8/">
                                    <FaInstagram className='text-pink-600 text-md shadow-lg font-bold' />
                                    <span className='text-sm'>Follow</span>
                                </a>
                            </div>
                        </div>
                        <div className='bottom-part text-left mb-0 mt-1'>
                            <p>
                                <span className='font-bold text-green-400'>I love to explore </span>
                                new cultures and cuisines, and I am always looking for new experiences.
                                I am also a bit of a fashionista, and I enjoy dressing up and looking my best.
                                I am always up for a new adventure, and I love to travel the world.
                                My good friend, who is a software developer, thoughtfully gifted me this web app that 
                                provides users with information and trailer videos about movies, anime, and TV series. 
                                The app is built using Next.js, TypeScript, and Tailwind CSS, and it leverages the TMDB API and Jikan REST API
                            </p>
                            <div className='mb-0 mt-3'>
                                <img
                                    src="/images/Nextjs-logo.png" alt=""
                                />
                            </div>
                            <div className='mt-4 mb-0'>
                                <img
                                    src="/images/Tailwind-logo.png" alt=""
                                />
                            </div>
                            <div className='mt-4 mb-0 flex justify-between gap-4'>
                                <div className=''>
                                    <img
                                        src="/images/Typescript.png" alt=""
                                        height={100} width={200}
                                    />
                                </div>
                                <div className=''>
                                    <img
                                        src="/images/Tmdb.png" alt=""
                                        height={100} width={200}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalTwo