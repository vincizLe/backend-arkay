import { Provider } from '@nestjs/common'
import { RequestLogger } from '../request-logger/request-logger.service'
import { TemplateService } from './application/services/template.service'
import { TemplateRepository } from './domain/repositories/template.repository'
import { TemplateImplRepository } from './infrastructure/repositories/template-impl.repository'

export const templateRepositoryProvider: Provider<TemplateRepository> = {
	provide: TemplateRepository,
	useClass: TemplateImplRepository
}

export const templateServiceProvider: Provider<TemplateService> = {
	provide: TemplateService,
	inject: [RequestLogger, TemplateRepository],
	useFactory: (requestLogger: RequestLogger, templateRepository: TemplateRepository) => {
		return new TemplateService(requestLogger, templateRepository)
	}
}
