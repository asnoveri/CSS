const detik = document.querySelector(".detik");
const menit = document.querySelector(".menit");
const hour = document.querySelector(".hour");

// detik.style.transform = "rotate(100deg)";



setInterval(() => {
    time();
}, 1000);

function time() {
    const d = new Date();
    const dtk = d.getSeconds();
    const dtkJln = ((dtk / 60 * 360) + 90);
    console.log(dtk);
    console.log(dtkJln);
    detik.style.transform = `rotate(${dtkJln}deg)`;
    if (dtkJln === 90) {
        detik.style.transition = 'none';
    } else if (dtkJln >= 91) {
        detik.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)'
    }

    const mnt = d.getMinutes();
    console.log(mnt);
    const mntJln = ((mnt / 60 * 360) + 90);
    console.log(mntJln);
    menit.style.transform = `rotate(${mntJln}deg)`;
    menit.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';

    const hrs = d.getHours();
    const hrsJln = ((hrs / 12 * 360) + 90);
    console.log(hrs);
    console.log(hrsJln);
    hour.style.transform = `rotate(${hrsJln}deg)`;
    hour.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
}