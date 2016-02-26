Polls = new Mongo.Collection('polls');

Polls.schema = new SimpleSchema({
    question: {type: String}
});

Polls.attachSchema(Polls.schema);

Polls.helpers({
    answers() {
        return Answers.find({pollId: this._id});
    },

    resetVotes() {
        this.answers().forEach((answer) => answer.resetVotes())
    }
});
