const ex = module.exports;

ex.save = async(model)=>{
    try{
        return await model.save();
    }
    catch(err){throw err}
}

ex.deleteOne = async(model, params)=>{
    try{
        return await model.deleteOne(params);
    }
    catch(err){throw err}
    
}

ex.findOne = async(model, params)=>{
    try{
        //let query = model.where(params);
    return await model.findOne(params);
    }
    catch(err){throw err}
   
}

ex.update = async(model, conditons, updates)=>{
    
    try{
      return  await model.updateOne(conditons,updates);
    }catch(err){throw err}
    
}