import { Component } from '@angular/core';
import { TYPES } from '../constants/types';
import { COLORS } from '../constants/colors';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent {

  types: string[] = TYPES;
  colors: any = COLORS;

}
