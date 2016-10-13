
export interface Article {
    title: string;
}

export interface AppState {
    url:string;
    urlErrorMessage:string;    
    fetching: boolean;
    title: string;
    articles: Article[];    
}
