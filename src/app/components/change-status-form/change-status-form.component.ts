import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item, Status } from '../../types/api';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-change-status-form',
  templateUrl: './change-status-form.component.html',
  styleUrls: ['./change-status-form.component.scss']
})
export class ChangeStatusFormComponent {
  constructor(private apiService: ApiService, private store: StoreService<Item>) {
    const [firstStatus] = this.radioGroupConfig;
    this.selectedValue = firstStatus;
  }

  @Input() data!: Item;
  @Output() closeModal = new EventEmitter<void>();

  selectedValue: Status;
  radioGroupConfig: Status[] = [
    {
      code: 'delivered',
      name: 'Доставлено',
      is_final: true,
    },
    {
      code: 'received',
      name: 'Забрали самі',
      is_final: true,
    },
  ];

  get modalTitle(): string {
    return `${this.data.name} отримана?`;
  }

  update() {
    this.apiService.updateItem({...this.data, status: this.selectedValue} as any)
      .subscribe((data) => {
        this.store.updateListItem(data, 'status');
        this.closeModal.emit();
      });
  }
}
