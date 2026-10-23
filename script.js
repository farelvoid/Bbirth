// ============ UBAH DI SINI ============
const CONFIG={
  nama:"qha",
  kode:"241009",            // 6 digit, kode rahasia pembuka
  tanggal:"october 24",
  surat:[
    "Di hari yang paling istimewa ini, saya ingin awak tahu bahwa berjumpa dengan awak adalah salah satu hal terbaik yang datang ke hidup saya tahun ni, di bumi yang pelik ni akhirnya saya jumpa dengan awak yang buat saya berpikir (dia ni beda do) camtuu.",
    "Dan terima kasih awak sudah jadi teman yapping saya, dah mau bagi story awak ke saya dan tak annoy dengan saya (sorry kalau annoy). Dan paling penting semoga dengan bertambah nya usia awak malam ni awak jadi pribadi lebih baik,lebih pandai manage emosi awak dari orang orang stress, semoga tahun ini dan tahun tahun berikut nya penuh hal baik buat awak dan semoga SPM straigt A+!!."
  ],
  bunga:[
    {e:"🌻",t:"Senyummu seperti bunga matahari, selalu menghadap cahaya dan menghangatkan sekitarnya."},
    {e:"🌷",t:"Awak lembut tapi kuat, kayak tulip yang tetap mekar di cuaca apa pun."},
    {e:"🌹",t:"Mawar ini buat semua hari yang kita lewati bareng."},
    {e:"🌸",t:"Semoga hidupmu seindah musim bunga sakura."},
    {e:"💐",t:"Dan semoga semua doamu pelan-pelan jadi nyata."}
  ],
  foto:[ // isi src dengan path foto, contoh "img/1.jpg"
    {src:"gambar/6.jpg",judul:"masa awal",cap:"membuktikan bahwa saya asli indon."},
    {src:"gambar/5.jpg",judul:"Awek cortis",cap:"tak tau nama dia yang penting cortis."},
    {src:"gambar/3.jpeg",judul:"<3",cap:"no cap just beutiful."},
    {src:"gambar/4.jpeg",judul:"Pretty",cap:"Titut."}
  ],
  timeline:[
    {w:"Malam pertama",j:"awal kita jumpa",d:"Awalnya biasa aja, tapi ada sesuatu yang bikin saya mau kenal awak lebih dekat."},
    {w:"Malam-malam Panjang",j:"Percakapan yang Tak Pernah Terasa Cukup",d:"borak sampai lupa waktu,main bareng dan lagi banyak story belum terucap."},
    {w:"Hari Ini",j:"Hari yang spesial bagi awak",d:"Makin hari makin jadi seseorang yang lebih baik,dan saya harap bisa kenal lagi jauh dengan awak, nama pun masih qha huhuhuT_T."}
  ],
  lagu:[ // isi src dengan path mp3, contoh "music/lagu1.mp3"
    {judul:"her",artis:"JVKE",src:"music/her.mp3"},
    {judul:"Monokrom",artis:"Tulus",src:"music/Monokrom.mp3"},
    {judul:"purple",artis:"Olivia Rodrigo",src:"music/purple.mp3"}
  ],
  catatan:[
    "Terima kasih sudah jadi orang yang selalu ada mendengar cite saya.",
    "saya bersyukur atas kehadiran awak yang selalu berhasil menenangkan pikiran saya yang sedang kacau.",
    "Cara awak care sama hal-hal kecil itu berharga banget.",
    "Awak bikin hari yang berat jadi lebih ringan.",
    "Terima kasih sudah sabar sama saya.",
    "Always be happy, sebab tawa awak selalu buat saya happy jugaa....",
    "Kamu apa adanya jangan peduli dengan orang yang tak suka awak, dan itu cukup banget maybe lebih dari cukup.",
    "Saya senang kenal awak."
  ],
  penutup:"Dengan cinta yang tidak pernah habis 💗"
};
// =====================================

const $=s=>document.querySelector(s),C=CONFIG;
const rnd=(a,b)=>Math.random()*(b-a)+a;

// teks dasar
document.title=`Selamat Ulang Tahun, ${C.nama} 🌸`;
$('#lockTitle').textContent=`Untuk ${C.nama}`;
$('#nm').textContent=C.nama;$('#dt').textContent=`${C.tanggal.toUpperCase()} · THE MOST SPECIAL DAY`;
$('#wish').innerHTML=`Happy Birthday! ${C.nama} yang paling istimewa 🌸<small>${C.penutup.toUpperCase()}</small>`;
$('#ld').textContent=C.tanggal.toUpperCase();$('#lh').textContent=`${C.nama}-the yap. 🌸`;
$('#lb').innerHTML=C.surat.map(p=>`<p>${p}</p>`).join('');
$('#foot').textContent=C.penutup;

// kelopak jatuh
function petal(){const p=document.createElement('div');p.className='petal';p.textContent=['🌸','🌼','🌺','🌻'][Math.floor(rnd(0,4))];
 p.style.cssText+=`left:${rnd(0,100)}vw;font-size:${rnd(12,26)}px;animation-duration:${rnd(9,16)}s`;document.body.append(p);setTimeout(()=>p.remove(),16000)}
setInterval(petal,900);

// loader -> lock
setTimeout(()=>{$('#loader').classList.add('fade');$('#lock').classList.remove('hidden')},2000);

// keypad
let buf='';const dots=$('#dots'),pad=$('#pad');
dots.innerHTML='<i></i>'.repeat(6);
['1','2','3','4','5','6','7','8','9','✕','0','↵'].forEach(k=>{const b=document.createElement('button');b.textContent=k;
 if(k==='↵')b.className='go';b.onclick=()=>key(k);pad.append(b)});
function draw(){[...dots.children].forEach((d,i)=>d.classList.toggle('on',i<buf.length))}
function key(k){
 if(k==='✕')buf=buf.slice(0,-1);
 else if(k==='↵')check();
 else if(buf.length<6){buf+=k;if(buf.length===6)setTimeout(check,150)}
 draw()}
function check(){
 if(buf===C.kode){$('#lock').classList.add('fade');setTimeout(()=>{$('#lock').remove();$('#giftScr').classList.remove('hidden')},700)}
 else{const b=$('#lockbox');b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake');buf='';draw()}}
document.addEventListener('keydown',e=>{if($('#lock')&&!$('#lock').classList.contains('hidden')){if(/\d/.test(e.key))key(e.key);else if(e.key==='Backspace')key('✕');else if(e.key==='Enter')key('↵')}});

// kotak hadiah -> bunga -> halaman utama
$('#gift').onclick=()=>{
 const b=document.createElement('div');b.className='burst';
 for(let i=0;i<22;i++){const s=document.createElement('span');s.textContent=['🌸','🌼','🌺','🌻','💐'][i%5];
  s.style.cssText=`left:${rnd(0,95)}%;top:${rnd(0,90)}%;animation-delay:${rnd(0,.6)}s`;b.append(s)}
 document.body.append(b);
 setTimeout(()=>{$('#giftScr').classList.add('fade');$('#main').classList.remove('hidden');scrollTo(0,0);play();confetti()},900);
 setTimeout(()=>{b.remove();$('#giftScr').remove()},2400)};

// confetti
function confetti(){for(let i=0;i<60;i++){const c=document.createElement('i');c.className='conf';
 c.style.cssText=`left:${rnd(0,100)}vw;background:hsl(${rnd(0,360)},80%,70%);animation-duration:${rnd(2,4)}s;animation-delay:${rnd(0,.8)}s`;document.body.append(c);setTimeout(()=>c.remove(),5000)}}

// kue
$('#cake').onclick=()=>{const c=$('#cake');if(!c.classList.contains('off')){c.classList.add('off');confetti();$('.tap').textContent='Semoga semua harapanmu terkabul! ✨'}else{c.classList.remove('off');$('.tap').textContent='Tap lilin untuk meniupnya! 🎂'}};

// buket
const bq=$('#bq'),n=C.bunga.length;
C.bunga.forEach((f,i)=>{const a=(i/(n-1)-.5)*110*Math.PI/180,x=130+Math.sin(a)*100-27,y=100-Math.cos(a)*70;
 const s=document.createElement('div');s.className='stem';s.style.transform=`rotate(${(i/(n-1)-.5)*60}deg)`;bq.append(s);
 const b=document.createElement('button');b.className='fl';b.textContent=f.e;b.style.cssText=`left:${x}px;top:${y}px`;
 b.onclick=()=>{bq.querySelectorAll('.fl').forEach(z=>z.classList.remove('sel'));b.classList.add('sel');$('#bqt').textContent=`"${f.t}"`};bq.append(b)});

// foto
$('#grid').innerHTML=C.foto.map(f=>`<div class="pol"><div class="in"><div class="f"><span>📷</span>Ketuk untuk mengungkap</div>
 <div class="b"><div class="ph" style="${f.src?`background-image:url('${f.src}')`:''}">${f.src?'':'🌸'}</div><p>${f.judul}</p><small>${f.cap}</small></div></div></div>`).join('');
document.querySelectorAll('.pol').forEach(p=>p.onclick=()=>p.classList.toggle('open'));

// timeline
$('#tl').innerHTML=C.timeline.map(t=>`<div class="ti"><small>${t.w.toUpperCase()}</small><h3>${t.j}</h3><p>${t.d}</p></div>`).join('');
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.3});
document.querySelectorAll('.ti').forEach(t=>io.observe(t));

// musik
const au=new Audio();let ti=0,playing=false;
function load(i){ti=(i+C.lagu.length)%C.lagu.length;const l=C.lagu[ti];au.src=l.src;$('#pt').textContent=l.judul;$('#pa').textContent=l.artis;
 [...$('#pl').children].forEach((d,j)=>d.classList.toggle('cur',j===ti))}
$('#pl').innerHTML=C.lagu.map((l,i)=>`<div><span>${l.judul}</span><small>${l.artis}</small></div>`).join('');
[...$('#pl').children].forEach((d,i)=>d.onclick=()=>{load(i);play()});
function play(){if(!au.src||!C.lagu[ti].src)return;au.play().then(()=>{playing=true;ui()}).catch(()=>{})}
function pause(){au.pause();playing=false;ui()}
function ui(){$('#pp').textContent=playing?'⏸':'▶';$('#disc').classList.toggle('play',playing)}
$('#pp').onclick=()=>playing?pause():play();$('#mbtn').onclick=$('#pp').onclick;
$('#next').onclick=()=>{load(ti+1);play()};$('#prev').onclick=()=>{load(ti-1);play()};
au.onended=()=>{load(ti+1);play()};
au.ontimeupdate=()=>$('#fill').style.width=(au.currentTime/au.duration*100||0)+'%';
$('#bar').onclick=e=>{const r=e.currentTarget.getBoundingClientRect();au.currentTime=(e.clientX-r.left)/r.width*au.duration};
load(0);

// toples
const cols=['#f4a6c0','#ffd86b','#8fd0ff','#b9e4a8'];
for(let i=0;i<9;i++){const k=document.createElement('i');k.style.cssText=`left:${rnd(4,44)}px;bottom:${rnd(4,26)}px;background:${cols[i%4]};transform:rotate(${rnd(-50,50)}deg)`;$('#jar').append(k)}
let seen=[];
$('#shake').onclick=()=>{
 $('#jar').classList.remove('shake');void $('#jar').offsetWidth;$('#jar').classList.add('shake');
 if(seen.length===C.catatan.length)seen=[];
 let i;do{i=Math.floor(rnd(0,C.catatan.length))}while(seen.includes(i));seen.push(i);
 $('#out').innerHTML=`<div class="note">"${C.catatan[i]}"<small>CATATAN ${i+1} DARI ${C.catatan.length}</small></div>`;confetti()};
