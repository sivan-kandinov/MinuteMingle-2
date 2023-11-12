import clientPromise from "../../lib/mongodb";

export default async (_, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("MinuteMingle");

    const users = await db.collection("userinfos").find().toArray();

    res.json(users[Math.floor(Math.random() * users.length)]);
  } catch (e) {
    console.error(e);
  }
};
