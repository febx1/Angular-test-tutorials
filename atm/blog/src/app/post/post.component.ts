import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() imageSrc: string = '';
  @Output() imgSelected = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}
