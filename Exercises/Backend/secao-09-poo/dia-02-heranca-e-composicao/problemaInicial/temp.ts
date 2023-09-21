abstract class Database {
  abstract connect(): void;
}

class MySQLDB extends Database {
  connect(): void {
    console.log("MySQL Database!");
  }
}

class MongoDB extends Database {
  connect(): void {
    console.log("MongoDB Database");
  }
}

function connectToDB(db: Database) {
    db.connect();
}

const db1 = new MySQLDB();
const db2 = new MongoDB();