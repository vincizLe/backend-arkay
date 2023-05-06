"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter(), { bufferLogs: true });
    const config = new swagger_1.DocumentBuilder().setTitle('Backend-Arkay').build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const port = 3000;
    await app.listen(port, () => {
        const logger = app.get(common_1.Logger);
        logger.log(`Application is listening on port ${port}.`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map