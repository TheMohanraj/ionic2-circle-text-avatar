import {generateHashCode} from './utils';

export class ColorGenerator {
    COLORS: any[] = ['#e57373', '#f06292', '#ba68c8', '#9575cd', '#7986cb', '#64b5f6',
        '#4fc3f7', '#4dd0e1', '#4db6ac', '#81c784', '#aed581', '#ff8a65', '#d4e157', '#673ab7',
        '#ffb74d', '#a1887f', '#90a4ae'];
    
    getColor(str: string): string {
        return this.COLORS[Math.abs(generateHashCode(str)) % this.COLORS.length];
    }
}