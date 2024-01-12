import React from 'react'
import Container from '../components/Container'
import icon1 from '../assets/images/phone-icon.png'
import { MobileHeader } from '../components/Header'
import Card from '../components/cards/Card'

type Props = {}

function Page5({ }: Props) {
    return (
        <div className="flex flex-col gap-16 sm:pt-9 px-3 sm:px-0">
            <MobileHeader />
            <Card title='Oglaševanje' icon={icon1}
                p1='To je pravo mesto za vse, ki iščejo odlično ekipo za razvoj izdelkov. Ne oklevajte in pustite e-pošto, pokličite telefon ali preprosto izpolnite obrazec.'
                imgAltElement={
                    <div className="h-full w-full relative flex justify-center flex-col gap-4">
                        <span className="text-xl font-bold">Pošljite nam sporočilo!</span>
                        <form method="POST" className="flex flex-col gap-4">
                            <div className="w-full grid grid-cols-2 gap-4">
                                <input className="px-3 py-2 rounded-2xl sm:text-xl framer-formspark-input border border-primary text-black" type="text" name="name" placeholder="Ime" />
                                <input className="px-3 py-2 rounded-2xl sm:text-xl framer-formspark-input border border-primary text-black" type="email" name="email" placeholder="Email" />
                            </div>
                            <textarea className="framer-formspark-input border border-primary px-3 py-2 rounded-2xl sm:text-xl text-black min-h-[200px]" placeholder="Sporočilo" name="message"></textarea>
                            <div>
                                <input type="submit" value="Pošlji" className="hover:bg-gray-200 duration-300 px-3 py-2 rounded-2xl sm:text-xl appearance-none w-full leading-1.4em outline-none border-none border-radius-17px padding-10px font-inter-regular font-weight-600 bg-white cursor-pointer text-black z-1" />
                            </div>
                        </form>
                    </div>
                }
            >
                <div className='flex flex-col gap-3'>
                    <span className="text-xl font-bold">Stopite v stik z nami</span>
                    <div className='flex flex-col text-sm text-[#FFF]'>
                        <span>grovagency@gmail.com</span>
                        <span>+386 041 470 627</span>
                    </div>
                </div>
            </Card>

        </div>
    )
}




export default Page5