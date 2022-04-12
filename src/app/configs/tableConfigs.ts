import { FIELD_TYPES, FILTER_TYPES, MedTableColumnConfig } from 'med-table';
import { formatDate, getPreviewDriver, getPreviewTransport } from '../utils';

export const DOZ_SUPPLY_TABLE_CONFIG: MedTableColumnConfig[] = [
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
    filterType: FILTER_TYPES.DATE,
  },
  {
    key: 'status.name',
    label: 'Поточний статус',
    filterable: true,
    minWidth: '18rem',
    filterType: FILTER_TYPES.SELECT,
  },
  {
    key: 'updated',
    label: 'Дата остінньої зміни статусу',
    viewHandler: formatDate,
    filterable: true,
    filterType: FILTER_TYPES.DATE,
  },
  {
    key: 'location',
    label: 'Поточне місцезнаходження',
    filterable: true,
  },
  {
    key: 'sender',
    label: 'Відправник',
    filterable: true,
  },
  {
    key: 'transport',
    label: 'Транспорт',
    filterable: true,
    viewHandler: getPreviewTransport,
  },
  {
    key: 'driver',
    label: 'Водій',
    filterable: true,
    viewHandler: getPreviewDriver,
  },
];

export const FINAL_SUPPLY_DISTRIBUTION_TABLE_CONFIG: MedTableColumnConfig[] = [
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

export const NON_FINAL_SUPPLY_DISTRIBUTION_TABLE_CONFIG: MedTableColumnConfig[] = [
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

export const ZOZ_DISTRIBUTION_TABLE_CONFIG: MedTableColumnConfig[] = [
  {
    key: 'division',
    label: 'ЗОЗ-отримувачі',
    filterable: true,
    minWidth: '25rem',
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
