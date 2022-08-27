export class Randoms {

    static colors = [
        "#8c00f7",
        "#5e0997",
        "#3c21b7"
    ];    
    static throwRandomColor () {
        let randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        return randomColor;
    }
    
}