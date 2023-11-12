import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("MinuteMingle");
       const info = req.body;
       const user = await db
           .collection("userinfos")
           .findOne({"contactInfo.email":info.username})

        res.status(200).json(user);
   } catch (e) {
       console.error(e);
       res.status(400).end();
   }
};