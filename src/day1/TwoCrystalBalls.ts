export default function two_crystal_balls(breaks: boolean[]): number {
    const j=Math.floor(Math.sqrt(breaks.length));
    const n=Math.floor(breaks.length/j)
    let i=0;
    while(i<breaks.length){
        if(breaks[i]=== true){
            break;
        }
        i+=j
        
    }
    i-=j;
    for(let k=i; k<i+j; k++){
        if(breaks[k]===true){
            return k;
        }
    }
    return -1;
}