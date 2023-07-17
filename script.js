document.addEventListener('DOMContentLoaded', () => {


    // Dad Joke Generator

    //variables

    let btn = document.querySelector('#new-joke');
    let joke = document.querySelector('.joke');
    let answer = document.querySelector('.answer');
    let jokeGen = document.querySelector('.joke-gen');
    let container = document.querySelector('#container');


    const jokes = [
        { joke: "Why don't scientists trust atoms?", answer: "Because they make up everything!" },
        { joke: "Did you hear about the mathematician who's afraid of negative numbers?", answer: "He'll stop at nothing to avoid them!" },
        { joke: "Why did the scarecrow win an award?", answer: "Because he was outstanding in his field!" },
        { joke: "What do you call someone with no body and no nose?", answer: "Nobody knows!" },
        { joke: "Why did the bicycle fall over?", answer: "Because it was two-tired!" },
        { joke: "Why did the tomato turn red?", answer: "Because it saw the salad dressing!" },
        { joke: "What's brown and sticky?", answer: "A stick!" },
        { joke: "Why don't skeletons fight each other?", answer: "They don't have the guts!" },
        { joke: "Why don't eggs tell jokes?", answer: "Because they might crack up!" },
        { joke: "How do you organize a space party?", answer: "You planet!" },
        { joke: "Why don't skeletons fight each other?", answer: "They don't have the guts!" },
        { joke: "Why don't eggs tell jokes?", answer: "Because they might crack up!" },
        { joke: "How do you organize a space party?", answer: "You planet!" },
        { joke: "Why did the math book look sad?", answer: "Because it had too many problems!" },
        { joke: "Why did the tomato turn red?", answer: "Because it saw the salad dressing!" },
        { joke: "Why don't scientists trust atoms?", answer: "Because they make up everything!" },
        { joke: "Why don't some couples go to the gym?", answer: "Because some relationships don't work out!" },
        { joke: "What did the grape say when it got stepped on?", answer: "Nothing, it just let out a little wine!" },
        { joke: "Why did the scarecrow win an award?", answer: "Because he was outstanding in his field!" },
        { joke: "What do you call fake spaghetti?", answer: "An impasta!" },
        { joke: "What's brown and sticky?", answer: "A stick!" },
        { joke: "Why don't scientists trust atoms?", answer: "Because they make up everything!" },
        { joke: "Why did the golfer bring two pairs of pants?", answer: "In case he got a hole in one!" },
        { joke: "Why was the math book sad?", answer: "Because it had too many problems!" },
        { joke: "Why don't some couples go to the gym?", answer: "Because some relationships don't work out!" },
        { joke: "What's the best time to go to the dentist?", answer: "Tooth-hurty!" },
        { joke: "Why don't melons get married?", answer: "Because they cantaloupe!" },
        { joke: "What's orange and sounds like a parrot?", answer: "A carrot!" },
        { joke: "Why did the scarecrow win an award?", answer: "Because he was outstanding in his field!" },
        { joke: "Why did the bicycle fall over?", answer: "Because it was two-tired!" },
        { joke: "Why don't eggs tell jokes?", answer: "Because they might crack up!" },
        { joke: "Why did the scarecrow win an award?", answer: "Because he was outstanding in his field!" },
        { joke: "What did one wall say to the other wall?", answer: "I'll meet you at the corner!" },
        { joke: "Why don't skeletons fight each other?", answer: "They don't have the guts!" },
        { joke: "Why don't eggs tell jokes?", answer: "Because they might crack up!" },
        { joke: "How do you organize a space party?", answer: "You planet!" },
        { joke: "Why did the math book look sad?", answer: "Because it had too many problems!" },
        { joke: "Why did the tomato turn red?", answer: "Because it saw the salad dressing!" },
        { joke: "Why don't scientists trust atoms?", answer: "Because they make up everything!" },
        { joke: "Why don't some couples go to the gym?", answer: "Because some relationships don't work out!" },
        { joke: "What did the grape say when it got stepped on?", answer: "Nothing, it just let out a little wine!" },
        { joke: "Why did the scarecrow win an award?", answer: "Because he was outstanding in his field!" },
        { joke: "What do you call fake spaghetti?", answer: "An impasta!" },
        { joke: "What's brown and sticky?", answer: "A stick!" },
        { joke: "Why don't scientists trust atoms?", answer: "Because they make up everything!" },
        { joke: "Why did the golfer bring two pairs of pants?", answer: "In case he got a hole in one!" },
        { joke: "Why was the math book sad?", answer: "Because it had too many problems!" },
        { joke: "Why don't some couples go to the gym?", answer: "Because some relationships don't work out!" },
        { joke: "What's the best time to go to the dentist?", answer: "Tooth-hurty!" },
        { joke: "Why don't melons get married?", answer: "Because they cantaloupe!" },
        { joke: "What's orange and sounds like a parrot?", answer: "A carrot!" },
        { joke: "Why did the scarecrow win an award?", answer: "Because he was outstanding in his field!" },
        { joke: "Why did the bicycle fall over?", answer: "Because it was two-tired!" },
        { joke: "Why don't eggs tell jokes?", answer: "Because they might crack up!" },
        { joke: "Why did the scarecrow win an award?", answer: "Because he was outstanding in his field!" },
        { joke: "What did one wall say to the other wall?", answer: "I'll meet you at the corner!" },
        { joke: "Why don't skeletons fight each other?", answer: "They don't have the guts!" },
        { joke: "Why don't eggs tell jokes?", answer: "Because they might crack up!" },
        { joke: "How do you organize a space party?", answer: "You planet!" },
        { joke: "Why did the math book look sad?", answer: "Because it had too many problems!" },
        { joke: "Why did the tomato turn red?", answer: "Because it saw the salad dressing!" },
        { joke: "Why don't scientists trust atoms?", answer: "Because they make up everything!" },
        { joke: "Why don't some couples go to the gym?", answer: "Because some relationships don't work out!" },
        { joke: "What did the grape say when it got stepped on?", answer: "Nothing, it just let out a little wine!" },
        { joke: "Why did the scarecrow win an award?", answer: "Because he was outstanding in his field!" },
        { joke: "What do you call fake spaghetti?", answer: "An impasta!" },
        { joke: "What's brown and sticky?", answer: "A stick!" },
        { joke: "Why don't scientists trust atoms?", answer: "Because they make up everything!" },
        { joke: "Why did the golfer bring two pairs of pants?", answer: "In case he got a hole in one!" },
        { joke: "Why was the math book sad?", answer: "Because it had too many problems!" },
        { joke: "Why don't some couples go to the gym?", answer: "Because some relationships don't work out!" },
        { joke: "What's the best time to go to the dentist?", answer: "Tooth-hurty!" },];


    btn.addEventListener('click', function () {

        let random = Math.floor(Math.random() * jokes.length)

        joke.innerText = jokes[random].joke;
        answer.innerText = ''; // Clear previous answer

        setTimeout(() => {
            answer.innerText = jokes[random].answer;
            jokeGen.classList.add('gif-background');



            setTimeout(() => {
                jokeGen.classList.remove('gif-background'); // Remove the class to revert background

            }, 5000); // Duration of showing the GIF (adjust as needed)
        }, 5000);
    });
});
