// export const sessionRepositoryProvider: Provider<SessionRepository> = {
// 	provide: SessionRepository,
// 	useClass: SessionImplRepository
// }

// export const unitServiceProvider: Provider<UnitService> = {
// 	provide: UnitService,
// 	inject: [SessionRepository],
// 	useFactory: (sessionRepository: SessionRepository) => {
// 		return new UnitService(sessionRepository)
// 	}
// }
