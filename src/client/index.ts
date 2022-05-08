export interface ClientOptions {
  executablePath:string
}

export class Client {
  private options:ClientOptions;

  constructor(options:ClientOptions){
    this.options = options;
  }

  public async launch():Promise<void>{
    console.log("启动");
  }
  
}