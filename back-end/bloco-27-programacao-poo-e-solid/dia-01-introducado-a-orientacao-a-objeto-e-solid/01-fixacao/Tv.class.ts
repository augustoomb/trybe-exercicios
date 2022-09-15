// npx ts-node index.ts
class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn():void {
    console.log(`A marca da tv é: ${this._brand}`);
    console.log(`O tamanho da tv é: ${this._size}`);
    console.log(`A resolução da tv é: ${this._resolution}`);
    console.log(`As conexões disponíveis são: ${this._connections}`);
  }

  get connectedTo():string | undefined {
    return this._connectedTo;
  }

  set connectedTo(newConnectedTo: string | undefined) {
    if (!newConnectedTo || this._connections.includes(newConnectedTo)) {
      this._connectedTo = newConnectedTo;
    } 
    else {
      console.log('Sorry, connection unavailable!')
    }
  }
}

const tv1 = new Tv('LG', 60, "1920x1080", ['HDMI', 'Diplay Port', 'VGA']);

tv1.turnOn();

tv1.connectedTo = "uma nova conexao";

console.log(tv1.connectedTo);