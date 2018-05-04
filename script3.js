history.pushState(null, null, location.href);

    window.onpopstate = function () {
      history.go(1);
      window.location.assign("prevpg.html")
    }

function prevPage(){
  window.location.assign("prevpg.html")
}