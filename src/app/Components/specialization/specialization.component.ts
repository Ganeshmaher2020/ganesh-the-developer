import { Component, OnInit } from '@angular/core';

interface Specialization {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.css']
})
export class SpecializationComponent implements OnInit {

  skills = [
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript.png' },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/48/typescript.png' },
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/html-5--v1.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png' },
    { name: 'React', icon: 'https://img.icons8.com/officel/40/react.png' },
    { name: 'Next.js', icon: 'https://img.icons8.com/ios-filled/50/ffffff/amgular.png' },
    { name: 'Tailwind', icon: 'https://img.icons8.com/color/48/tailwind_css.png' },
    { name: 'NPM', icon: 'https://img.icons8.com/color/48/npm.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/mongodb.png' },
   { name: 'SQL', icon: 'https://img.icons8.com/color/48/sql.png' },
    { name: 'Docker', icon: 'https://img.icons8.com/color/48/docker.png' },
    { name: 'Git', icon: 'https://img.icons8.com/color/48/git.png' },
   { name: 'Azure', icon: 'https://img.icons8.com/color/48/azure-1.png' },
    { name: 'VS Code', icon: 'https://img.icons8.com/color/48/visual-studio-code-2019.png' },
      ];

  constructor() { }

  ngOnInit(): void {}
}
