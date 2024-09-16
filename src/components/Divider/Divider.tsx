import './divider.sass'
import LogoSponsor from './pieces/LogoSponsor';

type ObjectSponsor = {
    title: string;
}

export default function DividerSection() {

    const sponsors: ObjectSponsor[] = [
        {
            title: 'SmartFinder'
        },
        {
            title: 'Zoomerr'
        },
        {
            title: 'SHELLS'
        },
        {
            title: 'WAVES'
        },
        {
            title: 'ArtVenue'
        },

    ]

    return(
        <div className="container-divider">
            <div className="content-divider">
                {sponsors.map((obj: ObjectSponsor)=> (
                    <LogoSponsor title={obj.title} key={obj.title}/>
                )
                )}
            </div>
        </div>
    )
}