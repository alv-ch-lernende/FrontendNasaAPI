export interface marsImage {
  id: string;
  img_src: string;
  rover: rover;
  "earth_date": string;

}

export interface allMarsImages {
  photos: marsImage[];
}

export interface rover {
  id: string;
  name: string;
}

export interface filter {
  checkedRovers: string[];
  solInput: string;
}
