import Dexie from "dexie";
import { apartments } from "./data";
const db = new Dexie("ApartmentFinder");
db.version(1).stores({
  apartments: `picture, rent, size, location, bedroom`,
});

export default db;
