// Coi modelli (termine concettuali) tipi e interfacce (tramite tecnico typescript) definisco COME sono fatte le cose

export type Blog = {
    posts: Post[]
    postCategories: PostCategory[]
}

export type PostCategory = {
    id: string;
    title: string;
}

export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
    date: number;
    category: string;
}
