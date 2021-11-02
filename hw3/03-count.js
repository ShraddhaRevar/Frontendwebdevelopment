function highlightSearch(text){
    var sel = new Mark(document.querySelector(".select"));

    sel.unmark();

    sel.mark(
        document.getElementById("query").value,
        { className: 'a' + text }
    );
    }