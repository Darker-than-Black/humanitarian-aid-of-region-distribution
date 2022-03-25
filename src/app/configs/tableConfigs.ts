import {formatDate} from '../utils';
import {TableColumnConfig} from '../types/table';
import {FIELD_TYPES} from "../constants/fieldTypes";

export const DOZ_SUPPLY_TABLE_CONFIG: TableColumnConfig[] = [
  {
    key: 'item_id',
    label: '№',
    filterable: true,
    minWidth: '5rem',
  },
  {
    key: 'name',
    label: 'Находження на ДОЗ',
    filterable: true,
  },
  {
    key: 'delivered',
    label: 'Дата надходження',
    viewHandler: formatDate,
    filterable: true,
  },
  {
    key: 'status.name',
    label: 'Поточний статус',
    filterable: true,
  },
  {
    key: 'updated',
    label: 'Дата остінньої зміни статусу',
    viewHandler: formatDate,
    filterable: true,
  },
];

export const FINAL_SUPPLY_DISTRIBUTION_TABLE_CONFIG: TableColumnConfig[] = [
  {
    key: 'name',
    label: 'Назва',
    filterable: true,
  },
  {
    key: 'dosage',
    label: 'одиниця',
    filterable: true,
  },
  {
    key: 'quantity',
    label: 'Кількість поставки',
    filterable: true,
  },
  {
    key: 'delivery_balance',
    label: 'Залишок поставки',
    filterable: true,
    defaultValue: 0,
  },
];

export const NON_FINAL_SUPPLY_DISTRIBUTION_TABLE_CONFIG: TableColumnConfig[] = [
  {
    key: 'name',
    label: 'Назва',
    filterable: true,
  },
  {
    key: 'dosage',
    label: 'одиниця',
    filterable: true,
  },
  {
    key: 'quantity',
    label: 'Кількість поставки',
    filterable: true,
  },
];

export const ZOZ_DISTRIBUTION_TABLE_CONFIG: TableColumnConfig[] = [
  {
    key: 'division',
    label: 'ЗОЗ-отримувачі',
    filterable: true,
  },
  {
    key: 'need',
    label: 'Середньомісячна потреба',
    filterable: true,
  },
  {
    key: 'recommended_quantity',
    label: 'Рекомендована кількість розподілу',
    filterable: true,
  },
  {
    key: 'distribution_quantity',
    label: 'Обсяг розподілу',
    filterable: true,
    editorType: FIELD_TYPES.NUMBER,
  },
  {
    key: 'comment',
    label: 'Коментар',
    filterable: true,
  },
];
