export interface objectPostType {
    title?: string;
    paragraph: string;
}

export interface PropsPost {
    reverse?: boolean;
    data: objectPostType[];
    sectionTitle: string;
    catchphrase: string;
}

export interface Post {
    title: string
    resume: string
    rawText: string[]
    publishedDate: string
    postId: string
    acthor: string
}