// @include ~/Documents/basiljs/basil.js;

function draw() {

  // empty document and set page count to 1
  clear(doc());
  pageCount(1);
  doc().documentPreferences.facingPages = false; // force non-facing pages, sorry guys!

  // add one page at the end of the document
  addPage();
  text("Example A", width / 2, height / 2, 100, 100);
  // removes current page
  removePage();

  // fill up again...
  addPage();
  // removes page 1
  removePage(1);

  // fill up again and save reference in myPage
  var myPage = addPage();
  // removes myPage right away... you won't see it ever
  removePage(myPage);

  // add pages until 20
  for(var i = pageCount(); i < 20; i++) {
    addPage();
    text("Example B-" + (i + 1), width / 2, height / 2, 100, 100);
  }

  // set location of insertion
  addPage(AT_END); // default
  text("Example AT_END", width / 2, height / 2, 100, 100);
  addPage(AT_BEGINNING);
  text("Example AT_BEGINNING", width / 2, height / 2, 100, 100);

  // adds a page before page 10
  page(10); // set current page
  addPage(BEFORE); // this refers to the current page
  text("Example BEFORE 10 becomes the new 10", width / 2, height / 2, 100, 100);

  // guess what!
  page(15);
  addPage(AFTER);
  text("Example AFTER 15 becomes 16", width / 2, height / 2, 100, 100);

  println(pageCount());

}
