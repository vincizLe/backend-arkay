import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { Collection, Db } from 'mongodb'
import { UnitEnum } from 'src/core/enums/unit.enum'
import { Template } from '../../domain/entities/template.entity'
import { TemplateRepository } from '../../domain/repositories/template.repository'
import { templateDocumentToTemplate } from '../mappers/template-document-to-template.mapper'
import { templateToTemplateDocumentMapper } from '../mappers/template-to-template-document.mapper'
import { TemplateDocument } from '../schemas/template.document'

@Injectable()
export class TemplateImplRepository implements TemplateRepository {
	private readonly collection: Collection<TemplateDocument>

	constructor(@Inject('DATABASE_CONNECTION') private readonly db: Db) {
		this.collection = db.collection('templates')
	}

	async save(template: Template): Promise<void> {
		const templateDocument = templateToTemplateDocumentMapper(template)

		await this.collection.updateOne(
			{ unit: templateDocument.unit },
			{ $set: { ...templateDocument, createdAt: new Date(), updatedAt: new Date() } },
			{ upsert: true }
		)
	}
	async getOne(unit: UnitEnum): Promise<Template> {
		const templateDocument = await this.collection.findOne({ unit })

		if (templateDocument != null && templateDocument != undefined) {
			return templateDocumentToTemplate(templateDocument)
		} else {
			throw new NotFoundException(`No se ha encontrado la plantilla con la unidad: ${unit} `)
		}
	}
}
