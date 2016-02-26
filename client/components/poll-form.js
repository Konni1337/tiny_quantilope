Template.pollForm.events({
    'change input[name=question]': _.throttle(function (event) {
        if (event.target.value)
            if (Polls.update(this.poll._id, {$set: {question: event.target.value}}))
                Polls.findOne(this.poll._id).resetVotes();
    }, 300),

    'blur input[name=question]'() {
        if (!event.target.value) event.target.value = TAPi18n.__("polls.question_needed")
    },

    'keydown input[name=question]'(event) {
        if (event.which === ESC_KEY || event.which === ENTER_KEY) {
            event.preventDefault();
            event.target.blur();
        }
    },

    'click #more'() {
        Answers.insert({
            text: TAPi18n.__("answers.default_text") + this.poll.answers().count(),
            pollId: this.poll._id
        });
    }
});