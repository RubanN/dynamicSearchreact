import axios from "axios"

const apifetch = async ()=>{
    try{
    let api = await axios.get
    ("https://jsonplaceholder.typicode.com/posts"
    );
    return api.data;
    }catch(err){
        return err
    }
};
export default apifetch
    