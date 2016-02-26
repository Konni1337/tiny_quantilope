const DEFAULT_VOTES = 0;

Answers = new Mongo.Collection('answers');

Answers.schema = new SimpleSchema({
    pollId: {type: String, regEx: SimpleSchema.RegEx.Id},
    text: {type: String},
    votes: {type: Number, defaultValue: DEFAULT_VOTES}
});

Answers.attachSchema(Answers.schema);

Answers.helpers({
    poll() {
        return Polls.findOne({_id: this.pollId});
    },

    resetVotes() {
        Answers.update(this._id, {$set: {votes: DEFAULT_VOTES}})
    }
});
