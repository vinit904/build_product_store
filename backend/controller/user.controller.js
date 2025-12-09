import '../models/connect.model.js'
import productModel from '../models/prodect.model.js'
import url from "url"

import rs from "randomstring";
import jwt from "jsonwebtoken";
// import { json } from 'body-parser';



export const save = async (req, res) => {
  const allUser = await productModel.find();
  const l = allUser.length
  let id = l == 0 ? 1 : (allUser[l - 1]._id) + 1;
  const productDetail = { ...req.body, "_id": id, "date": Date() };
  try {
    await productModel.create(productDetail)
    res.status(200).json({ "status": "ok" });
  } catch (error) {
    res.status(500).json({ "status": false });
  }

}

// export const login = async (req,res) => {
//     const userDetail = (req.body);
//     const user = await productModel.find(userDetail);

//   if(user.lengh > 0){
//     const payload = user[0].email;
//     const key = rs.generate(50);
//     const token = jwt.sign(payload,key);
//     res.status(200).json({"status":true, "Token": token,});
//   }else{
//     res.status(500).json({"status": false, "Token":"error"});
//   }
// }

export const deleteProduct = async (req, res) => {

  try {
    const condition_obj = JSON.parse(req.body.condition_obj)

    const productfind = await productModel.findOne(condition_obj);

    if (productfind) {
      const delpro = await productModel.deleteOne(condition_obj);
      if (delpro) {
        res.status(200).json({ "status": "ok" }, { "message": "product deleted" });
      } else {
        res.status(500).json({ "status": "false" })
      }
    } else {
      res.status(404).json({ "status": "Resourse not found" });
    }
  } catch (error) {
    res.status(500).json({ "status": "Server Error" })
  }

}

export const fetch = async (req, res) => {
  let obj_id = url.parse(req.url, true).query.obj_id;
  if (obj_id != undefined) {
    obj_id = JSON.parse(obj_id);
  }
  else {
    obj_id = {}
  }

  const productDetail = await productModel.find(obj_id);

  if (productDetail != 0) {
    res.status(200).json({ "status": true, productDetail })
  } else {
    res.status(500).json({ "status": "Resourse not found" })
  }
}

export const update = async(req , res) =>{
  try{
    const condition_obj = JSON.parse(req.body.condition_obj);
    const productfind = await productModel.findOne(condition_obj);
    if(productfind){
      const prodectUpdate = await productModel.updateOne(condition_obj,{$set : JSON.parse(req.body.content_obj)});
      if(prodectUpdate){
        res.status(200).json({"status":"content updated"})
      }else{
        res.status(500).json({"status":"product not updated error"})
      }
      
    }else{
      res.status(404).json({"status":"Resourse not found"});
    }
  }catch(error){
    res.status(500).json({"status":"server error"})
  }
  
}
