import { Component } from '@angular/core';
import forumsData from "../forums.json";

interface Forums{
  forumName: string;
  time: string;
  text: string;
  listeners: number;
  picture: string;
  moderatorName: string;
  moderatorDesc: string;
  title: string;
}

@Component({
  selector: 'forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent {
  forums:Forums[] = forumsData;

}
