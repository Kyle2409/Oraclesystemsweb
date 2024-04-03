import { Component } from '@angular/core';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component {
  selectedOption: string;
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  isDropdownOpen = false;
  textInput1: string = '';
  textInput2: string = '';
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false; // Close the dropdown
  }
}
