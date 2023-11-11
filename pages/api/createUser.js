import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("MinuteMingle");
       console.log(req.body)
       const info = req.body
       const users = await db
           .collection("LoginInfo")
           .insertOne({ _username: info.username, password:info.password})

       res.json(users);
   } catch (e) {
       console.error(e);
   }
};