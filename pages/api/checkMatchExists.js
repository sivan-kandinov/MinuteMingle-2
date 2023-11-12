import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("MinuteMingle");
       const info = req.body
       console.log(info.sender)
       const match = await db
           .collection("Matches")
           .findOne({ sender: info.sender, receiver: info.receiver})

        if(match === null){
            res.status(200).send({found:false})
        }else{
            const contactInfo = await db.
            collection("userdatas")
            .findOne({username:info.receiver})

            const currentUser = await db.collection("studyBuddies").findOne({user:info.sender})
            const matchedUser = await db.collection("studyBuddies").findOne({user:info.receiver})
            console.log(currentUser)
            if(currentUser === null){
                db.collection("studyBuddies").insertOne({user:info.sender,matches:[info.receiver]})
            }else{
                currentUser.matches.push(info.receiver)
                db.collection("studyBuddies").updateOne({"user":info.sender},{$set:{"matches":currentUser.matches}})
            }

            if(matchedUser === null){
                db.collection("studyBuddies").insertOne({user:info.receiver,matches:[info.sender]})
            }else{
                matchedUser.matches.push(info.sender)
                db.collection("studyBuddies").updateOne({"user":info.receiver},{$set:{"matches":matchedUser.matches}})
            }
            res.status(200).send({found:true, receiverInfo:contactInfo});
        }
   } catch (e) {
       console.error(e);
       res.status(400).end();
   }
};