import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  reports = [
    { id: 1, date: '2025-03-10', status: 'Completed', amount: 1200 },
    { id: 2, date: '2025-03-11', status: 'Pending', amount: 450 },
    { id: 3, date: '2025-03-12', status: 'Refunded', amount: 90 },
    { id: 4, date: '2025-03-13', status: 'Completed', amount: 780 },
  ];

  getStatusClass(status: string) {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Refunded': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

}
