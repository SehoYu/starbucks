// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    // 출력할 영상 아이디
    videoId: 'An6LvWQuj_8', // url입력해도 영상출력은 가능, 하지만 제어를 하기 위해서 영상 아이디를 입력해야 한다
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 아이디
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      }
    }
  });
}

