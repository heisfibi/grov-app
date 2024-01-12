import React from 'react'
import Container from '../components/Container'
import icon1 from '../assets/images/Post Ads.svg' 
import image1 from '../assets/images/advertising.png'
import icon2 from '../assets/images/Handshake Heart.svg'
import image2 from '../assets/images/we-advice.png'
import { MobileHeader } from '../components/Header'
import Card from '../components/cards/Card'

type Props = {}

function Page3({ }: Props) {
    return (
        <div className="flex flex-col gap-16 sm:pt-9 px-3 sm:px-0">
            <MobileHeader />
            <Card title='Oglaševanje' icon={icon1} src={image1}
                p1='Razvijamo in izvajamo oglaševalske strategije, ki so v koraku s trendi današnjega digitalnega sveta. S svojim inovativnim pristopom in poznavanjem najnovejših trendov v digitalnem marketingu se osredotočamo na oglaševanje preko platform, kot sta TikTok in Facebook.'
                p2='Za nas so TikTok in Facebook oglaševalski kanali, ki jih intenzivno izkoriščamo zaradi njune velike dosegljivosti in vpliva na ciljno občinstvo. Zavedamo se, da je ustvarjanje privlačne in relevantne vsebine ključno za uspeh na teh platformah. Zato naša ekipa kreativcev in marketinških strokovnjakov tesno sodeluje pri ustvarjanju oglaševalskih kampanj, ki so prilagojene tem platformam in odzivne na njihove specifičnosti.'
                p3='Za nas ni le pomembno, da sledimo trendom, ampak jih tudi aktivno oblikujemo. S stalnim spremljanjem in prilagajanjem strategij, ki temeljijo na analizah rezultatov, zagotavljamo, da so naše kampanje na TikToku in Facebooku relevantne, privlačne in učinkovite.' />
            <Card title='Svetujemo' icon={icon2} src={image2}
                p1='Pri svetovanju in izvedbi projekta se osredotočamo na celoten proces, ki vključuje načrtovanje, izvedbo in nadzor. Naš pristop k svetovanju je celovit, kar pomeni, da smo vaš zanesljiv partner skozi celoten razvojni cikel.'
                p2='Začnemo s temeljitim razumevanjem vaših ciljev in potreb. Nato oblikujemo strategijo, ki je prilagojena vašemu podjetju in specifičnostim projekta. Svoje strokovno znanje in izkušnje vključujemo v vsak korak, pri čemer vas vodimo skozi proces od začetka do končnega rezultata.'
                p3='Naša ekipa se angažira v nudenju priporočil, nasvetov in strokovnih mnenj, ki temeljijo na najboljših praksah in aktualnih trendih na področju, s katerim se ukvarjamo. Z vzpostavitvijo odprtih komunikacijskih kanalov skupaj s konstantnim spremljanjem napredka projekta se zagotavlja, da ste vedno vključeni in obveščeni o vsaki fazi.' />

        </div>
    )
}




export default Page3