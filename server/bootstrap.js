Meteor.startup(() => {
    if (Polls.find().count() === 0) {

        const samplePoll = {
            question: 'What is your gender?'
        };
        const answers = [
            {text: 'male'},
            {text: 'female'},
            {text: 'other'}
        ];
        const pollId = Polls.insert(samplePoll);
        answers.forEach((answer) => {
            Answers.insert({
                pollId: pollId,
                text: answer.text
            });
        });
    }
});
