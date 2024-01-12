import React, { useEffect } from 'react'
import bannerImg from '../assets/images/GUI_1 1.png'
import uperBoxImg1 from '../assets/images/Cursor in Window.svg'
import uperBoxImg2 from '../assets/images/Drafting Compass.svg'
import uperBoxImg3 from '../assets/images/Post Ads.svg'
import lowerBoxImg1 from '../assets/images/Guarantee.svg'
import lowerBoxImg2 from '../assets/images/Stopwatch.svg'
import lowerBoxImg3 from '../assets/images/openai-logo 5.svg'
import lowerBoxImg4 from '../assets/images/Handshake Heart.svg'
import bottomBannerImg1 from '../assets/images/talent_verse_slika.png'
import bottomBannerImg2 from '../assets/images/AI_image_slika.png'
import bottomBannerImg3 from '../assets/images/one_home_slika.png'
import openAiLogo from '../assets/images/openai-logo 6.svg'
import { MobileHeader } from '../components/Header'
import Container from '../components/Container'
import { Link, useLocation } from 'react-router-dom'

type Props = {}

function Home({ }: Props) {
    const location = useLocation()
    useEffect(() => {
        if (window.location.hash) {
            var targetElement = document.getElementById(window.location.hash.substring(1));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location])
    return (
        <div className="flex flex-col gap-16 sm:gap-24">
            <MobileHeader />
            <Container>
                <div className='lg:h-[calc(742px-80px)] flex justify-center items-center'>
                    <div className="flex flex-col sm:flex-row px-3 sm:px-0 justify-between sm:items-stretch items-center gap-9 sm:gap-6 sm:mt-6">
                        <div className="sm:w-1/2 flex flex-col gap-4">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center sm:text-start">IDEJE V REALNOST Z <span className="text-primary">UMETNO INTELIGENCO</span></h1>
                            <div className="flex gap-6 w-full justify-center sm:justify-start">
                                <Link to={"/kontakt"}>
                                    <div className="my-btn text-center px-3 w-[113px] py-2 rounded-lg text-black bg-white font-bold">Nov projekt</div>
                                </Link>
                                <Link to={"/o-nas"}>
                                    <div className="my-btn text-center px-3 w-[113px] py-2 rounded-lg bg-[#E5313A] hover:bg-primary font-bold">O nas</div>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <img src={bannerImg} />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div id="storitve" className="hidden sm:flex flex-col sm:flex-row gap-6 justify-between">
                    <UpperBox title="SPLETNI RAZVOJ" to="/spletni-razvoj" src={uperBoxImg1} placeholder="več" />
                    <UpperBox title="GRAFIČNA PODOBA" to="/graficna-podoba" src={uperBoxImg2} placeholder="več" />
                    <UpperBox title="OGLAŠEVANJE" to="/oglasevanje" src={uperBoxImg3} placeholder="več" />
                </div>
            </Container>
            <Container>
                <div className="flex justify-center px-3 sm:px-0">
                    <div className='max-w-[810px] flex flex-col gap-9 sm:gap-10'>
                        <div className="flex flex-col justify-center items-center gap-4 border border-white w-full rounded-lg py-6 pt-12">
                            <div className="flex flex-col gap-4 sm:px-12 ">
                                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center">Zakaj izbrati nas?</span>
                                <span className="text-center sm:text-xl">Smo digitalna agencija, ki se ukvarja s celotnim procesom izdelave, vzdrževanja in oglaševanja podjetij ter znamk. Naše spletne strani so obiskovalcem poznane po visokih hitrostih nalaganja in modernimi metodami za izboljšanje prodaje. </span>
                            </div>
                            <button className="border grow border-primary rounded-full whitespace-nowrap px-3 py-1 text-xs sm:text-base flex justify-center items-center">GROV uporablja model umetne inteligence GPT-4 | <img src={openAiLogo} /></button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-9 sm:gap-10">
                            <LowerBox title="Visoka kvaliteta" src={lowerBoxImg1} />
                            <LowerBox title="Hitri in odzivni" src={lowerBoxImg2} />
                            <LowerBox title="Imamo prednost" src={lowerBoxImg3} />
                            <LowerBox title="Svetujemo" src={lowerBoxImg4} />
                            <div className="border-2 border-white sm:min-w-[231px] sm:col-span-2 min-h-[166px] flex gap-6 justify-center items-center p-4 rounded-lg font-bold">
                                <div className="sm:max-w-[648px] gap-6 items-center flex flex-col sm:flex-row sm:justify-between grow">
                                    <div className="flex flex-col">
                                        <span className="text-6xl font-bold text-primary">60</span>
                                        <span className="text-xl w-[150px]">+Narejenih strani</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-6xl font-bold text-primary">1000</span>
                                        <span className="text-xl w-[150px]">+Socialnih objav</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-6xl font-bold text-primary">100</span>
                                        <span className="text-xl w-[150px]">+Zadovoljnih strank</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div id="projekti" className="flex flex-col px-3 sm:px-0 gap-9 sm:gap-12">
                    <BottomBanner src={bottomBannerImg1} placeholder="odpri" title="Talent Verse" />
                    <BottomBanner src={bottomBannerImg2} placeholder="odpri" title="AI Image" reverse />
                    <BottomBanner src={bottomBannerImg3} placeholder="odpri" title="One home" />
                </div>
            </Container>
        </div>
    )
}

const UpperBox = ({ title, src, to, placeholder }:
    {
        title: string
        src: string
        placeholder: string
        to: string
    }) => {
    return (
        <div className="border-2 border-white sm:min-w-[231px] flex flex-col gap-6 justify-center items-center p-4 rounded-lg font-bold">
            <div className="p-4 rounded-full bg-primary shadow-lg shadow-[#FF2E2E]">
                <img src={src} />
            </div>
            <span className="text-xl">{title}</span>
            <Link to={to}>
                <div className="my-btn px-3 w-[123px] py-2 rounded-lg bg-primary font-bold text-center">{placeholder}</div>
            </Link>
        </div>
    )
}


const LowerBox = ({ title, src }:
    {
        title: string
        src: string
    }) => {
    return (
        <div className="border-2 border-white sm:min-w-[231px] flex flex-col gap-6 justify-center items-center p-4 py-6 rounded-lg font-bold">
            <div className="p-4 rounded-full bg-primary shadow-lg shadow-[#FF2E2E]">
                <img src={src} />
            </div>
            <span className="text-xl sm:text-2xl">{title}</span>
        </div>
    )
}

const BottomBanner = ({ src, title, placeholder, reverse }: {
    src: string
    placeholder: string
    title: string
    reverse?: boolean
}) => {
    return (
        <div className={`flex flex-col ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} grow w-full gap-4 sm:gap-6`}>
            <div className="sm:min-w-1/2 lg:min-w-[543px] max-h-[340px] flex justify-center bg-[#1F1F1F] grow rounded-md">
                <div className='w-[333px] h-[333px] flex justify-center items-center'>
                    <img src={src} className="w-[333px] h-auto" />
                </div>
            </div>
            <div className="flex sm:justify-center sm:items-center w-full">
                <div className="flex flex-col gap-4 font-bold">
                    <span className="text-4xl">{title}</span>
                    <button className="px-3 w-[123px] py-2 rounded-lg bg-primary font-bold flex items-center justify-start text-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M8.16666 5.25L11.6667 8.75L8.16666 12.25" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                            <path d="M2.33334 2.3335V6.41683C2.33334 7.03567 2.57917 7.62916 3.01676 8.06675C3.45434 8.50433 4.04784 8.75016 4.66668 8.75016H11.0833" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                        </svg>
                        {placeholder}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home