import { ReactElement } from "react"
import Container from "../Container"

const Card = ({ title, src, icon, p1, p2, p3, p4, children, imgAltElement }:
    {
        title: string
        src?: string
        icon: string
        p1: string
        p2?: string
        p3?: string
        p4?: string
        children?: ReactElement | ReactElement[]
        imgAltElement?: ReactElement
    }) => {
    return (
        <Container>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div>
                    <div className="h-[61px] w-[61px] flex justify-center items-center rounded-full bg-primary shadow-lg shadow-[#FF2E2E]">
                        <img className="h-[33px] w-[33px]" src={icon} />
                    </div>
                </div>
                <div className="flex flex-col gap-6 sm:mt-3 w-full">
                    <span className="text-4xl font-bold gap-6 text-center sm:text-start">{title}</span>
                    <div className="flex flex-col sm:flex-row gap-6 lg:gap-16 items-center justify-between">
                        <div className='flex flex-col gap-6 sm:w-3/5 sm:max-w-[561px] text-sm'>
                            <p className='text-justify'>{p1}</p>
                            <p className='text-justify'>{p2}</p>
                            {p3 && <p className='text-justify'>{p3}</p>}
                            {p4 && <p className='text-justify'>{p4}</p>}
                            {children && children}
                        </div>
                        {
                            src && <div>
                                <img className="h-[223px] w-[223px]" src={src} />
                            </div>
                        }
                        {
                            imgAltElement && imgAltElement
                        }
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Card