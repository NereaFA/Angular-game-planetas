export interface PlanetInterface{
    id: number;
    name: string;
    img: String;
    checked?: boolean;
    selected?: any; //tenia true pero me daba error en memo.component ->this.selectedCard.selected = false;
}