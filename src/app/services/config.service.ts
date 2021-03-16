export class ConfigService {
  private _api: string;

  static set(property:any, value:any){
    this['_' + property] = value;
  }

  static get(property:any){
    return this['_' + property];
  }
}
