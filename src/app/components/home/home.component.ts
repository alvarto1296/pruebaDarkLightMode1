import { Component, OnInit } from '@angular/core';
import { GLOBAL } from 'src/app/services/global';
import { ThemeService } from 'src/app/services/theme/theme.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
  }

  toggle() {
    const active = this.themeService.getActiveTheme() ;
    if ( active.name === ('light_' + GLOBAL.cPropietario) ) {
      this.themeService.setTheme('dark_' + GLOBAL.cPropietario);
    } else {
      this.themeService.setTheme('light_' + GLOBAL.cPropietario);
    }
  }

}
