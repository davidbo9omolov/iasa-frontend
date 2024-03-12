export interface AppState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: {
        name: string;
        email: string;
        token: string;
    };
}