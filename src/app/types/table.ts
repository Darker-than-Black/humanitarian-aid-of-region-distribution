import { FIELD_TYPES } from '../constants/fieldTypes';

export interface TableSettingsLocal {
  rows: number
  filterDelay: number
  paginator: boolean
  colMinWidth: string
  emptyMessage: string
  rowsPerPageOptions: number[]
  showCurrentPageReport: boolean
  currentPageReportTemplate: string
}

export interface TableSettings {
  rows?: number
  filterDelay?: number
  paginator?: boolean
  colMinWidth?: string
  emptyMessage?: string
  rowsPerPageOptions?: number[]
  showCurrentPageReport?: boolean
  currentPageReportTemplate?: string
}

export interface TableColumnConfig {
  key: string
  label: string
  defaultValue?: any
  minWidth?: string // default: '15rem'
  type?: FIELD_TYPES
  inputMask?: string
  filterable?: boolean
  handler?: (data: any) => any
}
