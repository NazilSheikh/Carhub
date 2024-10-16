import axios from "axios";

const FormatResult=(resp)=>{
    let result=[];
    let finalresult=[];
    resp.forEach((item)=>{
        const listingId = item.carListing?.id;
        if(!result[listingId])
        {
            result[listingId]={
                car:item.carListing,
                images:[]
            }
        }
        if(item.carImages)
        {
            result[listingId].images.push(item.carImages)
        }

    })
    result.forEach((item)=>{
        finalresult.push({
            ...item.car,
            images:item.images
        })
    })
    return finalresult ;  

}


// 1)const createsendbirduser we have used the aXios which is http service provider npm intall axios
// 1 )GENERALLY HERE WE RE CREATE CAR OWNER USER ID (SENDBIRD)
/// TO VIST THE INFO OF CAR OWNER AND ITS DETAIL PLEASE IN INSPECT GO TO NETWORK SECTION AND CLICK ON USER 
const SendBirdApplicationId = import.meta.env.VITE_SENDBIRD_APP_ID;
const SenddBirdApiToken = import.meta.env.VITE_SENDBIRD_APP_TOKEN;

const CreateSendBirdUser=(userId , nickName , profileUrl)=>{
  return axios.post('https://api-'+SendBirdApplicationId+'.sendbird.com/v3/users' ,{
    user_id:userId ,
    nickname:nickName,
    profile_url:profileUrl,
    issue_access_token:false 
  },{
    headers:{
        'Content-Type':'application/json',
        'Api-Token':SenddBirdApiToken
    }
  });
}

// 3) we are NOW  creating A CHANNEL : 
const CreateSendBirdChannel=(users, title)=>{
    
    return axios.post('https://api-'+SendBirdApplicationId+'.sendbird.com/v3/group_channels',{

        user_ids:users,
        is_distinct:true,
        name:title,

    } ,{
        headers:{
            'Content-Type':'application/json',
            'Api-Token':SenddBirdApiToken
        }
    })

    }


export default{
    FormatResult,
    CreateSendBirdUser,
    CreateSendBirdChannel
}

