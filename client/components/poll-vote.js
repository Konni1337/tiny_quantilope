Template.pollVote.events({
    'click .vote-button'(ignore, template) {
        const answerId = template.$('[name=answer]:checked').val();
        if (answerId === undefined) {
            alert(TAPi18n.__('polls.no_answer_selected'));
        } else {
            Answers.update(
                { _id: answerId },
                { $inc: {votes: 1} }
            );
        }
    }
});