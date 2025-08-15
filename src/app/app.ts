import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from "./sections/hero/hero";
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Contacts } from './sections/contacts/contacts';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, About, Skills, Projects, Contacts],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
