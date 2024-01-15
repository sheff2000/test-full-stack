export const errorOperation = (err, req, res, next) => {
    console.error(err.debug); 
    // тут надо придумать логгирование - в файл или монгу?? 
    // err.toString();
    if (process.env.NODE_ENV === 'production') {
        res.status(err.status || 500).json({ message: err.message || "Internal server error" });
    } else {
        res.status(err.status || 500).json({ message: err.message, stack: err.stack, debug: err.debug });
    }
};

