import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuIsOpened = false;

  toggleMenu() {
    this.menuIsOpened = !this.menuIsOpened;
  }

}
