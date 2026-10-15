(function(){
  var t=document.querySelector('.nav-toggle'), n=document.getElementById('primary-nav');
  if(t&&n){
    t.addEventListener('click',function(){
      var open=n.classList.toggle('open');
      t.setAttribute('aria-expanded',open);
      t.setAttribute('aria-label',open?'Close menu':'Open menu');
    });
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'&&n.classList.contains('open')){t.click();t.focus();}
    });
  }
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
})();
