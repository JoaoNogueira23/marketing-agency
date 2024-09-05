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