
const findUser = async (req, res) => {
    const {userId} = req.body;
    const user = Usuario.findById();


}

module.exports = findUser;