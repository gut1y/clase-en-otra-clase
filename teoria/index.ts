class Album {
  title: string;
  sonsgs: string[];
  constructor(title: string, songs: string[]) {
    this.title = title;
    this.sonsgs = songs;
  }
}

class Banda {
  member: string[];
  albums: Album[];
  constructor(members: string[], albums: Album[]) {
    this.member = members;
    this.albums = albums;
  }
}

function main() {
  const unAlbum = new Album("Alimio", ["1", "2", "3"]);
  const dosAlbum = new Album("Benimio", ["1", "2", "3"]);
  console.log(unAlbum);
  const unaBanda = new Banda(["marce"], [unAlbum]);
  console.log("verrr", unaBanda.albums);
  console.table(unaBanda);
  console.log("otro cambio")
}

main();
