import { FileFilterCallback } from 'multer';
import crypto from 'crypto';
import multerS3 from 'multer-s3';
import aws from "aws-sdk";


export default {

    storage: multerS3({
        s3: new aws.S3(),
        bucket: 'uploadhelpseniors',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb)=>{
          crypto.randomBytes(18, (err, hash)=>{
              if(err) cb(err);

              const filename = `${hash.toString('hex')}-${file.originalname}`;

              cb(null, filename)
          })
        }
    }),
    limits: {
        fileSize: 2*1024*1024,
    },
    fileFilter: (_req: any, file: Express.MulterS3.File, cb: FileFilterCallback) => {
        const allowedMimes = [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/pjpeg',
            'image/JPG',
            'image/PNG'
        ];

        if (allowedMimes.includes(file.mimetype)){
            cb(null, true)
        }
        else{
            cb(new Error('Invalid file type.'));
        }
    },
};
