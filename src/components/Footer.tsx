import React from 'react'
import logo from '../assets/images/logo_bel_2 1.svg'
import instagram from '../assets/images/instagram-icon.png'
import phone from '../assets/images/phone-icon.png'
import inIcon from '../assets/images/in-icon.png'
import mail from '../assets/images/mail.png'
import Container from './Container'
import { Link } from 'react-router-dom'

type Props = {}

function Footer({ }: Props) {
    return (
        <div className="pt-12">
            <div className='border-[#545454] border' />
            <div className="py-9">
                <Container>
                    <div className="flex flex-col-reverse sm:flex-row items-center sm:gap-6 sm:justify-between w-full gap-16">
                        <div className="flex flex-col gap-3">
                            <div>
                                <Link to="/home" >
                                    <img src={logo} className="w-[219px]" />
                                </Link>
                            </div>
                            <span className='text-xs font-bold text-center'>© Copyrght Grov Agency {new Date().getFullYear()}</span>
                        </div>
                        <div className="grid sm:grid-cols-2 sm:flex-row gap-3 text-xs sm:text-sm sm:gap-4">
                            <div className="flex gap-2 items-center">
                                <img src={instagram} className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" />
                                <span>@grov.agency</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={phone} className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" />
                                <span>+386 041 470 627</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={inIcon} className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" />
                                <span>@grov.agency</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={mail} className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" />
                                <span>grovagency@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Footer