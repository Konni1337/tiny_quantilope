Template.results.helpers({
    polls() {
        return [Polls.findOne()];
    }
});

Template.results.onRendered(function() {
    // Create a chart.js chart for every poll
    Polls.find().forEach(function(poll) {
        // Small color helper
        const getColor = function(index = Number.MAX_VALUE) {
            const colors = ["#add8e6", '#e0ffff', "#90ee90", "#d3d3d3", "#ffb6c1", "#ffffe0"];
            if (index > colors.length) {
                return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
            } else {
                return colors[index];
            }
        };
        const data = {
            labels: [poll.question],
            datasets: poll.answers().map(function(answer, index) {
                const color = getColor(index);
                return {
                    label: answer.answer,
                    fillColor: color,
                    strokeColor: color,
                    highlightFill: color,
                    highlightStroke: color,
                    data: [answer.votes]
                }
            })
        };

        new Chart(document.getElementById('chart' + poll._id).getContext('2d')).Bar(data);
    })
});