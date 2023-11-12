import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("MinuteMingle");
       const info = req.body;
       const users = await db
           .collection("userinfos")
           .find({"academicInfo.classes":{$regex: info.classes}})
           .toArray();

        res.status(200).send(users);
   } catch (e) {
       console.error(e);
       res.status(400).end();
   }
};