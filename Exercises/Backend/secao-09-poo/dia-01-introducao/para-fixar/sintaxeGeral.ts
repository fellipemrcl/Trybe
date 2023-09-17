class Tv {
  private brand: string;
  private size: number;
  private resolution: string;
  private connections: string[];
  private connectedTo: string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string[]
  ) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn() {
    console.log(
      `Brand: ${this.brand} / Size: ${this.size} / Res: ${this.resolution} / Conn: ${this.connections}`
    );
  }

  get connectedToGetter() {
    return this.connectedTo;
  }

  set connectedToSetter(newValue: string) {
    const isNewValueIncludedInConnections = this.connections.includes(newValue);
    if (!isNewValueIncludedInConnections) {
      console.log("Sorry, connection unavailable!");
    }
    this.connectedTo = newValue;
  }
}

const TV1 = new Tv("Samsung", 50, "4K", [
  "HDMI",
  " DisplayPort",
  "WiFi",
  "Bluetooth",
]);
TV1.turnOn();

TV1.connectedToSetter = "WiFi";
console.log(TV1.connectedToGetter);
