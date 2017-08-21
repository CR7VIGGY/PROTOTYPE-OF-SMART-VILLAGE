import pymongo as p


client = p.MongoClient('mongodb://qwe:qwe@ds129333.mlab.com:29333/abc')
db = client['abc']
post={ "longitude":23.64,
        "latitude":34.56,
        "weight":4,}
db.users.insert(post, safe==True)
