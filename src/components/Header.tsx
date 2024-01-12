import Container from './Container'
import logo from '../assets/images/logo_bel_2 1.svg'
import { Link } from 'react-router-dom'
type Props = {}

function Header({ }: Props) {
    return (
        <header className='header hidden sm:block'>
            <Container preClassName="h-full" className='h-full'>
                <div className='sm:flex items-center justify-between hidden h-full'>
                    <Link to="/home" >
                        <img src={logo} className="w-[115px] h-[29px]" />
                    </Link>
                    <div className='flex gap-3 sm:gap-6 lg:gap-9 text-lg font-bold items-center'>
                        <Link to="/home/#projekti" >
                            <span className="hover:underline">Projekti</span>
                        </Link>
                        <Link to="/home/#storitve" >
                            <span className="hover:underline">Storitve</span>
                        </Link>
                        <Link to="/kontakt" >
                            <div className="my-btn px-6 py-1 bg-[#E5313A] rounded-lg hover:bg-primary hover:transform()">Kontakt</div>
                        </Link>
                    </div>
                </div>
            </Container>
            <div className='border-[#545454] border' />
        </header>
    )
}

export const MobileHeader = () => {
    return (
        <nav className="header sm:hidden px-3">
            <Container preClassName="h-full">
                <div className='flex items-center justify-between h-full'>
                    <Link to="/home" >
                        <img src={logo} className="w-[115px] h-[29px]" />
                    </Link>
                </div>
            </Container>
        </nav>
    )
}

export default Header