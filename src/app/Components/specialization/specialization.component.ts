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
    { name: 'Python', icon: 'https://img.icons8.com/color/48/python.png' },
    { name: 'Java', icon: 'https://img.icons8.com/color/48/java-coffee-cup-logo.png' },
    { name: 'C', icon: 'https://img.icons8.com/color/48/c-programming.png' },
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/html-5--v1.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png' },
    { name: 'React', icon: 'https://img.icons8.com/officel/40/react.png' },
    { name: 'Next.js', icon: 'https://img.icons8.com/ios-filled/50/ffffff/nextjs.png' },
    { name: 'Tailwind', icon: 'https://img.icons8.com/color/48/tailwind_css.png' },
    { name: 'NPM', icon: 'https://img.icons8.com/color/48/npm.png' },
    { name: 'Hugo', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-hugo-a-fast-and-modern-static-site-generator-logo-color-tal-revivo.png' },
    { name: 'WordPress', icon: 'https://img.icons8.com/color/48/wordpress.png' },
    { name: 'Deno', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-deno-a-secure-runtime-for-javascript-and-typescript-logo-color-tal-revivo.png' },
    { name: 'Node.js', icon: 'https://img.icons8.com/color/48/nodejs.png' },
    { name: 'Express', icon: 'https://img.icons8.com/ios-filled/50/ffffff/express-js.png' },
    { name: 'PostgreSQL', icon: 'https://img.icons8.com/color/48/postgreesql.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/mongodb.png' },
    { name: 'Firebase', icon: 'https://img.icons8.com/color/48/firebase.png' },
    { name: 'PHP', icon: 'https://img.icons8.com/officel/48/php-logo.png' },
    { name: 'SQL', icon: 'https://img.icons8.com/color/48/sql.png' },
    { name: 'Docker', icon: 'https://img.icons8.com/color/48/docker.png' },
    { name: 'Git', icon: 'https://img.icons8.com/color/48/git.png' },
    { name: 'GitHub', icon: 'https://img.icons8.com/ios-glyphs/48/ffffff/github.png' },
    { name: 'GitLab', icon: 'https://img.icons8.com/color/48/gitlab.png' },
    { name: 'AWS', icon: 'https://img.icons8.com/color/48/amazon-web-services.png' },
    { name: 'Azure', icon: 'https://img.icons8.com/color/48/azure-1.png' },
    { name: 'Nginx', icon: 'https://img.icons8.com/color/48/nginx.png' },
    { name: 'Linux', icon: 'https://img.icons8.com/color/48/linux.png' },
    { name: 'Ubuntu', icon: 'https://img.icons8.com/color/48/ubuntu--v1.png' },
    { name: 'VS Code', icon: 'https://img.icons8.com/color/48/visual-studio-code-2019.png' },
    { name: 'Jupyter', icon: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-jupyter-a-open-source-web-application-used-to-create-and-share-logo-shadow-tal-revivo.png' },
    { name: 'Terminal', icon: 'https://img.icons8.com/ios-filled/50/ffffff/console.png' },
    { name: 'PowerShell', icon: 'https://img.icons8.com/color/48/powershell.png' },
    { name: 'Bash', icon: 'https://img.icons8.com/fluency/48/console.png' },
    { name: 'Notion', icon: 'https://img.icons8.com/ios-filled/50/ffffff/notion.png' },
    { name: 'Figma', icon: 'https://img.icons8.com/color/48/figma--v1.png' },
    { name: 'Slack', icon: 'https://img.icons8.com/color/48/slack-new.png' },
    { name: 'Vim', icon: 'https://img.icons8.com/color/48/vim.png' },
    { name: 'Cursor', icon: 'https://img.icons8.com/ios/48/ffffff/mouse-pointer.png' },
    { name: 'Apple', icon: 'https://img.icons8.com/ios-filled/50/ffffff/mac-os.png' },
    { name: 'Arch', icon: 'https://img.icons8.com/color/48/arch-linux.png' }
  ];

  constructor() { }

  ngOnInit(): void {}
}
