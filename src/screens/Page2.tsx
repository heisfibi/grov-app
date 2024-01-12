import React from 'react'
import Container from '../components/Container'
import icon1 from '../assets/images/Drafting Compass.svg' 
import image1 from '../assets/images/graphic-images.png'
import icon2 from '../assets/images/Guarantee.svg'
import image2 from '../assets/images/high-quality.png'
import { MobileHeader } from '../components/Header'
import Card from '../components/cards/Card'

type Props = {}

function Page2({ }: Props) {
    return (
        <div className="flex flex-col gap-16 sm:pt-9 px-3 sm:px-0">
            <MobileHeader />
            <Card title='Grafična podoba' icon={icon1} src={image1}
                p1='Pri oblikovanju grafične podobe vašega podjetja ne sledimo zgolj estetiki. Naš cilj je vzpostaviti globoko povezavo, ki presega zgolj vizualni vtis. Skupaj z vami si prizadevamo vzpostaviti trden most, ki združuje naše kreativne ideje z vašim poslanstvom, ustvarjajoč unikatno in izjemno grafično podobo.
                Naš pristop se osredotoča na oblikovanje minimalističnih, a izjemno funkcionalnih grafičnih rešitev. Zmanjšujemo nepotrebne elemente, hkrati pa povečujemo vrednost vsakega vizualnega aspekta, ki ga ustvarimo. Naša zavezanost redni komunikaciji s tedenskimi posodobitvami in pogostimi sestanki omogoča, da vaše povratne informacije sprejemamo v realnem času ter nenehno prilagajamo naše delo, usmerjeno v vaše želje in potrebe.'
                p2='Naša ustvarjalnost je vaša moč – skupaj ustvarjamo vizualne zgodbe, ki bodo odražale in krepile vašo blagovno znamko.' />
            <Card title='Visoka kvaliteta' icon={icon2} src={image2}
                p1='Naša predanost kakovosti je temeljni kamen vsakega projekta. Vsak končni izdelek, ki ga oblikujemo, je rezultat natančnega raziskovanja, premišljenega oblikovanja in skrbnega izvajanja. Sledimo najvišjim standardom industrije in izvajamo temeljite preglede kakovosti, da zagotovimo, da vsak grafični element ali oblikovani detajl popolnoma izpolnjuje vaše zahteve in pričakovanja.'
                p2='Naš cilj ni le ustvariti lepote, temveč tudi funkcionalnost. Vsak izdelek, ki ga dostavimo, je rezultat skrbnega načrtovanja in izvedbe, da bi zagotovili, da grafična podoba vašega podjetja ne le izstopa, ampak tudi učinkovito komunicira s ciljno publiko. Naša kakovost izdelkov ni zgolj obljuba, temveč osrednji del našega ustvarjalnega procesa, ki je namenjen zagotavljanju izjemnosti v vsakem vidiku grafične podobe vašega podjetja.' />

        </div>
    )
}




export default Page2