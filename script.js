// Types of messages
const loveMessages = ['I love you!', 'You are my whole world!', 'Nothing compares to you in my eyes!', 'I want to see you blossom, my love!'];
const encourgeMessages = ['You can do this!', 'You will win!', 'Never back down! Never give up!', 'You will win! No matter what!'];
const schoolMessages = ['Honor student coming up!', 'You are going to get honor roll!', 'That test is nothing to you!'];
const toughLoveMessage = ['Get back up! You are not finished!', 'Keep going! You must win!'];

// pick random messages
const randomMessage = (arr) => {
   const random =  Math.floor(Math.random() * arr.length)
    return arr[random];
   };
   
const affirmationGenerator = (type) => {
    if (type === 'love') {
        return randomMessage(loveMessages);
    } else if (type === 'encourge') {
        return randomMessage(encourgeMessages);
    } else if (type === 'school') {
        return randomMessage(schoolMessages);
    } else if (type === 'tough') {
        return randomMessage(toughLoveMessage);
    } else {
        return 'Please enter encourge, school, love, or tough.';
    }
}

console.log(affirmationGenerator('encourge'));