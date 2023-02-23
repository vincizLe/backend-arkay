export enum UnitEnum {
	UNIT_1 = 'UNIT_1',
	UNIT_2 = 'UNIT_2',
	UNIT_3 = 'UNIT_3',
	UNIT_4 = 'UNIT_4',
	UNIT_5 = 'UNIT_5'
}

export namespace UnitEnum {
	const propertiesMap = new Map([
		[UnitEnum.UNIT_1, null],
		[UnitEnum.UNIT_2, null],
		[UnitEnum.UNIT_3, null],
		[UnitEnum.UNIT_4, null],
		[UnitEnum.UNIT_5, null]
	])

	export function toArray(this: typeof UnitEnum) {
		return [...propertiesMap.keys()]
	}

	export function getProperties(key: UnitEnum) {
		const props = propertiesMap.get(key)

		if (!props) throw new Error(`invalid key ${key}`)

		return props
	}
}
