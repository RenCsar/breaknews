
export type TUserLike = {
    created: string,
    userId: string,
    userName: string
}

export type TlikeProps = {
    likes: TUserLike[] | null;
}