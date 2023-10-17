window.addEventListener("load", function () {
    // Function to set a cookie
    function setCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Function to get a cookie
    function getCookie(name) {
        let cookieArr = document.cookie.split(';');
        for(let i = 0; i < cookieArr.length; i++) {
            let cookiePair = cookieArr[i].split("=");
            if(name == cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        return null;
    }

    function showNotificationBar() {
        // Check if the cookie exists and hides the notification bar
        if (getCookie("hideNotification") === "true") {
            return;
        }

        var bar = document.createElement('div');
        bar.setAttribute('id', 'notification-bar');
        bar.innerHTML = '⚠️ There is currently an outage. Please see Discord for more information. <button id="closeNotificationButton">X</button>';

        bar.style.visibility = 'hidden';
        bar.style.opacity = '0';
        bar.style.position = 'fixed';
        bar.style.top = '-50px';
        bar.style.left = '0';
        bar.style.width = '100%';
        bar.style.padding = '10px 20px';
        bar.style.backgroundColor = '#4CAF50';
        bar.style.color = 'white';
        bar.style.textAlign = 'center';
        bar.style.zIndex = '1000';
        bar.style.boxShadow = '0px 2px 15px rgba(0, 0, 0, 0.2)';
        bar.style.fontSize = '18px';
        bar.style.transition = 'top 0.5s, opacity 0.5s';

        document.body.appendChild(bar);

        function closeNotification() {
            bar.style.top = '-50px';
            bar.style.opacity = '0';
            setTimeout(function() {
                bar.style.visibility = 'hidden';
            }, 500);

            // Set a cookie that expires in 1 day (24 hours)
            setCookie("hideNotification", "true", 1);
        }

        var closeButton = document.getElementById('closeNotificationButton');
        closeButton.addEventListener('click', closeNotification);
        closeButton.style.marginLeft = '15px';
        closeButton.style.color = 'white';
        closeButton.style.backgroundColor = 'transparent';
        closeButton.style.border = 'none';
        closeButton.style.fontSize = '18px';
        closeButton.style.cursor = 'pointer';

        setTimeout(function() {
            bar.style.visibility = 'visible';
            bar.offsetHeight;
            
            bar.style.top = '0';
            bar.style.opacity = '1';
        }, 3000);
    }

    try {
        showNotificationBar();
    } catch (e) {
        console.error("Error creating notification bar: ", e);
    }
});
