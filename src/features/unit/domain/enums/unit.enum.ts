export enum UnitEnum {
	INTRODUCTION = 'INTRODUCTION'
}

export namespace UnitEnum {
	const propertiesMap = new Map([[UnitEnum.INTRODUCTION, {}]])

	export function toArray(this: typeof UnitEnum) {
		return [...propertiesMap]
	}

	export function getProperties(key: UnitEnum) {
		const props = propertiesMap.get(key)

		if (!props) throw new Error(`invalid key ${key}`)

		return props
	}
}
