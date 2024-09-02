import IconVideo from "@/components/Icons/VideoIcon";
import './logoSponsor.sass'

type PropsLogoSponsor = {
    title: string;
}

export default function LogoSponsor({title}: PropsLogoSponsor) {
    return(
        <div className="logo-sponsor">
            <IconVideo />
            <h2>{title}</h2>
        </div>
    )
}