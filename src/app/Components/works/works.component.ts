import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor() { }

  workExperiences = [
    {
      company: 'IMDS Solution',
      position: 'Software Developer (.Net | Angular)',
      duration: 'Jun 2023 – Present',
      location: 'Mumbai, India',
      description: [
        'Developed an innovative Insurance Automation product using .NET Core, Angular, TypeScript, WebAPI & SQL.',
        'Collaborated closely with cross-functional teams to implement key features.',
        'Refactored existing APIs, optimized code quality, and enhanced scalability.',
        'Worked with MS SQL, MySQL, LINQ, and Git for version control.'
      ]
    },
    {
      company: 'RedBlackTree Pvt Ltd',
      position: 'Software Developer (.Net | Angular)',
      duration: 'Aug 2022 – Jun 2023',
      location: 'Chennai, India',
      description: [
        'Worked in the Travel & Tourism domain on multiple projects: Lighthouse, Travel Consultant, Viking Cruise Emergency System, etc.',
        'Built high-performance asynchronous APIs in .NET Core for 450k daily users.',
        'Handled deployments using Azure VMs, Docker on Linux, Ansible automation, and managed MySQL databases.'
      ]
    },
    {
      company: 'Cognizant Technology',
      position: 'Intern',
      duration: 'Feb 2022 – Jul 2022',
      location: 'Pune, India',
      description: [
        'Completed a 6-month internship focused on software development and application design.',
        'Gained experience in C#, .NET Framework, ADO.NET, ASP.NET WebAPI, MVC, SQL, HTML, and CSS.'
      ]
    }
  ];
  ngOnInit(): void {
  }

}
