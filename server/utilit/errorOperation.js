const errorOperation = (err, req, res, next) => {
    console.error(err); 
    // тут надо придумать логгирование - в файл или монгу?? 
    // err.toString();
    res.status(err.status || 500).json({ message: err.message || "Internal server error" });
};

export default errorWork;