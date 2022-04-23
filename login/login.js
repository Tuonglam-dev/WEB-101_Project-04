async function login () {
    try {
        const loginData = await fetch('../../login_data.json');
        const loginJson = await loginData.json();
        const email = document.getElementById('email_address').value;
        const password = document.getElementById('password').value;
        const dataMatch = loginJson.account.find(loginResource =>
            loginResource.email === email &&
            loginResource.password === password 
        );
        if (!dataMatch) {
            console.log(false)
            return false;
        }
        localStorage.setItem( 'userAccount',JSON.stringify({
            email: dataMatch.email,
            password: dataMatch.password,
            login_status: true
        }));

        window.location.href = "/Project_4/user_profile/user_profile.html"
        return true
    } catch (error) {
        console.error(error)
        return false;
    }

}