import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password Generator';
  includeLetters = false; 
  includeNumbers = false; 
  includeSymbols = false; 
  password = "";
  length = 0;

  onButtonClick() {
    console.log(`
    About to generate a password with the following:
    Includes letters: ${this.includeLetters}
    Include numbers: ${this.includeNumbers}
    Includes symbols: ${this.includeSymbols}
    `);
    
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()";

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i=0 ; i<this.length ; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
    }
  }

  getPassword() {
    return this.password;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
