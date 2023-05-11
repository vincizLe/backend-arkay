import { Module } from '@nestjs/common'
import { TemplateHttpController } from './application/controllers/template-http.controller'
import { templateRepositoryProvider, templateServiceProvider } from './template.provider'

@Module({
	providers: [templateServiceProvider, templateRepositoryProvider],
	controllers: [TemplateHttpController],
	exports: [templateRepositoryProvider]
})
export class TemplateModule {}
