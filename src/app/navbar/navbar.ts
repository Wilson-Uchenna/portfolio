import { afterNextRender, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  constructor() {
    afterNextRender(() => {
      this.toggleMenu()
    })
  }

  toggleMenu() {
    const hamburger = document.querySelector('.hamburger-icon');
    const navLinks = document.querySelector('.hamburger-links');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('open');

      }
      );
    }
  }
}
