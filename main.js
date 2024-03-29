class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header-inner">
                    <div class="logo-and-title">
                        <img src="images/logo .png" alt="Logo" style="border-radius: 100%; width:80px; margin-right: 5px;">
                        <h1 class="name">Global Adventure</h1>
                    </div>
                    <nav class="dropdownmenu">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li>
                                <a>Destinations</a>
                                <ul id="submenu">
                                    <li><a href="italy.html">Italy</a></li>
                                    <li><a href="greece.html">Greece</a></li>
                                    <li><a href="israel.html">israel</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    }
} 

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML ='<footer>'+
       ' <p>© 2024 Global Adventure. All rights reserved.</p>'+
        '<div class="social-links">'+
            '<a href="http://facebook.com">Facebook</a>'+
            '<a href="http://twitter.com">Twitter</a>'+
           ' <a href="http://instagram.com">Instagram</a>'+
        '</div>'
   '</footer>'
             
    }
} 

customElements.define('my-header',MyHeader)
customElements.define('my-footer',MyFooter)


