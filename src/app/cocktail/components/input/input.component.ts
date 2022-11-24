import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() placeholder: string = '';
  @Output() onNewtermino: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce  : EventEmitter<string> = new EventEmitter<string>();

  bebouncer: Subject<string> = new Subject();

  termino: string = '';
  constructor( ) { }

  ngOnInit(): void {
    this.bebouncer
      .pipe(
        debounceTime((1000))
      )
      .subscribe({
        next: valor => {
          this.onDebounce.emit( valor );
        }
      })
  }


  buscar() {
    if( this.termino === ''){
      return;
    }
    this.onNewtermino.emit( this.termino );
    this.termino = '';
  }

  teclaPresionada() {
    this.bebouncer.next( this.termino )
  }
}
