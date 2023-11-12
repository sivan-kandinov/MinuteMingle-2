import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("MinuteMingle");
       const info = req.body
       const match = await db
           .collection("Matches")
           .findOne({ sender: info.sender, receiver: info.receiver})

        if(match === null){
            res.status(200).send({found:false})
        }

        const contactInfo = await db.
            collection("userdatas")
            .findOne({username:info.receiver})

        res.status(200).send({found:true, receiverInfo:contactInfo});
   } catch (e) {
       console.error(e);
       res.status(400).end();
   }
};