import { Logger, Module } from '@nestjs/common'
import { DatabaseModule } from './features/database/database.module'
import { ProductModule } from './features/product/product.module'
import { ProjectModule } from './features/project/project.module'
import { TemplateModule } from './features/template/template.module'
import { UnitModule } from './features/unit/unit.module'
import { UserModule } from './features/user/user.module'

@Module({
	imports: [DatabaseModule, TemplateModule, UserModule, UnitModule, ProjectModule, ProductModule],
	providers: [Logger]
})
export class AppModule {}
