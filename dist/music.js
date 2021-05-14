const ap = new APlayer({
    container: document.getElementById('aplayer'),
    //fixed: true,
    //theme: #000000,
    mini: true,
    autoplay: true,  //自动播放
    order: 'random', //随机播放
    audio: [
      {
        name: "Yesterday Once More",
        artist: 'Carpenters',
        url: '/dist/songs/Yesterday Once More -- Carpenters .mp3', 
      },
      {
        name: "斯德哥尔摩情人",
        artist: '陈奕迅',
        url: '/dist/songs/斯德哥尔摩情人 -- 陈奕迅 .mp3', 
      },
      {
        name: '少女的祈祷',
        artist: '杨千嬅',
        url: '/dist/songs/少女的祈祷 -- 杨千嬅 .mp3',
      },
      {
        name: '钟无艳',
        artist: '谢安琪',
        url: '/dist/songs/钟无艳 -- 谢安琪 .mp3',
      },
      {
        name: '倒刺',
        artist: '薛凯琪',
        url: '/dist/songs/倒刺 -- 薛凯琪 .mp3',
      },
      {
        name: '厌弃',
        artist: '许廷铿',
        url: '/dist/songs/厌弃 -- 许廷铿 .mp3',
      },
      {
        name: '阁楼',
        artist: '陈慧琳',
        url: '/dist/songs/阁楼 -- 陈慧琳 .mp3',
      //url: 'http://music.163.com/song/media/outer/url?id=213791.mp3',
      }
    ]
});