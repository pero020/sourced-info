import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const email = req.query.email;

  let userData = await db.collection("users").findOne({email: email});

  res.json(userData);
  
}