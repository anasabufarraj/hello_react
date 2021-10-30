//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
function paginate(items, activePage, itemsInPage) {
  let sliceStart = (activePage - 1) * itemsInPage;
  return items.slice(sliceStart, sliceStart + itemsInPage);
}

export default paginate;
