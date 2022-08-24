import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Note } from 'src/app/shared/node.models';
import { NotesService } from 'src/app/shared/notes.service';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations:[
    trigger('itemAnim', [
      //entrar niamtion
      transition('void => *', [
        //iniciar
        style({
          height: 0,
          opacity:0,
          transform: 'scale(0.85)',
          'margin-bottom':0,

          // expandir las propiedades del padding
          paddingTop:0,
          paddingBottom:0,
          paddingRight:0,
          paddingLeft:0
        }),
        //animar el espacio heght y margen
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop:'*',
          paddingBottom:'*',
          paddingRight:'*',
          paddingLeft:'*'
        })),
        animate(68)
      ]),

      transition('* => void', [
        animate(50, style({
          //primera scala
          transform: 'scale(1.85)'
        })),
        animate(50, style({
          // volver a scala normal
          transform: 'scale(1)',
          opacity:0.75
        })),

        // down and fade
        animate('120ms ease-out', style({
          transform: 'scale(0.68)',
          opacity: 0
        })),

        // animar el espacio
        animate('150ms ease-out', style({
          height: 0,
          paddingTop:0,
          paddingBottom:0,
          paddingRight:0,
          paddingLeft:0,
          'margin-bottom':0,
        }))

      ])
    ]),

    trigger('listAnim',[
      transition('* => *', [
        query(':enter', [
          style({
            opacity:0,
            height:0
          }),
          stagger(100, [
            animate('0.2s ease')
          ])
        ], {
          optional:true
        })
      ])
    ])
  ]
})
export class NotesListComponent implements OnInit {

  faSearch = faSearch;

  notes: Note[] = new Array<Note>();
  filteredNote:  Note[] = new Array<Note>();

  @ViewChild('filterInput') filterInputElRef : ElementRef<HTMLInputElement>;

  constructor( private notesService: NotesService) { }

  ngOnInit(): void {

    //todas las notas
    this.notes = this.notesService.getAll();
    this.filteredNote = this.notesService.getAll();
  }


  deleteNote(note: Note){
    let noteId = this.notesService.getId(note);
    this.notesService.delete(noteId);
   // this.filter(this.filterInputElRef.nativeElement.value);
   this.filter('');
  }
  generateNoteURL(note: Note){
    let noteId = this.notesService.getId(note);
    return noteId;
  }

  filter(query: string){
    query = query.toLowerCase().trim(); 
    let allResults: Note[] = new Array<Note>();
    //partir en query 
    let terms: string[] = query.split(' '); //dividir en spaces
    // quitar duplicados
    terms = this.removeDuplicates(terms);
    //complile all the resultados
    terms.forEach(term =>{
      let results: Note[] = this.relevantNotes(term);
      allResults = [...allResults, ...results]
    });

    //no mostrar el mismo resultado varias veces
    let uniqueResults = this.removeDuplicates(allResults);
    this.filteredNote = uniqueResults;


    //Organizar por relevancia
    this.sortByRelevancy(allResults);
  }

  removeDuplicates(arr: Array<any>): Array<any>{
    let uniqueResults: Set<any> = new Set<any>();
    // loop the array
    arr.forEach(e => uniqueResults.add(e));

    return Array.from(uniqueResults);
  }

  relevantNotes(query: string): Array<Note>{
    query = query.toLowerCase().trim(); 
    let relevantNotes = this.notes.filter(note => {
      if ( note.title && note.title.toLowerCase().includes(query)){
        return true;
      }
      if ( note.body && note.body.toLowerCase().includes(query)){
        return true;
      }
      return false;
    })

    return relevantNotes;
  }

  sortByRelevancy(searchResults: Note[]){
    let noteCountObj: Object = {};

    searchResults.forEach(note => {
      let noteId = this.notesService.getId(note);

      if (noteCountObj[noteId]){
        noteCountObj[noteId] += 1
      } else{
        noteCountObj[noteId] = 1;
      }
    })

    this.filteredNote = this.filteredNote.sort((a: Note, b:Note) =>{
      let aId = this.notesService.getId(a);
      let bId = this.notesService.getId(b);

      let aCount = noteCountObj[aId];
      let bCount = noteCountObj[bId];

      return bCount- aCount;
    })
  }

}
