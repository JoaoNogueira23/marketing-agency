import './postmain.sass'


type objectPostType = {
    title: string;
    paragraph: string;
}

export default function PostMain() {
    const dataPosts = [
        {
            title: 'Experience',
            paragraph: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here`
        },
        {
            title: 'Passion',
            paragraph: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here`
        },
        {
            title: 'Expertise',
            paragraph: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here`
        },
        {
            title: 'Customer Focus',
            paragraph: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here`
        }
    ]

    return(
        <div className="post-container">
            <div className="image-post">
                Imagem
            </div>

            <div className="content-post">
                <h4 className='post-title medium'>Why choose us?</h4>

                <h1 className='post-title larger'>What  Makes Agency Different?</h1>

                <div className="describe-services">
                    {dataPosts.map((obj: objectPostType) => (
                        <div className="service">
                        <h4>{obj.title}</h4>

                        <p>
                        {obj.paragraph}
                        </p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}