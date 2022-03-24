import { formatDate } from '../utils';
import { TableColumnConfig } from '../types/table';

export const DOZ_SUPPLY_TABLE_CONFIG: TableColumnConfig[] = [
  {
    key: 'item_id',
    label: '№',
    filterable: true,
  },
  {
    key: 'name',
    label: 'Находження на ДОЗ',
    filterable: true,
  },
  {
    key: 'delivered',
    label: 'Дата надходження',
    handler: formatDate,
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
    handler: formatDate,
    filterable: true,
  },
];

export const SUPPLY_DISTRIBUTION_TABLE_CONFIG: TableColumnConfig[] = [
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
