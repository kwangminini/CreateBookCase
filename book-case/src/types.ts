export type LoginReqType = {
    email: string;
    password: string;
}

export interface AuthState { //export 제거하면 나는 오류 확인 및 블로깅
    token : string | null;
    loading: boolean;
    error: Error | null;
}
export interface BooksState {
    books: BookType[] | null;
    loading : boolean;
    error: Error | null;
}
export interface RootState { 
    auth: AuthState;
    books: BooksState;
}

export interface BookType{}