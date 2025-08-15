import { Component, inject, afterNextRender, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero {
  texts: string[] = ['Full-Stack Developer', 'Front-End Developer', 'Tech Enthusiast'];
  currentText = '';
  textIndex = 0;
  charIndex = 0;
  isDeleting = false;

  // ✅ Creates injection context and checks if browser
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly _ = (() => {
    if (this.isBrowser) {
      afterNextRender(() => this.typeEffect());
    }
    return true;
  })();

  typeEffect() {
    const fullText = this.texts[this.textIndex];
    const speed = this.isDeleting ? 50 : 150;

    this.currentText = this.isDeleting
      ? fullText.substring(0, --this.charIndex)
      : fullText.substring(0, ++this.charIndex);

    const el = document.querySelector('.typewriter');
    if (el) el.textContent = this.currentText;

    if (!this.isDeleting && this.charIndex === fullText.length) {
      this.isDeleting = true;
      setTimeout(() => this.typeEffect(), 2000);
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      setTimeout(() => this.typeEffect(), 300);
    } else {
      setTimeout(() => this.typeEffect(), speed);
    }
  }
}
