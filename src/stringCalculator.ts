export const add = (numbers: string): number => {

    if (!numbers) return 0;

    const _numbers = extractValues(numbers);

    if (_numbers.length === 0) return 0;
    else if (_numbers.length === 1) return _numbers[0];
    else return _numbers.reduce((acc, num) => acc + num, 0);
}


const extractValues = (value: string): number[] => {

    let delimiter = [",", "\n"];
    let numberString = value;

    const regex = new RegExp(`[${delimiter.join("")}]`);
    const numbers = numberString
        .split(regex)
        .map((num) => parseInt(num.trim(), 10))
        .filter((num) => !isNaN(num));

    return numbers;
}
