UI.registerHelper('indexedArray', (context) => {
    if (context) {
        return context.map((item, index) => {
            item._index = index;
            return item;
        });
    }
});