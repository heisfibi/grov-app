import React from 'react'
import Container from '../components/Container'
import icon1 from '../assets/images/Cursor in Window.svg'
import image1 from '../assets/images/web-development.png'
import icon2 from '../assets/images/openai-logo 5.svg'
import image2 from '../assets/images/our-advantage.png'
import { MobileHeader } from '../components/Header'
import Card from '../components/cards/Card'

type Props = {}

function Page1({ }: Props) {
    return (
        <div className="flex flex-col gap-16 sm:pt-9 px-3 sm:px-0">
            <MobileHeader />
            <Card title='Spletni razvoj' icon={icon1} src={image1}
                p1='V ekipi grov ne gre samo za pisanje kode; skupaj z vami želimo vzpostaviti strateško partnerstvo, ki vam bo pomagalo krmariti v nenehno razvijajočem se digitalnem svetu. Ker se zavedamo pomena dobrega sodelovanja, je naš pristop je zasnovan tako, da se lahko gladko integriramo z vašo ekipo in skupaj oblikujemo pravo okolje za razvoj programskih rešitev, ki jih potrebujete.'
                p2='V ekipi se osredotočamo na principe vitkega razvoja, s poudarkom na zmanjševanju odpadkov in povečanju vrednosti, kar nam omogoča da se osredotočimo na razvoj funkcij, ki resnično koristijo vašemu podjetju. Naša zaveza redni komunikaciji s tedenskim tehničnim obveščanjem in pogostimi sestanki nam omogoča, da sproti prejemamo povratne informacije in prilagajamo naše delo. Prioritiziramo delo z roko v roki z vašo ekipo, pri čemer se osredotočamo na pogosto komunikacijo za hitro reševanje morebitnih pomislekov in zagotavljanje, da končni izdelek izpolnjuje zahteve in vizijo vašega podjetja.' />
            <Card title='Naša prednost' icon={icon2} src={image2}
                p1='Naša spletna stran za razvoj spletnih strani izstopa zaradi integracije najnovejših tehnologij, kot je AI (umetna inteligenca). To omogoča boljšo analitiko, personalizacijo, avtomatizacijo nalog, izboljšano varnost in hitrejši razvoj. Integracija teh tehnologij nam pomaga doseči cilje hitreje in učinkoviteje, kar prinaša boljše rezultate za naše stranke.'
                p2='Pri našem razvoju uporablajmo OPEN AI tehnologijo, model GPT-4. Pomaga nam hitreje in bolj učinkovito reševati probleme ter s tem hitreje pridemo do željenih rezultatov.' />

        </div>
    )
}




export default Page1