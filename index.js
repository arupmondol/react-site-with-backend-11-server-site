const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://arup:2fU52nH-@B5$9*b@cluster0.hqrrriv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
  try{
    const serviceCollection = client.db('tour').collection('services');
    app.get('/services',async(req,res) =>{
     const query = {};
     const cursor = serviceCollection.find(query);
     const services = await cursor.toArray();
     res.send(services);
    })
  }
  finally{

  }
}

run().catch(err => console.error(err))



app.get('/', (req, res) =>{
  res.send('server running')
})

app.listen(port, () =>{
  console.log(`server running on port ${port}`)
});