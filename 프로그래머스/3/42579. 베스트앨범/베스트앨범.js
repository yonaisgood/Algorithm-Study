function solution(genres, plays) {
    let genreMap = new Map();

    genres.forEach((genre, index) => {
        let playAmount = plays[index];
        
        if (!genreMap.has(genre)) {
            genreMap.set(genre, { totalPlays: 0, songs: [] });
        }
        
        genreMap.get(genre).totalPlays += playAmount;
        genreMap.get(genre).songs.push({ index: index, play: playAmount });
    });

    // 장르별 총 재생 횟수로 장르를 정렬
    let sortedGenres = [...genreMap.entries()].sort((a, b) => b[1].totalPlays - a[1].totalPlays);

    // 각 장르별로 노래를 재생 횟수와 고유 번호로 정렬하여 베스트 앨범에 수록
    let bestAlbum = [];

    sortedGenres.forEach(([genre, info]) => {
        let sortedSongs = info.songs.sort((a, b) => b.play - a.play);
        bestAlbum.push(sortedSongs[0].index);
        if (sortedSongs[1]) {
            bestAlbum.push(sortedSongs[1].index);
        }
    });

    return bestAlbum;
}


