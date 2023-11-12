import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("MinuteMingle");
       const info = req.body
       const currentMatches= await db
           .collection("studyBuddies")
           .findOne({user: info.username},)
        res.status(200).send(currentMatches.matches);
   } catch (e) {
       console.error(e);
       res.status(400).end();
   }
};