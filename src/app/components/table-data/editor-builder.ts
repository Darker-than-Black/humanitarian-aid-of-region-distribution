import { TableColumnConfig } from '../../types/table';
import { CustomFormlyFieldConfig } from '../../types/form';

export interface EditorBuilderOptions extends TableColumnConfig {
  onLeave: () => void
}

export class EditorBuilder implements CustomFormlyFieldConfig {
  key: string;
  type: string;
  templateOptions = {
    mask: '',
    autoFocus: true,
    onLeave: () => {},
  };

  constructor(options: EditorBuilderOptions) {
    this.key = options.key;
    this.type = options.type || 'text';
    this.templateOptions.onLeave = options.onLeave;
    this.templateOptions.mask = options.inputMask || '';
  }
}
