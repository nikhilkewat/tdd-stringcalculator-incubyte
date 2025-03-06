export const add = (numbers: string): number => {
    return numbers.trim() === "" ? 0 : parseInt(numbers);
}