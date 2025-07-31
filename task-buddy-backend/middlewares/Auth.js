import jwt from 'jsonwebtoken';

const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization'];
    if (!auth) {
        return res.status(401).json({ message: 'No token provided', success: false });
    }
    try {
        const declared = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err){
        return res.status(403).json({ message: 'Unauthorized, JWT token wrong or expired'});
    }
}

export default ensureAuthenticated;