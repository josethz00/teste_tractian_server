"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
exports.default = {
    storage: multer_s3_1.default({
        bucket: process.env.AWS_BUCKET_NAME,
        s3: new aws_sdk_1.default.S3(),
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto_1.default.randomBytes(18, (err, hash) => {
                if (err)
                    cb(err);
                const filename = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, filename);
            });
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (_req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/pjpeg',
            'image/JPG',
            'image/PNG'
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error('Invalid file type.'));
        }
    },
};
//# sourceMappingURL=multer.js.map