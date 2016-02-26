Template.answerForm.helpers({
    indexForLabel(index) {
        return index + 1;
    }
});

Template.answerForm.events({
    'change input[name=answer]': _.throttle(function (event) {
        if (event.target.value)
            if (Answers.update(this.answer._id, {$set: {text: event.target.value}}))
                Polls.findOne(this.answer.pollId).resetVotes();
    }, 300),

    'blur input[name=answer]'() {
        if (!event.target.value) event.target.value = TAPi18n.__("polls.question_needed")
    },

    'keydown input[name=answer]'(event) {
        if (event.which === ESC_KEY || event.which === ENTER_KEY) {
            event.preventDefault();
            event.target.blur();
        }
    },

    'click .remove'() {
        Answers.remove(this.answer._id);
    }
});