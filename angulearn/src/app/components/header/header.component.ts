import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon"

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected items = [
    { index: 1, name: 'Ritik Sharma',icon: "home" },
    { index: 2, name: 'Crish', icon: "settings" },
    { index: 1, name: 'Ritik Sharma', icon: "search" },
    { index: 2, name: 'Crish', icon: "person" },
    { index: 1, name: 'Ritik Sharma', icon: "groups" },
    { index: 2, name: 'Crish', icon: "notifications" },
  ];

  trackById(index: number, item: any) {
    return item.id;
  }
}
