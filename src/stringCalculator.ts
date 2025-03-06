export const add = (numbers: string): number => {

    if (!numbers) return 0;

    const { _numbers, _negativeNumbers } = extractValues(numbers);

    if (_negativeNumbers.length > 0) {
        throw new Error(`negatives not allowed: ${_negativeNumbers.join(", ")}`);
    }

    if (_numbers.length === 0) return 0;
    else if (_numbers.length === 1) return _numbers[0];
    else return _numbers.reduce((acc, num) => acc + num, 0);
}


const extractValues = (value: string): { _numbers: number[], _negativeNumbers: number[] } => {

    let delimiter = [",", "\n"];
    let numberString = value;

    if (value.startsWith("//")) {
        const match = value.match(/^\/\/(.+)\n/);
        if (match) {
            // delimiter = new RegExp(`[${match[1]}]`);
            // numberString = value.split("\n").slice(1).join("\n");

            numberString = numberString.slice(match[0].length);
            const customDelimiters = match[1]
                .replace(/^\[|\]$/g, "") // Remove enclosing brackets
                .split("]["); // Handle multiple delimiters
            delimiter = delimiter.concat(customDelimiters);
        }
    }

    const regex = new RegExp(`[${delimiter.join("")}]`);
    const _numbers = numberString
        .split(regex)
        .map((num) => parseInt(num.trim(), 10))
        .filter((num) => !isNaN(num) && num <= 1000);

    const _negativeNumbers = _numbers.filter((num) => num < 0);

    return { _numbers, _negativeNumbers };
}
