import  {model, Schema} from 'mongoose'
 const filmSchema = new Schema({
     title: String,
     shortDescription: String,
     director: String,
     poster:String,
     year: Number,
     genre: String,
     language:String,
     rating: Number 
 },{timestamps: true});

 const Film = model('Film', filmSchema);

 export default Film