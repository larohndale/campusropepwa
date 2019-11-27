

export interface ITrending {
    _id?: string;
    client?: {
        logoUrl: string;
        name: string;
    };
    topic: {
        name: string;
    };
    youtubeUrl: string;
    Headline: string;
    State: string;
}

