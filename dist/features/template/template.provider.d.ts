import { Provider } from '@nestjs/common';
import { TemplateService } from './application/services/template.service';
import { TemplateRepository } from './domain/repositories/template.repository';
export declare const templateRepositoryProvider: Provider<TemplateRepository>;
export declare const templateServiceProvider: Provider<TemplateService>;
