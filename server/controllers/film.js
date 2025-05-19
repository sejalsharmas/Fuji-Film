import Film from '../models/Film.js'
const postFilm = async(req,res)=>{
     const {
        title,
        shortDescription,
        director,
        poster,
        year,
        genre,
        language,
        rating,
    } = req.body;

    const newFilm = new Film({
        title: title,
        shortDescription: shortDescription,
        director: director,
        poster: poster,
        year: year,
        genre: genre,
        language: language,
        rating: rating,
    });
    const savedFilm = await newFilm.save();
    return res.status(201).json({success:true, message:"Film Created", data:savedFilm})
}

const getFilm = async(req,res) =>{
    const films = await Film.find();
    return res.status(200).json({success:true, message:"Films Fetched", data:films})
}

const getFilmByTitle = async(req,res)=>{
    const {id} = req.params
    try{
    const film = await Film.findOne(req.params.id).select("-__v -createdAt -updatedAt");
     if(film){
        return res.status(200).json({success:true, message:"Film Fetched", data:film})
     }
     else{
        return res.status(404).json({success:false, message:"Film Not Found", data:null})
     }
    }
    catch(err){
        return res.status(400).json({success:false, message:"Error Fetching Film", data:null})
    }
};

const deleteFilmByTitle = async(req,res)=>{
    const title = req.params.title;
    try{
        const film = await Film.deleteOne({title:title});
        if(film){
            return res.status(200).json({success:true, message:"Film Deleted", data:film})
        }
        else{
            return res.status(404).json({success:false, message:"Film Not Found", data:null})
        }
    }
    catch(err){
        return res.status(400).json({success:false, message:"Error Deleting Film", data:null})
    }
};

const updateFilmById = async(req,res)=>{
    const {id} = req.params;
    
    const {
        title,
        shortDescription,
        director,
        poster,
        year,
        genre,
        language,
        rating,
    } = req.body;
 
    try{
    const updateFilm = await Film.updateOne({_id: id}, {
        title:title,
        shortDescription:shortDescription,
        director:director,
        poster:poster,
        year:year,
        genre:genre,
        language:language,
        rating:rating
    });
     return res.status(200).json({success:true, message:"Film info updated Successfully", data: {
        title:title,
        shortDescription:shortDescription,
        director:director,
        poster:poster,
        year:year,
        genre:genre,
        language:language,
        rating:rating
     }})
}catch(err){
    return res.status(400).json({success:false, message:"Error Updating Film", data:null})
}
};

const updateFilmRatingByTitle = async(req,res)=>{
    const {title} = req.params;
    const {rating} = req.body;
    try{
        const updateFilmRating = await Film.updateOne({title:title}, {rating:rating})
        return res.status(200).json({success:true, message:"Film Rating Updated Successfully", data: updateFilmRating})
    }
    catch(err){
        return res.status(400).json({success:false, message:"Error Updating Film Rating", data:null})
    }
}

export {
    postFilm,
    getFilm,
    getFilmByTitle,
    deleteFilmByTitle,
    updateFilmById,
    updateFilmRatingByTitle
}