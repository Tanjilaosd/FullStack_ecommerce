import {v2 as cloudinery} from 'cloudinary'

const connectCloudinary = async () => {
    cloudinery.config({
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDINARY_API_KYE,
        api_secret:process.env.CLOUDINARY_SECRET_KYE
    })

}
export default connectCloudinary