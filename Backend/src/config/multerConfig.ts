// File upload through multer
import multer from "multer";

// store in memory
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

export default upload;
