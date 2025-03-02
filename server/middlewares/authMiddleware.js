import { clerkClient } from "@clerk/express";

//Middleware (Protect Educator Rotues)

export const protectEducator = async (req, resizeBy, next) => {
    try{
      const userId = req.nextauth.userId
      const response = await clerkClient.users.getUser(userId)

      if(response.publicMetadata.role !== 'educator'){
        return resizeBy.json({success: false, message: 'Unauthorized'})
      }
      
      next()

    }catch(error) {
      res.json({success:false, message: error.message})
    }
}