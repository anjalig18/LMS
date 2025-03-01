import { Webhook} from "svix";
import User from "../models/User.js";

export const clerkWebhooks = async (req, res) => {
 try{
   const Whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)
   await Whook.verify(JSON.stringify(req.body) , {
     "svix-id" : req.headers["svix-id"],
     "svik-timestamp" : req.headers["svik-timestamp"],
     "svik-signature": req.headers["svik-signature"]
   })
   const {data,type} = req.body

    switch(type) {
      case 'user.created': {
        const userData = {
          _id: data.id,
          email: data.email_address[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        }
        await User.create(userData)
        res.json({})
        break;
      }
      case 'user.created' : {
        const userData = {
          email: data.email_address[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        } 
        await User.findByIdAndUpdate(data.id, userData)
        res.json({})
        break;
      }
       
      case 'user.deleted' : {
         await User.findByIdAndDelete(data.id)
         res.json({})
         break;
      }
      default:
      break;
    }
 }catch(error){
   res.json({success : false, message: error.message})
 }
}