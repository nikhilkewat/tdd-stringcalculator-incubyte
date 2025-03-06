export const add = (numbers: string): number => {

    if(!numbers) return 0;
    
    const _numbers = numbers.split(",").map((num) => parseInt(num.trim(), 10)).filter((num) => !isNaN(num));

    if (_numbers.length === 0) return 0;
    else if (_numbers.length === 1) return _numbers[0];
    else return NaN;
}

