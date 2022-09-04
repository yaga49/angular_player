import {Component, OnInit, Input} from '@angular/core';
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-postbelow',
  templateUrl: './postbelow.component.html',
  styleUrls: ['./postbelow.component.css']
})
export class PostbelowComponent {

  ngOnInit(){
    this.upDateProgress()
  }
  constructor(private svc: ServiceService) {

  }

  audioList = this.svc.songsList


  playAudio(UrlSrc = this.audioList.UrlSrc , songIndex = this.audioList.songIndex) {
    this.svc.playAudio(UrlSrc, songIndex)

  }

  nextSong() {
    this.svc.nextSong(this.audioList.UrlSrc, this.audioList.songIndex)
  }

  prevSong() {
    this.svc.prevSong()
  }


  upDateProgress() {
    this.svc.upDateProgress()
  }

  funcStyle() {
     return this.svc.funcStyle()

  }

  setProgress(event: MouseEvent) {
    this.svc.setProgress(event)

  }

}
