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
    "CREATE TABLE IF NOT EXISTS rare_birds (obs_id VARCHAR PRIMARY KEY NOT NULL, region VARCHAR, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)"
  );
  return db;
}

export async function getObsIds(region: string) {
  const db = await connect();
  const rows = await db.all(
    `select obs_id from rare_birds where region='${region}';`
  );
  return new Set(rows.map((row: { obs_id: string }) => row.obs_id));
}

export async function insertObsIds(ids: string[], region: string) {
  const query =
    "INSERT OR IGNORE INTO rare_birds (obs_id, region) values (?, ?)";
  const db = await connect();
  await ids.forEach(async (id) => await db.run(query, id, region));
}
