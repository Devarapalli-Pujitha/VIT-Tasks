let database = "VITinternship";//database name should not contain any spaces and special characters
use(database); //use -> It helps to switch database
// db.createCollection("Students");//used to create collections in mongodb
// db.Students.insertOne({
//     name: "Sachin",
//     age: 20,
//     course: "CSE",
// });//used to insert one data into the collection 
//for comments press ctrl+/
db.Students.insertOne({
    name: "Dhoni",
    age: 24,
    course: "CSE",
})
db.Students.find();//used to retrieve data
db.Students.deleteOne({name: "Sachin"});//used to delete one data
db.Students.insertMany([
    {
        name: "virat",
        age: 18,
        course: "CSE",
    },
    {
        name: "Rohit",
        age: 22,
        course: "ece", 
    },
    {
        name: "Rabbit",
        age: 20,
        course: "civil",
        fees: 20000,
    }
])//used to insert more than one data at a time
db.Students.deleteMany({
    name: "Rohit",
});//used to delete one or more data from the collection
//according to the filter option given
db.Students.updateOne({name: "virat"},{ $set: {age: 25}});
db.Students.find();
//node -v -. current version of nodejs installed in your computer