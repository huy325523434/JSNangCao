let x;

// Square root
// Căn bậc hai
x = Math.sqrt(9);

// Absolute value 
//Giá trị tuyệt đối
x = Math.abs(-5);

// Round 
// làm Tròn
x = Math.round(4.9);

// Round up
// làm Tròn lên
x = Math.ceil(4.2);

// Round down
//làm Tròn xuống
x = Math.floor(4.9);

// Exponent
// Số mũ
x = Math.pow(2, 3);

// Minimum number
// Số nhỏ nhất
x = Math.min(4, 5,8,9,1, 3);

// Maximum number
//Số lớn nhất
x = Math.max(4, 5, 3);

// Get a random number/decimal between 0 and 1
// Nhận một số ngẫu nhiên/thập phân trong khoảng từ 0 đến 1
x = Math.random();

// Get a random number between 1 and 100
// Nhận một số ngẫu nhiên từ 1 đến 100
x = Math.floor(Math.random() * 100 + 1);

console.log(x);

//Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);