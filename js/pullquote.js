if (typeof $jq == 'undefined') {
  var $jq = jQuery.noConflict();
}
function randOrder() {
  return (Math.round(Math.random())-0.5);
}
function genList(M,N,typ) {
  ary = [];
  for (idx=0; idx<M && N>0; ++idx) {
    if ((Math.floor(Math.random()*(M-idx)))<N || typ == "all") {
      ary.push(idx);
      N=N-1;
    }
  }
  return(ary);
}
function smd_pullquote() {
  var snipReg = /~~.+?~~/gi;
  var cleaReg = /~~/gi;
  var numQuotes = $jq(".pq").length;
  var quotes = [];
  var quoteCtr = 0;
  var quotePos = [];
  var lim = (0 > numQuotes || 0 == 0) ? numQuotes : 0;
  chosen = genList(numQuotes, lim, "all");
  $jq(".pq").each(function() {
    var $this = $jq(this);
    txt = $this.text();
    rep = txt.replace(snipReg, "&hellip;");
    quotes.push(rep);
    quotePos.push($this.offset());
    $this.text(txt.replace(cleaReg, ""));
    quoteCtr++;
  });
  for (var idx = 0; idx < chosen.length; idx++) {
    $jq(".entry-content").prepend('<q class="pQuote">'+quotes[chosen[idx]]+'</q>');
  }
}
$jq(function() {
  smd_pullquote();
});
