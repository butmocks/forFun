import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
 
  @Input() title:string;
  @Input() body:string;
  @Input() link:string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('truncator', {static: true}) truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText', {static: true}) bodyText: ElementRef<HTMLElement>;

  

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    //show the truncator if there is a overflow

    let style= window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHieght = parseInt(style.getPropertyValue("height"),10);


    if(this.bodyText.nativeElement.scrollHeight>viewableHieght){
      //si hay overflow se mostrara
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else{
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }


  }

  onXButtomClic(){
    this.deleteEvent.emit();
  }

}
