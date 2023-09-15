class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo: string;

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
}

const TV1 = new Tv("Samsung", 50, "4K", ["HDMI", " DisplayPort"]);
TV1.turnOn();
