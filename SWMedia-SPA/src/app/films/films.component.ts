import { Component, OnInit, TemplateRef, Pipe, PipeTransform } from '@angular/core';
import { FilmsService } from '../_services/films.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: any;
  episode: any;
  modalRef: BsModalRef;

  constructor(private filmsService: FilmsService, private modalService: BsModalService) { }


  SlideOptions = { items: 3, dots: true };
  CarouselOptions = { items: 9, dots: true, mouseDrag: true };

  ngOnInit() {
    this.filmsService.GetFilms().subscribe(response => {
      this.films = response;
      this.episode = this.films[0];

      console.log(this.episode);
    });
  }

  changeEpisode(episode: any) {
    this.episode = episode;
    window.scroll(0,0);
  }

  openModalTrailer(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg'});
  }

}

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
