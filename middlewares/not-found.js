const notFoundMiddleware = async (req, res) => {
    res.send("Route does not exist")
}



export default notFoundMiddleware;


