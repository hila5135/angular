
import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { CommonModule } from '@angular/common';

interface CourseNode {
  name: string;
  syllabus?: string;  // Changed from string[] to string
  children?: CourseNode[];
  semester?:number;
}

const TREE_DATA: CourseNode[] = [
  {
    name: 'Math',
    syllabus: 'Statistics, Algebra, Calculus',
    children: [
      { name: 'Linear Algebra', syllabus: 'Matrices, Determinants' },
      { name: 'Calculus 1', syllabus: 'Limits, Derivatives' }
    ]
  },
  {
    name: 'English',
    syllabus: 'Grammar, Vocabulary, Writing',
    children: [
      { name: 'Grammar', syllabus: 'Tenses, Articles' },
      { name: 'Writing', syllabus: 'Essays, Reports' }
    ]
  },
  {
    name: 'Programming',semester:5,
    syllabus: 'JavaScript, Angular, C++',
    children: [
      { name: 'JavaScript Basics', syllabus: 'Variables, Loops' },
      { name: 'Angular', syllabus: 'Components, Services' }
    ]
  }
];


@Component({
  selector: 'app-courses-tree',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule,CommonModule],
  templateUrl: './courses-tree.component.html',
  styleUrls: ['./courses-tree.component.css']
})
export class CoursesTreeComponent {
  treeControl = new NestedTreeControl<CourseNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<CourseNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: CourseNode) => !!node.children && node.children.length > 0;
}
