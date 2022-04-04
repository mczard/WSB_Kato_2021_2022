import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'one-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit, AfterViewInit {

  title = "Przykładowy tytuł";
  placeholderText = "Wpisz imię";
  protected data = "02.11.xxxx";
  imgUrl = "https://ichi.pro/assets/images/max/724/1*FZDQJ7ZMtUuIDVhQR0mXsw.png";
  user = {
      id: 1,
      name: "Jan Kowalski",
      city: "Katowice"
  };
  show = true;
  isWrong = true;
  switchName = '';
  userStyles = {
    color: 'blue',
    fontSize: '24px'
  };

  manyClasses = {
    'text-success': !this.isWrong,
    'text-danger': this.isWrong,
    'text-special': this.isWrong
  };

  person = {
    name: 'Skasuj i podaj imie',
    surname: '',
    occupation: ''
  }

  newHtmlValue = "Cześć jestem HTML";

  users = [
    {id: 1, name: "Marcin"},
    {id: 2, name: "Tomasz"},
    {id: 3, name: "Mateusz"}
  ]

  private _customerName: string = '';

  get customerName(): string {
    console.log('Odczytujemy customerName');
    return this._customerName;
  }

  set customerName(value: string) {
    console.log('Zapisujemy customerName');
    this._customerName = value;
  }

  @ViewChild('nameInput', { static: false })
  nameInput: ElementRef<HTMLInputElement>|undefined = undefined;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.nameInput) {
      this.nameInput.nativeElement.focus();
    }
  }

  ngOnInit(): void {
  }

  sayHello() {
    return "Hello WSB";
  }

  sayHelloParam(name: string) {
    return `Hello ${name}`;
  }

  onBlur() {
    alert('Opuściłeś INPUT');
  }

  witaj(imie: string) {
    alert("Cześć " + imie);

    // TO JEST OK
    // this.users.push({
    //   id: this.users.length + 1,
    //   name: imie
    // });

    // TO JEST LEPSZE
    this.users = [
      ...this.users,
      {
        id: this.users.length + 1,
        name: imie
      }
    ];
  }

  onChange(zawod: string) {
    this.person.occupation = zawod;
  }

  toggle() {
    this.show = !this.show;
  }

  wybierz(user: {id: number, name: string}) {
    alert("Wybrany user to " + user.name);
  }
}
