<section class="mbr-navbar mbr-navbar--freeze  mbr-navbar--auto-collapse" id="menu-32" >
    <div class="mbr-navbar__section mbr-section" style="background-color:#e97263;  box-shadow: 2px 1px 5px #1c1c1c;">
        <div class="mbr-section__container container">
            <div class="mbr-navbar__container" >
                <div class="mbr-navbar__column mbr-navbar__column--s mbr-navbar__brand">
                    <span class="mbr-navbar__brand-link mbr-brand mbr-brand--inline">
                        <span class="mbr-brand__logo"><a href="#"><img src="assets/images/icon.png" class="mbr-navbar__brand-img mbr-brand__img" alt="AI Games"></a></span>
                        <span class="mbr-brand__name"><a class="mbr-brand__name text-white" href="#">AI GAMES</a></span>
                    </span>
                </div>
                <div class="mbr-navbar__hamburger mbr-hamburger"><span class="mbr-hamburger__line"></span></div>
                <div class="mbr-navbar__column mbr-navbar__menu">
                    <nav class="mbr-navbar__menu-box mbr-navbar__menu-box--inline-right">
                        <div class="mbr-navbar__column">
                            <ul class="mbr-navbar__items mbr-navbar__items--right float-left mbr-buttons mbr-buttons--freeze mbr-buttons--right btn-decorator mbr-buttons--active">
                               <li class="mbr-navbar__item"><a class="mbr-buttons__link btn text-white" href="index.php">HOME</a></li>
                               <li class="mbr-navbar__item"><a class="mbr-buttons__link btn text-white" href="#">DOCUMENTATION</a></li>
                               <li class="mbr-navbar__item"><a class="mbr-buttons__link btn text-white" href="games.php">Games</a></li></ul>
                            <ul class="mbr-navbar__items mbr-navbar__items--right mbr-buttons mbr-buttons--freeze mbr-buttons--right btn-inverse mbr-buttons--active">
                              <li class="mbr-navbar__item"><a id ="logbtn" class="mbr-buttons__btn btn btn-default" href="login.php">LOG IN</a></li></ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</section>
<script>
function change_navbar(_user){
 document.getElementById('logbtn').innerHTML = _user;
}

</script>
