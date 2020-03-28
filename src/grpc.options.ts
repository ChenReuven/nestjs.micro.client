import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC, // IMPORTANT
  options: {
    package: 'app',
    protoPath: join(__dirname, '../src/app.proto'),
  },
};
