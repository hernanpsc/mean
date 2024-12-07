import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styleUrls: ['./incrementor.component.css']
})
export class IncrementorComponent {
  @Input() valor = 18;
  @Output() valorTitularCambiado = new EventEmitter<number>();

  private intervalId: any;
  private timeoutId: any;

  // Event listener para el evento "mousedown" (para escritorio)
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: Event) {
    if (event.target instanceof HTMLElement) {
      const clickedButtonId = event.target.id;

      if (clickedButtonId === 'incrementButton') {
        // Botón de incremento presionado
        this.intervalId = setInterval(() => {
          this.incrementar();
        }, 100);
      } else if (clickedButtonId === 'decrementButton') {
        // Botón de decremento presionado
        this.intervalId = setInterval(() => {
          this.decrementar();
        }, 100);
      }
    }
  }

  // Event listener para el evento "mouseup" (para escritorio)
  @HostListener('mouseup', ['$event'])
  onMouseUp(event: Event) {
    // Detén el incremento o decremento cuando se suelta el botón
    clearInterval(this.intervalId);
  }

  // Event listener para el evento "touchstart" (para dispositivos táctiles)
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    if (event.target instanceof HTMLElement) {
      const clickedButtonId = event.target.id;

      if (clickedButtonId === 'incrementButton') {
        // Botón de incremento presionado en dispositivo táctil
        this.intervalId = setInterval(() => {
          this.incrementar();
        }, 100);
      } else if (clickedButtonId === 'decrementButton') {
        // Botón de decremento presionado en dispositivo táctil
        this.intervalId = setInterval(() => {
          this.decrementar();
        }, 100);
      }
    }
  }

  // Event listener para el evento "touchend" (para dispositivos táctiles)
  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    // Detén el incremento o decremento cuando se levanta el dedo
    clearInterval(this.intervalId);
  }

  incrementar() {
    this.valor++;
    // Emitir el nuevo valor si es necesario
    // this.emitirNuevoValor();
  }

  decrementar() {
    if (this.valor > 18) {
      this.valor--;
      // Emitir el nuevo valor si es necesario
      // this.emitirNuevoValor();
    }
  }

  // private emitirNuevoValor() {
  //   this.valorTitularCambiado.emit(this.valor);
  // }
}
