// menu tabs
  document.querySelectorAll('.menu-tab').forEach(tab=>{
    tab.addEventListener('click', ()=>{
      document.querySelectorAll('.menu-tab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('.menu-panel').forEach(p=>p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('panel-'+tab.dataset.tab).classList.add('active');
    });
  });

  // gallery filter
  document.querySelectorAll('.gfilter').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.gfilter').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.gtile').forEach(tile=>{
        tile.classList.toggle('hidden', f!=='all' && tile.dataset.cat!==f);
      });
    });
  });

  // reservation form
  document.getElementById('reserveForm').addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('confirmMsg').style.display='block';
    this.querySelectorAll('input, select, button[type=submit]').forEach(el=>el.disabled=true);
  });

  // mobile menu toggle -> reveal nav links as a simple dropdown
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('nav.links');
  toggle.addEventListener('click', ()=>{
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position='absolute';
    links.style.top='64px'; links.style.right='32px';
    links.style.background='var(--ivory)';
    links.style.border='1px solid var(--line)';
    links.style.padding='14px 20px';
    links.style.gap='12px';
  });