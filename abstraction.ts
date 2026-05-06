// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// class MusicPlayer implements MediaPlayer {
//   play(): void {
//     console.log("Play Msuic");
//   }
//   pause(): void {
//     console.log("Music Paused");
//   }
//   stop(): void {
//     console.log("Music Stopped");
//   }
// }

// const vlcPlayer = new MusicPlayer()
// vlcPlayer.play()

//* Abstract Class

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class vlcPlayer extends MediaPlayer {
  play(): void {
    console.log("Playing Music");
  }
  pause(): void {
    console.log("Music Paused");
  }
  stop(): void {
    console.log("Music Stopped");
  }
}

const vlcPlayer1 = new vlcPlayer();
vlcPlayer1.play();
