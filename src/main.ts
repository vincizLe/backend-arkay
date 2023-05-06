import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), { bufferLogs: true })

	const config = new DocumentBuilder().setTitle('Backend-Arkay').build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)

	const port = 3000

	await app.listen(port, () => {
		const logger = app.get(Logger)
		logger.log(`Application is listening on port ${port}.`)
	})
}

bootstrap()
