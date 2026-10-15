/* Edit this list to add, remove or change products. */
var PRODUCTS=[
 {name:"Managed Gigabit switch",cat:"Switching",desc:"Configurable Layer 2/3 switching with VLAN support for office and campus networks.",specs:["24 or 48 ports","VLAN, QoS","Rack mount"],image:"assets/images/Managed Gigabit switch.avif"},
 {name:"PoE switch",cat:"Switching",desc:"Powers IP phones, cameras and access points over the network cable.",specs:["PoE/PoE+","8 to 48 ports","Managed or unmanaged"],image:"assets/images/PoE switch.avif"},
 {name:"Unmanaged desktop switch",cat:"Switching",desc:"Plug-and-play switching for small offices and temporary setups.",specs:["5 to 24 ports","Gigabit","Fanless options"],image:"assets/images/Unmanaged desktop switch.jpg"},
 {name:"Enterprise edge router",cat:"Routing",desc:"High-capacity routing for site connectivity and internet breakout.",specs:["Multi-WAN","VPN support","Rack mount"],image:"assets/images/Enterprise edge router.jpg"},
 {name:"Indoor wireless access point",cat:"Wireless",desc:"Dual-band Wi-Fi for offices, classrooms and wards.",specs:["Wi-Fi 6 options","PoE powered","Ceiling mount"],image:"assets/images/Indoor wireless access point.jpg"},
 {name:"Outdoor wireless access point",cat:"Wireless",desc:"Weather-resistant Wi-Fi for compounds and open areas.",specs:["IP-rated","PoE powered","Pole or wall mount"],image:"assets/images/Outdoor wireless access point.jpg"},
 {name:"Wireless controller",cat:"Wireless",desc:"Central management of many access points from one dashboard.",specs:["Hardware or cloud","Guest access","Reporting"],image:"assets/images/Wireless controller.avif"},
 {name:"Fiber optic cable",cat:"Cabling",desc:"Single-mode and multi-mode fiber for backbone and inter-building links.",specs:["Indoor and outdoor","Various core counts","Pre-terminated options"],image:"assets/images/Fiber optic cable.jpg"},
 {name:"Cat6 / Cat6A / Cat7 cable",cat:"Cabling",desc:"Copper Ethernet cable for structured cabling installations.",specs:["UTP and FTP","305 m boxes","LSZH options"],image:"assets/images/Cat6 , Cat6A , Cat7 cable.avif"},
 {name:"Patch panels and patch cords",cat:"Cabling",desc:"Termination and patching hardware for orderly cable management.",specs:["24 or 48 port","Keystone modules","Assorted lengths"],image:"assets/images/Patch panels and patch cords.avif"},
 {name:"Floor-standing server rack",cat:"Racks",desc:"Full-height cabinet for servers and network equipment.",specs:["22U to 42U","Lockable doors","Fan and PDU options"],image:"assets/images/Floor-standing server rack.avif"},
 {name:"Wall-mount network cabinet",cat:"Racks",desc:"Compact enclosure for small rooms and branch offices.",specs:["6U to 12U","Lockable","Ventilated"],image:"assets/images/Wall-mount network cabinet.jpg"},
 {name:"NAS storage system",cat:"Storage",desc:"Network-attached storage for secure shared files and backups.",specs:["2 to 24 bays","RAID","Rack or desktop"],image:"assets/images/NAS storage system.jpg"},
 {name:"SAN storage array",cat:"Storage",desc:"Block storage for virtualization and large data workloads.",specs:["Expandable","High availability","Fibre Channel or iSCSI"],image:"assets/images/SAN storage array.jpg"},
 {name:"Rack-mount UPS",cat:"Power",desc:"Backup power that protects network devices from surges and blackouts.",specs:["1 to 10 kVA","Rack or tower","Network monitoring card"],image:"assets/images/Rack-mount UPS.avif"}
];
(function(){
  var grid=document.getElementById('product-grid'); if(!grid) return;
  var search=document.getElementById('search'), sel=document.getElementById('category'),
      count=document.getElementById('result-count'), empty=document.getElementById('empty');
  var cats=['All categories'].concat(PRODUCTS.map(function(p){return p.cat}).filter(function(c,i,a){return a.indexOf(c)===i}));
  sel.innerHTML=cats.map(function(c,i){return '<option value="'+(i?c:'')+'">'+c+'</option>'}).join('');
  function esc(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML}
  function render(){
    var q=search.value.trim().toLowerCase(), c=sel.value;
    var list=PRODUCTS.filter(function(p){
      var hay=(p.name+' '+p.cat+' '+p.desc+' '+p.specs.join(' ')).toLowerCase();
      return (!c||p.cat===c)&&(!q||hay.indexOf(q)>-1);
    });
    grid.innerHTML=list.map(function(p){
      return '<li class="product"><img src="'+esc(p.image)+'" alt="'+esc(p.name)+'" loading="lazy"><span class="tag">'+esc(p.cat)+'</span><h3>'+esc(p.name)+'</h3><p>'+esc(p.desc)+'</p><ul class="specs">'+
        p.specs.map(function(s){return '<li>'+esc(s)+'</li>'}).join('')+'</ul>'+
        '<a class="btn btn-outline btn-sm" href="contact.html?product='+encodeURIComponent(p.name)+'#quote">Start your order</a></li>';
    }).join('');
    count.textContent=list.length+(list.length===1?' product':' products');
    empty.hidden=list.length>0;
  }
  search.addEventListener('input',render); sel.addEventListener('change',render);
  var pre=new URLSearchParams(location.search).get('category'); if(pre) sel.value=pre;
  render();
})();
