const validateBody= (req,res,next) =>{
    const{body} = req;

    if(body.title == undefined){
       return res.status(400).json({message: 'campo não definido'})
    }

    if(body.title == '') {
       return res.status(400).json({message: 'o campo está vazio'})
    }

    next();
};

module.exports = {
    validateBody,
}