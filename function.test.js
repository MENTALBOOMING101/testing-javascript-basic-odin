import { analyzeArray, caesarCipher, calculate, capitalize, reverseString } from "./functions";
test('capitalize',()=>{
    expect(capitalize("rat")).toBe("Rat");
    expect(capitalize("sUpEr")).toBe("Super");
})
test('reverseStrings',()=>{
    expect(reverseString("Hello World!")).toBe("!dlroW olleH")
})

test('Addition',()=>{
    expect(calculate.add(10,19)).toBe(29)
})
test('Subtraction',()=>{
    expect(calculate.subtract(10,19)).toBe(-9)
})
test('Multiplication',()=>{
    expect(calculate.multiply(10,19)).toBe(190)
})
test('Division',()=>{
    expect(calculate.divide(10,19)).toBeCloseTo(0.526)
})

test('Caesar Cipher',()=>{
    expect(caesarCipher("rat",1)).toBe("sbu")
})
test('Caesar Cipher with shift back',()=>{
    expect(caesarCipher("Zebra",2)).toBe("Bgdtc")
})
test('Caesar Cipher with shift back',()=>{
    expect(caesarCipher("Zebra",2)).toBe("Bgdtc")
})
test('Caesar Cipher with Big Letters and Punctuations',()=>{
    expect(caesarCipher("Hello, World!",3)).toBe("Khoor, Zruog!")
})

test('Analyze Array',()=>{


    arrOb= analyzeArray([1,8,3,4,2,6])
    arrObExpect = {
        average:4,
        min:1,
        max:8,
        length:6
    }

    expect(arrOb).toEqual(arrObExpect)
})