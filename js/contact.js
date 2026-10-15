(function(){
  var form=document.getElementById('quote-form'); if(!form) return;
  var msg=document.getElementById('form-msg');
  var EMAIL="info@bozake.co.ke", WA="254706819942";
  var pre=new URLSearchParams(location.search).get('product');
  if(pre){document.getElementById('product').value=pre;}
  function val(id){return document.getElementById(id).value.trim()}
  function check(){
    var missing=[];
    if(!val('name')) missing.push('your name');
    var e=val('email'), p=val('phone');
    if(!e&&!p) missing.push('an email or phone number');
    else if(e&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)) missing.push('a valid email address');
    if(!val('message')) missing.push('your requirement');
    if(missing.length){
      msg.className='form-msg error';
      msg.textContent='Please add '+missing.join(', ')+'.';
      return false;
    }
    msg.className='form-msg'; msg.textContent=''; return true;
  }
  function body(){
    return ['Name: '+val('name'),'Organization: '+val('org'),'Type: '+val('type'),
      'Email: '+val('email'),'Phone: '+val('phone'),'Product/service: '+val('product'),'','Requirement:',val('message')].join('\n');
  }
  form.addEventListener('submit',function(ev){
    ev.preventDefault(); if(!check()) return;
    var subj='Quotation request'+(val('product')?': '+val('product'):'');
    location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body());
    msg.className='form-msg ok'; msg.textContent='Your email app should open with the request ready to send.';
  });
  document.getElementById('send-wa').addEventListener('click',function(){
    if(!check()) return;
    window.open('https://wa.me/'+WA+'?text='+encodeURIComponent('Quotation request\n'+body()),'_blank','noopener');
  });
})();
