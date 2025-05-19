import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { getHealth, getHome, getNotFound } from './controllers/other.js';
import { getFilm, postFilm, getFilmByTitle, deleteFilmByTitle, updateFilmById, updateFilmRatingByTitle} from './controllers/film.js';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async()=>{
 const conn = await mongoose.connect(process.env.MONGO_URI);
 if(conn){
    console.log("MongoDB Connected");
 }
}

app.get("/",getHome );
app.get("/health", getHealth);

app.post("/films", postFilm);
app.get("/films", getFilm);
app.get("/films/:title",getFilmByTitle);
app.delete("/films/:title", deleteFilmByTitle);
app.put("/films/:id", updateFilmById);
app.patch("/films/:ratings/:title", updateFilmRatingByTitle);


app.use(getNotFound);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});