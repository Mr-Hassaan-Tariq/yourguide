class Number {

    getOtp = () => {
        const min = 1000; // Minimum 4-digit number (inclusive)
        const max = 9999; // Maximum 4-digit number (inclusive)

        // Generate a random number between min and max
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        return randomNumber;
    }
}

module.exports = new Number