import { Provider } from '@nestjs/common'
import { TemplateService } from './application/services/template.service'
import { TemplateRepository } from './domain/repositories/template.repository'
import { TemplateImplRepository } from './infrastructure/repositories/template-impl.repository'

export const templateRepositoryProvider: Provider<TemplateRepository> = {
	provide: TemplateRepository,
	useClass: TemplateImplRepository
}

export const templateServiceProvider: Provider<TemplateService> = {
	provide: TemplateService,
	inject: [TemplateRepository],
	useFactory: (templateRepository: TemplateRepository) => {
		return new TemplateService(templateRepository)
	}
}
