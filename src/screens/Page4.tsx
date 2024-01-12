import Container from '../components/Container'
import icon1 from '../assets/images/Cursor in Window.svg'
import image1 from '../assets/images/square-logo.png'
import { MobileHeader } from '../components/Header'
import Card from '../components/cards/Card'
import { Link } from 'react-router-dom'

type Props = {}

function Page4({ }: Props) {
    return (
        <div className="flex flex-col gap-16 sm:pt-9 px-3 sm:px-0">
            <MobileHeader />
            <Card title='O nas' icon={icon1} src={image1}
                p1='Smisel naše agencije sega onkraj običajnih okvirov digitalnega ustvarjanja. Smo pionirji, prva digitalna agencija, ki izpopolnjuje svoje storitve z napredno umetno inteligenco. Pri oblikovanju spletnih strani, grafičnih podob in oglaševanj presežemo ustaljene meje, saj uporabljamo napredno AI tehnologijo, ki prinaša inovacijo in učinkovitost v vsak projekt.'
                p2='Naša strast je v ustvarjanju inovativnih, dovršenih in funkcionalnih digitalnih rešitev. Z našo edinstveno uporabo umetne inteligence smo vodilni v ustvarjanju spletnih mest, ki se ponašajo z intuitivno uporabniško izkušnjo, grafičnih podob, ki očarajo ter oglaševanj, ki se nepozabno vtisnejo v spomin vaše ciljne publike.'
                p3='Skozi naš proces dela se odlikuje stalna prilagodljivost in nenehno izboljševanje. Umetna inteligenca nam omogoča, da natančno razumemo vaše potrebe in cilje, s čimer ustvarimo prilagojene in visoko personalizirane rešitve. Vsak projekt je zasnovan z namenom, da presega pričakovanja in zagotavlja izjemne rezultate.'
                p4='Zavezani smo k ustvarjanju inovativnih digitalnih izkušenj z umetno inteligenco, ki niso le navdihujoče, temveč tudi funkcionalne in usmerjene v doseganje vaših poslovnih ciljev. Dobrodošli v agenciji, kjer se tradicija sreča s prihodnostjo – kjer umetna inteligenca spremeni način, kako dojemamo in oblikujemo digitalni svet."' />
            <Container>
                <div className='flex justify-center'>
                    <div className='px-3 sm:px-0 bottom-banner rounded-lg w-full lg:w-[905px] h-[231px] flex justify-center items-center'>
                        <div className='flex flex-col w-fit text-3xl font-bold gap-4 items-center'>
                            <span>Začnite nov projekt</span>
                            <Link to="/kontakt" >
                                <div className="my-btn px-3 py-1 rounded-lg text-base text-black bg-white font-bold">Kontakt</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}




export default Page4