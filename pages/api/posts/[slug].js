import data from "../../../utils/data";


// api/posts/1
export default function handler(req, res){
    const { slug } = req.query;
    const { posts }  = data;

    if(slug){
        const post = posts.find( value => value.id == slug)
        return res.status(200).json(post)
    }

    return res.status(404).json({ error : "Post Not Found"})

}