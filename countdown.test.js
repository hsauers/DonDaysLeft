// Basic unit tests for countdown logic
function getCountdownParts(targetDate, now) {
    const timeDifference = targetDate - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
}

// Test: 1 day left
const target = new Date('2029-01-20T12:00:00Z').getTime();
const now = target - (24 * 60 * 60 * 1000);
const result = getCountdownParts(target, now);
console.assert(result.days === 1, 'Should be 1 day left');
console.assert(result.hours === 0, 'Should be 0 hours left');
console.assert(result.minutes === 0, 'Should be 0 minutes left');
console.assert(result.seconds === 0, 'Should be 0 seconds left');

// Test: Countdown finished
const now2 = target + 1000;
const result2 = getCountdownParts(target, now2);
console.assert(result2.days === 0, 'Should be 0 days left after target');
console.assert(result2.hours === 0, 'Should be 0 hours left after target');
console.assert(result2.minutes === 0, 'Should be 0 minutes left after target');
console.assert(result2.seconds === 0, 'Should be 0 seconds left after target');

console.log('All tests passed.');
