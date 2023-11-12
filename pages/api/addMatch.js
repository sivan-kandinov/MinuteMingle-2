import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("MinuteMingle");
       const info = req.body
       const users = await db
           .collection("Matches")
           .insertOne({ sender: info.sender, receiver:info.receiver, 
            senderContact: info.senderContact, receiverContact:info.receiverContact
        })
        res.status(200).end();
   } catch (e) {
       console.error(e);
       res.status(400).end();
   }
};