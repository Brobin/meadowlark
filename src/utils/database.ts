import { exit } from "process";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const DB_NAME = "rare_birds.db";

export async function connect() {
  const db = await open({
    filename: DB_NAME,
    driver: sqlite3.Database,
  });
  await db.exec(
    "CREATE TABLE IF NOT EXISTS rare_birds (obs_id CARCHAR PRIMARY KEY NOT NULL)"
  );
  return db;
}

export async function getObsIds() {
  const db = await connect();
  const rows = await db.all("select obs_id from rare_birds;");
  return new Set(rows.map((row: { obs_id: string }) => row.obs_id));
}

export async function insertObsIds(ids: string[]) {
  console.log(ids);
  const query = "INSERT OR IGNORE INTO rare_birds (obs_id) values (?)";
  const db = await connect();
  await ids.forEach(async (id) => await db.run(query, id));
}
