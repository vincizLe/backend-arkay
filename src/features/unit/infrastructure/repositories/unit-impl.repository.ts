import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { Collection, Db, ObjectId } from 'mongodb'
import { UnitEnum } from 'src/core/enums/unit.enum'
import { Unit } from '../../domain/entities/unit.entity'
import { UnitRepository } from '../../domain/repositories/unit.repository'
import { unitDocumentToUnitMapper } from '../mappers/unit-document-to-unit.mapper'
import { unitToUnitDocumentMapper } from '../mappers/unit-to-unit-document.mapper'
import { UnitDocument } from '../schemas/unit.documents'

@Injectable()
export class UnitImplRepository implements UnitRepository {
	private readonly collection: Collection<UnitDocument>

	constructor(@Inject('DATABASE_CONNECTION') private readonly db: Db) {
		this.collection = db.collection('units')
	}

	async save(unit: Unit): Promise<void> {
		const unitDocument = unitToUnitDocumentMapper(unit)

		await this.collection.updateOne(
			{ _id: unitDocument._id },
			{ $set: { ...unitDocument, createdAt: new Date(), updatedAt: new Date() } },
			{ upsert: true }
		)
	}

	async getOne(unitName: UnitEnum, userId: string): Promise<Unit> {
		const unitDocument = await this.collection.findOne({ name: unitName, userId })

		console.log('unitDocument -> ', unitDocument)

		if (unitDocument != null && unitDocument != undefined) {
			return unitDocumentToUnitMapper(unitDocument)
		} else {
			throw new NotFoundException('No se ha encontrado la unidad ')
		}
	}

	async getById(unitId: string): Promise<Unit> {
		const unitDocument = await this.collection.findOne({ _id: new ObjectId(unitId) })

		if (unitDocument != null && unitDocument != undefined) {
			return unitDocumentToUnitMapper(unitDocument)
		} else {
			throw new NotFoundException(`No se ha encontrado la unidad con el id: ${unitId} `)
		}
	}
}
