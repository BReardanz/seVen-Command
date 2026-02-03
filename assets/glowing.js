document.addEventListener("DOMContentLoaded", ()=>{
  setTimeout(()=>{
    document.getElementById("bootup")?.remove();
  }, 3000);

  document.querySelectorAll("button, a").forEach(el=>{
    el.addEventListener("mouseenter", ()=> el.style.boxShadow=`0 0 12px var(--accent)`);
    el.addEventListener("mouseleave", ()=> el.style.boxShadow="none");
  });
});
