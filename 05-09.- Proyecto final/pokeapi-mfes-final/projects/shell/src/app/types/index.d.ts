export { };

declare global {
    interface Window {
        isHost: boolean;
        language: string;
        subscribeToAngularEvent: any;
    }
}