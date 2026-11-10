/* MQS website: small interactions. Every page works without this file; it only adds the filters, tabs and card fan. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var plural = function (n, one, many) { return n + ' ' + (n === 1 ? one : many); };

  /* Home: "Life at MQS" card fan. Click a card, or its name in the list, to bring it to the front. */
  var fan = $('.fan');
  if (fan) {
    var cards = $$('.card', fan);
    var names = $$('.evl button');
    var order = cards.map(function (_, i) { return i; });
    var paint = function () {
      cards.forEach(function (c, i) { c.className = c.className.replace(/\bk\d\b/, 'k' + order.indexOf(i)); });
      names.forEach(function (b, i) { b.classList.toggle('on', i === order[0]); });
    };
    var pick = function (i) { order = [i].concat(order.filter(function (x) { return x !== i; })); paint(); };
    cards.forEach(function (c, i) { c.addEventListener('click', function () { pick(i); }); });
    names.forEach(function (b, i) { b.addEventListener('click', function () { pick(i); }); });
  }

  /* Teams: show the first few members of a long roster, with a "Show all" button. */
  $$('.mg[data-initial]').forEach(function (grid) {
    var initial = parseInt(grid.getAttribute('data-initial'), 10) || 9;
    var items = $$('.mc', grid);
    if (items.length <= initial) return;
    var status = $('[data-showing]', grid.parentNode);
    var open = false;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'more';
    grid.parentNode.appendChild(btn);
    var render = function () {
      items.forEach(function (m, i) { m.hidden = !open && i >= initial; });
      if (status) status.textContent = 'Showing ' + (open ? items.length : initial) + ' of ' + items.length;
      btn.textContent = open ? 'Show fewer' : 'Show all ' + items.length + ' members';
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    btn.addEventListener('click', function () { open = !open; render(); });
    render();
  });

  /* Projects: filter the list by team. */
  var plist = $('[data-projects]');
  if (plist) {
    var ptabs = $$('.ftab[data-filter]');
    var prows = $$('.prow', plist);
    var pcount = $('[data-count]');
    ptabs.forEach(function (t) {
      t.addEventListener('click', function () {
        var f = t.getAttribute('data-filter'), n = 0;
        ptabs.forEach(function (x) { var on = x === t; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
        prows.forEach(function (r) { var show = f === 'All' || r.getAttribute('data-team') === f; r.hidden = !show; if (show) n++; });
        if (pcount) pcount.textContent = plural(n, 'project', 'projects');
      });
    });
  }

  /* Events: filter past events by category. The list starts as one row of three; picking a filter or "Show all" opens the rest. */
  var past = $('[data-past]');
  if (past) {
    var etabs = $$('.ftab[data-cat]');
    var evs = $$('.ev', past);
    var ecount = $('[data-count]');
    var more = $('[data-more]');
    var cat = 'All', openAll = false;
    var erender = function () {
      var list = evs.filter(function (e) { return cat === 'All' || e.getAttribute('data-cat') === cat; });
      var shown = openAll ? list : list.slice(0, 3);
      evs.forEach(function (e) { e.hidden = shown.indexOf(e) === -1; });
      if (ecount) ecount.textContent = plural(list.length, 'event', 'events');
      if (more) {
        more.hidden = list.length <= 3;
        more.textContent = openAll ? 'Show less' : 'Show all ' + list.length + ' past events';
        more.setAttribute('aria-expanded', openAll ? 'true' : 'false');
      }
    };
    etabs.forEach(function (t) {
      t.addEventListener('click', function () {
        cat = t.getAttribute('data-cat'); openAll = true;
        etabs.forEach(function (x) { var on = x === t; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
        erender();
      });
    });
    if (more) more.addEventListener('click', function () { openAll = !openAll; erender(); });
    erender();
  }

  /* Resources: one section per team. */
  var rtabs = $$('.ftab[data-sec]');
  if (rtabs.length) {
    var secs = $$('.rsec');
    rtabs.forEach(function (t) {
      t.addEventListener('click', function () {
        var id = t.getAttribute('data-sec');
        rtabs.forEach(function (x) { var on = x === t; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
        secs.forEach(function (s) { s.hidden = s.getAttribute('data-sec') !== id; });
      });
    });
    secs.forEach(function (s, i) { s.hidden = i !== 0; });
  }

  /* Sign in: switch between Members, Team leads and Admin. */
  var roles = $$('.rl[data-role]');
  if (roles.length) {
    var page = $('#signin');
    var bodies = $$('[data-role-body]');
    var set = function (sel, v) { var el = $(sel); if (el) el.textContent = v; };
    roles.forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-role');
        roles.forEach(function (x) { var on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
        page.className = 'page ' + b.getAttribute('data-colour');
        set('[data-out-tag]', b.getAttribute('data-tag'));
        set('[data-out-title]', b.getAttribute('data-title'));
        set('[data-out-sub]', b.getAttribute('data-sub'));
        set('[data-out-panel]', b.getAttribute('data-panel'));
        bodies.forEach(function (el) { el.hidden = el.getAttribute('data-role-body') !== id; });
      });
    });
  }
})();
