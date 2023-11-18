import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//main page
app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/meals`);
        console.log(response);
        res.render("index.ejs", {meals: response.data});
    } 
    catch (error) {
        res.status(500).json({message:"error fetching data"});
    }
});


//Route to render the edit page
app.get("/new",  (req,res)=>{
    res.render("modify.ejs" , {heading : "New Meal" , submit: "Create Meal"});
});

app.get("/edit/:id", async (req,res)=>{
    try {
        const response = await axios.get(`${API_URL}/meals/${req.params.id}`);
        console.log(response.data);
        res.render("modify.ejs",{
         heading : "Edit Meal",
         submit : "Update Meal",
         meal : response.data,
    }); 
    } 
    catch (error) {
        res.status(500).json({message:"error fetching data"});
    }
});

//new meal
app.post("/api/meals", async (req, res) => {
    try {
      const response = await axios.post(`${API_URL}/meals`, req.body);
      console.log(response.data);
      res.redirect("/");
    } catch (error) {
      res.status(500).json({ message: "Error creating post" });
    }
  });
  
  // Partially update a post
  app.post("/api/meals/:id", async (req, res) => {
    console.log("called");
    try {
      const response = await axios.patch(
        `${API_URL}/meals/${req.params.id}`,
        req.body
      );
      console.log(response.data);
      res.redirect("/");
    } catch (error) {
      res.status(500).json({ message: "Error updating post" });
    }
  });
  

//delete meal
app.get("/api/meals/delete/:id", async (req, res) => {
  try {
    await axios.delete(`${API_URL}/meals/${req.params.id}`);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "Error deleting post" });
  }
});



app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});