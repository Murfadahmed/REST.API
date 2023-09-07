const getAllProduct = async (req,res)=>{

    res.status(200).json({msg:"i am get all item page"})
}
const getAllTesting = async (req,res)=>{

    res.status(200).json({msg:"i am get all item testing page"})
}



module.exports = {getAllProduct , getAllTesting}

// export default {getAllProduct , getAllTesting}