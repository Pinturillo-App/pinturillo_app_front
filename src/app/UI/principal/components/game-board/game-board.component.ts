import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
  HostListener
} from "@angular/core";
import { fromEvent } from "rxjs";
import { concatMap, pairwise, switchMap, takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [],
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements AfterViewInit {
  @ViewChild('canvas') public canvas!: ElementRef;

  // setting a width and height for the canvas
  @Input() public width = 400;
  @Input() public height = 400;

  canvasEl !: HTMLCanvasElement;
  private cx!: CanvasRenderingContext2D | null;  
  
  public ngAfterViewInit() {
    // get the context
    this.canvasEl = this.canvas.nativeElement;
    

    this.cx = this.canvasEl.getContext('2d');

    this.updateDimensions();
    this.startEvents( this.canvasEl )
  }

  private startEvents( canvasEl: any){

    if( !this.cx ) return 
    // set some default properties about the line
    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';

    canvasEl.width = this.width;
    canvasEl.height = this.height;
    
    // we'll implement this method to start capturing mouse events
    this.captureEvents(canvasEl);
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from the canvas element
    fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap((e) => {
          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, 'mousemove')
            .pipe(
              takeUntil(fromEvent(canvasEl, 'mouseup')),
              takeUntil(fromEvent(canvasEl, 'mouseleave')),  
              pairwise()
            )
        })
      )
      .subscribe((res: any) => {
        const rect = canvasEl.getBoundingClientRect();
  
        // previous and current position with the offset
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };
  
        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };
  
        // this method we'll implement soon to do the actual drawing
        this.drawOnCanvas(prevPos, currentPos);
      });
  }


  private drawOnCanvas(
    prevPos: { x: number, y: number }, 
    currentPos: { x: number, y: number }
  ) {
    // incase the context is not set
    if (!this.cx) { return; }
  
    // start our drawing path
    this.cx.beginPath();
  
    // we're drawing lines so we need a previous position
    if (prevPos) {
      // sets the start point
      this.cx.moveTo(prevPos.x, prevPos.y); // from
  
      // draws a line from the start pos until the current position
      this.cx.lineTo(currentPos.x, currentPos.y);
  
      // strokes the current path with the styles we set earlier
      this.cx.stroke();
    }
  }


  //tamaño del canvas
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateDimensions();
  }

  private updateDimensions(): void {
    if (this.canvas) {
      const { offsetWidth, offsetHeight } = this.canvas.nativeElement;
      this.width = offsetWidth;
      this.height = offsetHeight;

      this.canvasEl.width = this.width;
      this.canvasEl.height = this.height;
    }
  }
}

