import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOption } from './multer.options';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('file-upload')
  @UseInterceptors(FileInterceptor('file', multerOption))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    // console.log(file.buffer.toString('utf-8'));
    console.log(file);
    return 'your file is successfully uploaded.';
  }
}

//console.log의 결과 -> file변수의 모양

// {
//   fieldname: 'file',
//   originalname: 'test.txt',
//   encoding: '7bit',
//   mimetype: 'text/plain',
//   destination: '/workspaces/file-uploader/file-uploader/backend/file-uploader-server/uploads',
//   filename: '433679d7-2fe8-4b92-9de3-928768881a3f.txt',
//   path: '/workspaces/file-uploader/file-uploader/backend/file-uploader-server/uploads/433679d7-2fe8-4b92-9de3-928768881a3f.txt',
//   size: 21
// }
