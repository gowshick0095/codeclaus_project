document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const volumeControl = document.getElementById('volume');
    const playlistContainer = document.getElementById('playlist');
    const createPlaylistButton = document.getElementById('create-playlist');
    const playlistNameInput = document.getElementById('playlist-name');

    let playlist = [ 
        'tracks/track1.mp3', // Replace with actual paths to your audio files
        'tracks/track2.mp3',
        'tracks/track3.mp3',
        'tracks/track4.mp3'
        ];
    let currentTrackIndex = -1;

    const tracks = [
        'tracks/track1.mp3', // Replace with actual paths to your audio files
        'tracks/track2.mp3',
        'tracks/track3.mp3',
        'tracks/track4.mp3'
        ];

    function loadTrack(index) {
              if (index >= 0 && index < tracks.length) {
            audio.src = tracks[index];
            currentTrackIndex = index;
        }
    }

    function playTrack() {
        if (currentTrackIndex !== -1) {
            audio.play();
        }
    }

    function pauseTrack() {
        audio.pause();
    }

    function skipTrack(offset) {
        let newIndex = currentTrackIndex + offset;
        if (newIndex < 0) newIndex = tracks.length - 1;
        if (newIndex >= tracks.length) newIndex = 0;
        loadTrack(newIndex);
        playTrack();
    }

    playButton.addEventListener('click', playTrack);
    pauseButton.addEventListener('click', pauseTrack);
    prevButton.addEventListener('click', () => skipTrack(-1));
    nextButton.addEventListener('click', () => skipTrack(1));

    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value;
    });

    createPlaylistButton.addEventListener('click', () => {
        const name = playlistNameInput.value.trim();
        if (name) {
            const li = document.createElement('li');
            li.textContent = name;
            playlistContainer.appendChild(li);
            playlist.push(name);
            playlistNameInput.value = '';
        }
    });

    // Initial load
    loadTrack(0);
});
