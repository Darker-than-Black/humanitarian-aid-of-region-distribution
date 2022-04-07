import { Driver, Transport } from './types/api';

// 2022-03-17 => 17.03.2022
export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');

  return `${day}.${month}.${date.getFullYear()}`
};

export const getPreviewDriver = ({ name, phone }: Driver): string =>
  `${ name || '' } ${ phone ? `(${ phone })` : '' }`.trim();

export const getPreviewTransport = ({ name, type }: Transport): string =>
  `${ type || '' } ${ name ? `(${ name })` : '' }`.trim();
