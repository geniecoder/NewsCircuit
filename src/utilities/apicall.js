import Axios from 'axios';
export const GetApiRequest=(url)=>{
    console.log(`GetApiRequest url: ${url}`)
    return Axios.get(url).then(response=>{
        if(response.status===200){
            return response.data;

        }else{
            return null;
        }
    }).catch(error=>{
        console.log(`error: ${error}`);
    })
}