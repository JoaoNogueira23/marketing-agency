import PostMain from "./PostMain/PostMain";


export default function PostPage() {
    return(
        <>
            <PostMain 
            sectionTitle="Why choose us?"
            catchphrase="What  Makes Agency Different?"
            data={[
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
            ]}
            />

            <PostMain 
            sectionTitle="About Us"
            catchphrase="For Agencies Who Love Their Clients"
            data={
                [
                    {
                        paragraph: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here`
                    }
                ]
            }

            reverse={true}
            />
            
            <PostMain 
            sectionTitle="About Us"
            catchphrase="For Brands Who Want Results"
            data={
                [
                    {
                        paragraph: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here`
                    }
                ]
            }
            />
        </>
    )
}