import { Component } from '@angular/core';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component {
  selectedOption: string;
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  isDropdownOpen = false;
  textInput1: string = '';
  textInput2: string = '';
  email: string = '';
  phone: string = '';
  dob: Date | null = null;
  gender: string = '';
  address: string = '';
  city: string = '';
  province: string = '';
  postalcode: string = '';
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false; // Close the dropdown
  }
}
