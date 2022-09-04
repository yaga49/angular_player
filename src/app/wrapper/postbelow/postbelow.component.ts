import {Component, OnInit, Input} from '@angular/core';
import {group} from "@angular/animations";
import {getLocaleFirstDayOfWeek} from "@angular/common";
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

  songsList: any = [
    {
      groupName: "Король и Шут",
      SongName: "Танец злобного гения",
      UrlImage: "https://avatars.yandex.net/get-music-content/38044/b0576344.a.124660-1/m1000x1000",
      songIndex: 0,
      UrlSrc: "../../assets/song3.mp3"
    },
    {
      groupName: "Theory Of a Deadman",
      SongName: "Say Goodbye",
      UrlImage: "https://avatars.yandex.net/get-music-content/49707/8533bd7f.a.40186-1/m1000x1000",
      songIndex: 1,
      UrlSrc: "../../assets/song2.mp3"
    },
    {
      groupName: "Ryan Star",
      SongName: "Start a Fire",
      UrlImage: "https://avatars.yandex.net/get-music-content/97284/8f544d63.a.4669818-1/m1000x1000",
      songIndex: 2,
      UrlSrc: "../../assets/song1.mp3"
    },
    {
      groupName: "Zico Chain",
      SongName: "Mercury Gift",
      UrlImage: "https://altwall.net/img/albums/eabd6b8099edf88ffabad7d49cb94b5c_2012.jpg",
      songIndex: 3,
      UrlSrc: "../../assets/song4.mp3"
    },
    {
      groupName: "Ryan Star",
      SongName: "Start a Fire",
      UrlImage: "https://avatars.yandex.net/get-music-content/97284/8f544d63.a.4669818-1/m1000x1000",
      songIndex: 4,
      UrlSrc: "../../assets/song1.mp3"
    }

  ]

  songIndex = 0;
  progressPercent = 0;

  songs = [
    "../../assets/song3.mp3",
    "../../assets/song2.mp3",
    "../../assets/song1.mp3",
  ]

  playOnOff: boolean = false
  stoped: boolean = false
  audio = new Audio();


  playAudio(UrlSrc = this.songsList.UrlSrc, songIndex = this.songsList.songIndex) {
    let isContain = 0
    if(songIndex){
      this.songIndex = songIndex;
    }
    if(UrlSrc){
      isContain = this.audio.src.indexOf(UrlSrc.substring(5))
    }
    if(isContain == -1){
      this.playOnOff = false
    }
    if (!this.playOnOff) {
      // this.audio.src = `${this.songs[this.songIndex]}`;
      this.audio.src = UrlSrc;
      if (!UrlSrc) {
        this.audio.src = this.songsList[0].UrlSrc
      }
      this.audio.volume = 0.1

      this.audio.play()
      this.playOnOff = true


    } else {

      if (this.stoped) {

        this.audio.play()
        this.stoped = false
      } else {

        this.audio.pause()
        this.stoped = true
      }
    }

  }

  nextSong(UrlSrc = this.songsList.UrlSrc, songIndex = this.songsList.songIndex) {

    this.songIndex++

    if (this.songIndex > this.songsList.length - 1) {
      this.songIndex = 0
    }

    this.audio.src = `${this.songsList[this.songIndex].UrlSrc}`;

    this.audio.play()
    this.playOnOff = true
  }

  prevSong() {

    this.songIndex--
    if (this.songIndex < 0) {
      this.songIndex = this.songsList.length - 1;
    }
    this.audio.src = `${this.songsList[this.songIndex].UrlSrc}`;
    this.audio.play()
    this.playOnOff = true
  }


  upDateProgress() {
    this.audio.addEventListener("timeupdate", () => {
      this.progressPercent = (this.audio.currentTime / this.audio.duration) * 100;
      console.log(this.progressPercent)
    });
  }

  funcStyle() {
    const progressPercent_1 = this.progressPercent
    return `width: ${progressPercent_1}%`

  }

  setProgress(event: any) {
    const width = 1450
    const clicked = event.offsetX
    const duration = this.audio.duration

    this.audio.currentTime = (clicked / width) * duration

  }

}
