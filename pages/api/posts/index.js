import data from "../../../utils/data";

export default function hanlder(req, res){
    const { posts } = data;
    if (posts) return res.status(200).json(posts);

    return res.status(404).json({ error : "Data Not Found"})
}