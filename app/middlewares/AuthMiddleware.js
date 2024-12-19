import {TokenDecode} from "../utility/tokenUtility.js";

export default (req, res, next) => {

    let token=req.headers['token']
    let decoded=TokenDecode(token)

    if (decoded===null){
        res.status(401).send({status:"fail",message:"Unauthorized"})
    }

    else {
        // phoneNumber,user_id pick from decoded token
        let phoneNumber=decoded.phoneNumber;
        let user_id=decoded.user_id;

        // phoneNumber,user_id add with request header
        req.headers.phoneNumber=phoneNumber;
        req.headers.user_id=user_id;

        next()
    }
}