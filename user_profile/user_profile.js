const onload = () => {
    const userData = JSON.parse(localStorage.getItem('userAccount'));
    if(!userData || !userData.email || !userData.password || !userData.login_status) {
        window.location.href = "/Project_4/index.html";
        return false;
    }
    let sub_header = document.getElementById('sub_header');
    sub_header.textContent += ' ' + userData.email;
    return true;
}