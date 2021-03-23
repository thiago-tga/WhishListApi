const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://dbGoStore:dbGoStore@go-storevtex.dyvhs.mongodb.net/dbGoStore?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    useUnifiedTopology: true,
  });

async function run(){
    try{
        await client.connect();
        
        const database = client.db("whishlist");
        const produtos = database.collection("produtos");

        const query = { title: "bolsa"};
        const produto = await produtos.findOne(query)

        console.log(produto)
    }
    finally{
        await client.close();
    }
}

run().catch(console.dir)