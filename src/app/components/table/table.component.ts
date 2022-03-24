import { Table } from 'primeng/table';
import { Component, Input, ViewChild, TemplateRef, ElementRef } from '@angular/core';

import { DEFAULT_TABLE_SETTINGS } from '../../configs/defaultTableSettings';
import { TableColumnConfig, TableSettings, TableSettingsLocal } from '../../types/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<ItemType> {
  @Input() data: ItemType[] = [];
  @Input() loading: boolean = false;

  @Input() config: TableColumnConfig[] = [];
  @Input() tableSettings?: TableSettings;

  @Input() captionTemplate?: TemplateRef<any>;
  @Input() tableDataTemplate?: TemplateRef<any>;

  @ViewChild('tableRef') tableRef!: Table;
  @ViewChild('upScrollRef') upScrollRef!: ElementRef<HTMLElement>;
  @ViewChild('upScrollRowRef') upScrollRowRef!: ElementRef<HTMLElement>;

  get filterableFields(): string[] {
    return this.config
      .filter(({filterable}) => filterable)
      .map(({key}) => key);
  }

  get localTableSettings(): TableSettingsLocal {
    return {...this.tableSettings, ...DEFAULT_TABLE_SETTINGS};
  }

  ngAfterViewInit() {
    this.addDoubleScrollbar();
  }

  private addDoubleScrollbar() {
    const { nativeElement: upScrollRef } = this.upScrollRef;
    const tableRef = this.tableRef.el.nativeElement.querySelector('.p-datatable-wrapper');
    const { offsetWidth: tableWidth } = tableRef.querySelector('table');
    this.upScrollRowRef.nativeElement.style.width = `${tableWidth}px`;

    upScrollRef.onscroll = () => tableRef.scrollLeft = upScrollRef.scrollLeft;
    tableRef.onscroll = () => upScrollRef.scrollLeft = tableRef.scrollLeft;
  }
}
