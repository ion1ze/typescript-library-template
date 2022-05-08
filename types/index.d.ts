interface ClientOptions {
    executablePath: string;
}
declare class Client {
    private options;
    constructor(options: ClientOptions);
    launch(): Promise<void>;
}

export { Client, ClientOptions };
