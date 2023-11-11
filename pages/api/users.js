import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("MinuteMingle");

       const users = await db
           .collection("UserApplications")
           .find({})
           .limit(10)
           .toArray();

       res.json(users);
   } catch (e) {
       console.error(e);
   }
};