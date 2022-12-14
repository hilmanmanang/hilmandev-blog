export interface Post {
    _createdAt: string,
    _id: string,
    _rev: string
    title:  string,
    author: {
        name: string,
        image: string
    },
    slug: {
        current: string
    }
}