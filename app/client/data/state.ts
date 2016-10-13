
export interface Article {
    title: string;
}

export interface AppState {
    url:string;
    urlErrorMessage:string;
    shouldFetch: boolean;
    fetching: boolean;
    title: string;
    articles: Article[];    
}
