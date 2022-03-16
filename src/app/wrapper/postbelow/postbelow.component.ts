import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postbelow',
  templateUrl: './postbelow.component.html',
  styleUrls: ['./postbelow.component.css']
})
export class PostbelowComponent  {

  songIndex = 0;
  progressPercent = 0;

  songs = [
    "../../assets/song3.mp3",
    "../../assets/song2.mp3",
    "../../assets/song1.mp3",
  ]

  playOnOff: boolean = false
  playing: boolean = false
  audio = new Audio();


  playAudio() {
    if (!this.playOnOff) {
      this.audio.src = `${this.songs[this.songIndex]}`;
      this.audio.volume = 0.1

      this.audio.play()
      this.playOnOff = true
      this.upDateProgress()

    }
    else {
      this.audio.pause()

      if (this.playing) {
        this.audio.play()
        this.playing = false

      } else {
        this.playing = true
      }
    }
  }

  nextSong() {

    this.songIndex++
    if (this.songIndex > this.songs.length - 1) {
      this.songIndex = 0
    }
    this.audio.src = `${this.songs[this.songIndex]}`;
    this.audio.play()
  }

  prevSong() {

    this.songIndex--
    if (this.songIndex < 0) {
      this.songIndex = this.songs.length - 1;
    }
    this.audio.src = `${this.songs[this.songIndex]}`;
    this.audio.play()
  }



  upDateProgress() {
    this.audio.addEventListener("timeupdate", () => {
      this.progressPercent = (this.audio.currentTime / this.audio.duration) * 100;
      console.log(this.progressPercent)
    });
  }

  funcStyle(){
    const progressPercent_1 = this.progressPercent
    return `width: ${progressPercent_1}%`

  }
  setProgress(event: any){
    const width = 900
    const clicked = event.offsetX
    const duration = this.audio.duration

    this.audio.currentTime = (clicked/width) * duration

  }

}
