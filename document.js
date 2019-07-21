//MongoDB INSERT statements

db.mongo_exercises.insert({ "title": "Star Wars", "writer": "George Lucas", "year": 1977, "actors": [ "Mark Hamill", "Harison Ford", "Carrie Fisher", "Peter Chushing", "James Earl Jones" ] })
db.mongo_exercises.insert({ "title": "Raiders of the Lost Ark", "writer": "George Lucas", "year": 1981, "actors": [ "Harison Ford" ] })
db.mongo_exercises.insert({ "title": "Fight Club", "writer": "Chuck Palahniuk", "year": 1999, "actors": [ "Brad Pitt", "Edward Norton" ] })
db.mongo_exercises.insert({ "title": "Pulp Fiction", "writer": "Quentin Tarantino", "year": 1994, "actors": [ "John Travolta", "Uma Thurman" ] })
db.mongo_exercises.insert({ "title": "Inglorious Bastards", "writer": "Quentin Tarantino", "year": 2009, "actors": [ "Brad Pitt", "Diane Kruger", "Eli Roth" ] })
db.mongo_exercises.insert({ "title": "The Hobbit: An Unexpected Journey", "writer": "J.R.R. Tolkein", "year": 2012, "franchise": "The Hobbit" })
db.mongo_exercises.insert({ "title": "The Hobbit: The Desolation of Smaug", "writer": "J.R.R. Tolkein", "year": 2013, "franchise": "The Hobbit" })
db.mongo_exercises.insert({ "title": "The Hobbit: The Battle of the Five Armies", "writer": "J.R.R. Tolkein", "year": 2012, "franchise": "The Hobbit", "synopsis": "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness." })
db.mongo_exercises.insert({ "title": "Pee Wee Herman's Big Adventure", "writer": "Phil Hartman", "year": 1985 })
db.mongo_exercises.insert({ "title": "Avatar" })

//MongoDB QUERY Statements

db.movies.find({})
db.movies.find({"writer": "Quentin Tarantino"})
db.movies.find({"actors": "Brad Pitt"})
db.movies.find({"franchise": "The Hobbit"})
db.movies.find({"year": {$gt: 1990, $lt:2000} })
db.movies.find({$or: [{"year": {$gt: 2010}}, {"year": {$lt:2000}}] })

//MongoDB UPDATE Statements
db.movies.updateOne({"title": "The Hobbit: An Unexpected Journey", "writer": "J.R.R. Tolkein", "year": 2012, "franchise": "The Hobbit"}, { $set: { "synopsis": "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." } })
db.movies.updateOne({"title": "The Hobbit: The Desolation of Smaug", "writer": "J.R.R. Tolkein", "year": 2013, "franchise": "The Hobbit"}, { $set: { "synopsis": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." } })
db.movies.updateOne({"title": "Pulp Fiction", "writer": "Quentin Tarantino", "year": 1994}, { $set: { "actors": [ "John Travolta", "Uma Thurman", "Samuel L. Jackson" ] } })

//MongoDB Text Search Statements
db.movies.find({synopsis: /Bilbo/})
db.movies.find({synopsis: /Gandalf/})
db.movies.find({ $and: [ {synopsis: /Bilbo/}, {synopsis: {$not:/Gandalf/}} ] } )
db.movies.find({ $or: [ {synopsis: /dwarves/}, {synopsis: /hobbit/} ] } )
db.movies.find({ $and: [ {synopsis: /gold/}, {synopsis: /dragon/} ] } )

//MongoDB DELETE Statements
db.movies.remove({"title": "Pee Wee Herman's Big Adventure"} )
db.movies.remove({"title": "Avatar"} )

//MongoDB INSERT Statements for users collection
db.users.insert({"username": "SallySmith", "first_name": "Sally", "last_name": "Smith"})
db.users.insert({"username": "JimmyHagen", "first_name": "Jimmy", "last_name": "Hagen"})

//MongoDB INSERT Statements for posts collection
db.posts.insert({"username": "SallySmith", "title": "Passes out at party", "body": "Wakes up early and cleans house"})
db.posts.insert({"username": "SallySmith", "title": "Buys a House", "body": "Living in a new neighborhood now"})
db.posts.insert({"username": "SallySmith", "title": "Reports a bug in your code", "body": "Sends you a Pull Request"})
db.posts.insert({"username": "JimmyHagen", "title": "Borrows something", "body": "Returns it when he is done"})
db.posts.insert({"username": "JimmyHagen", "title": "Borrows everything", "body": "The end"})
db.posts.insert({"username": "JimmyHagen", "title": "Forks your repo on github", "body": "Sets to private"})

//MongoDB INSERT Statements for comments collection
db.comments.insert({"username": "SallySmith", "comment": "Hope you got a good deal!", "post": "[post_obj_id]"})
db.comments.insert({"username": "SallySmith", "comment": "What's mine is yours!", "post": ObjectId("5d33aa517cab0263b6a0f9e9")})
db.comments.insert({"username": "SallySmith", "comment": "Don't violate the licensing agreement!", "post": ObjectId("5d33aad27cab0263b6a0f9eb")})
db.comments.insert({"username": "JimmyHagen", "comment": "It still isn't clean", "post": ObjectId("5d33aad27cab0263b6a0f9eb")})
db.comments.insert({"username": "JimmyHagen", "comment": "It still isn't clean", "post": ObjectId("5d33a9617cab0263b6a0f9e6")})
db.comments.insert({"username": "JimmyHagen", "comment": "Denied your PR cause I found a hack", "post": ObjectId("5d33aa057cab0263b6a0f9e8")})







