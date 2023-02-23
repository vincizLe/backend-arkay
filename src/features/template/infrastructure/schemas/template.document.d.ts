import { PracticeTemplateDocument } from './practice-template.document'
import { SessionTemplateDocument } from './session-template.document'
import { StatementTemplateDocument } from './statement-template.document'

export interface TemplateDocument {
	unit: string
	practiceTemplate?: PracticeTemplateDocument
	sessionTemplate?: SessionTemplateDocument
	statementTemplate?: StatementTemplateDocument
}
