//Random
function Rd() {
    var num = Math.ceil((Math.random() * 2));
    var msg = "WARNING!遭遇野生怪物攻擊!"
    if (num == 1) {
        if (confirm(msg) == true) {
            $(document).ready(function () {
                $("#tabs-content").html(
                    `
                    <div class="row">
                        <div class="col-lg-4 col-md-3"></div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <h1 class="h1">&ltFight&gt;</h1>
                        </div>
                        <div class="col-lg-4 col-md-3"></div>
                    </div>
                    <div class="row">
                        <div class="col-4"></div>
                        <div class="col-4 mos"><img src="img/mos.gif" alt=""></div>
                        <div class="col-4"></div>
                    </div>
                    <div class="row">
                        <div class="col-4"></div>
                        <div class="col-4 HP">100/100</div>
                        <div class="col-4"></div>
                    </div>
                    <div class="row">
                        <div class="col-4"></div>
                        <div class="col-4 text">野生期末怪獸</div>
                        <div class="col-4"></div>
                    </div>

                    <div class="row">
                        <div class="col-4"></div>
                        <div class="col-2 mos">
                            <ul class="ul">
                                <li class="li2"><a href="#" class="em" onclick='A();'>(A) 攻擊</a></li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <ul class="ul">
                                <li class="li2"><a href="#" class="em" onclick='B();'>(B) 道具</a></li>

                            </ul>
                        </div>
                        <div class="col-3"></div>
                    </div>
                    <div class="row">
                        <div class="col-4"></div>
                        <div class="col-2 mos">
                            <ul class="ul">
                                <li class="li2"><a href="#" class="em" onclick='C();'>(C) 防守</a></li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <ul class="ul">
                                <li class="li2"><a href="#" class="em" onclick='D();'>(D) 逃跑</a></li>
                            </ul>
                        </div>
                        <div class="col-3"></div>
                        
                    </div>
                    `
                )
            });
        }
    }
}

$(document).ready(function () {

    //prompt
    var name;
    name = prompt("請輸入暱稱:");
    for (var i = 1; i > 0; i++) {
        if (name == null) {
            alert("請輸入暱稱!!");
            name = prompt("請輸入暱稱:");
        }
        else if (name == "") {
            alert("請輸入暱稱!!");
            name = prompt("請輸入暱稱:");
        }
        else {
            alert("Loading...");
            alert('"' + name + '，歡迎來到您的網站。"');
            var nick = document.getElementById("nick");
            nick.innerHTML = name;
            break
        }

    }

    //dropdownlist
    $('.option').hover(function () {
        $(this).children('.option-cont').slideDown('fast');
        $('.header').addClass('title2');
    },
        function () {
            $(this).children('.option-cont').slideUp(400);
            $('.header').removeClass('title2');
        });

    //hover&click
    $('.me').click(function () {
        $('.header').addClass('head');
    });

    $('#Me').hover(function () {
        $('.header').addClass('head');
    },
        function () {
            $('.header').removeClass('head');
        });

    $('.me').hover(function () {
        $('.header').addClass('head2');
    },
        function () {
            $('.header').removeClass('head2');
        });

    $('#Lic').hover(function () {
        $('.header').addClass('.title2');
    },
        function () {
            $('.header').removeClass('.title2');
        });

    $('#Ex').bind('click', change);
    function change() {
        $('.header').addClass('furit');
    }
    $('.me,#Lic').on('click', function () {
        $('.header').removeClass('furit');
    });

    $('#Ex').hover(function () {
        $('.header').addClass('furit-hover');
    },
        function () {
            $('.header').removeClass('furit-hover');
        });

    //content
    $("#Inf").click(function () {
        $("#tabs-content").html(
            `
            <div class="row">
			<div class="col-lg-4 col-md-3"></div>
			<div class="col-lg-4 col-md-6 col-12">
				<h1 class="h1">&ltInformation&gt;</h1>
			</div>
			<div class="col-lg-4 col-md-3"></div>
		</div>
		<div class="row">
			<div class="col-lg-3 col-md-3"></div>
			<div class="col-lg-4 col-6">
				<ul class="ul">
					<li class="li2">Name:</li>
					<li class="li2">Phone Number:</li>
					<li class="li2">Email:</li>
					<li class="li2">Interest:</li>
					<li class="li2">HP:</li>
					<li class="li2">LP:</li>
				</ul>
			</div>
			<div class="col-lg-5 col-6">
				<ul class="ul">
					<li class="li2">何宜霖</li>
					<li class="li2">0968555210</li>
					<li class="li2"><a class="em" href="mailto:ah21027@gmail.com">ah21027@gmail.com</a></li>
					<li class="li2">Music , Games</li>
					<li class="li2">100/100</li>
					<li class="li2">100/100</li>
				</ul>
			</div>
			<div class="col-lg-0 col-md-3"></div>
		</div>
            `
        );
    });

    $("#Edu").click(function () {
        $("#tabs-content").html(
            `
            <div class="row">
                <div class="col-lg-4 col-md-3"></div>
                <div class="col-lg-4 col-md-6 col-12"><h1 class="h1">&ltEducation&gt;</h1></div>
                <div class="col-lg-4 col-md-3"></div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-3"></div>
                <div class="col-lg-4 col-6">
                    <ul class="ul">
                        <li class="li2">建興幼稚園</li>
                        <li class="li2">建國國民小學</li>
                        <li class="li2">福豐國中</li>
                        <li class="li2">壽山高中-廣告設計科</li>
                        <li class="li2">亞東技術學院-資訊管理系</li>
                    </ul>
                </div>
                <div class="col-lg-5 col-6">
                    <ul class="ul">
                        <li class="li2">Clear_</li>
                        <li class="li2">Clear_</li>
                        <li class="li2">Clear_</li>
                        <li class="li2">Clear_</li>
                        <li class="li2">Ing...</li>
                    </ul>
                </div>
                <div class="col-lg-0 col-md-3"></div>
            </div>
            `
        );
    });

    $("#Ski").click(function () {
        $("#tabs-content").html(
            `
            <div class="row">
                <div class="col-lg-4 col-md-3"></div>
                <div class="col-lg-4 col-md-6 col-12"><h1 class="h1">&ltSkills&gt;</h1></div>
                <div class="col-lg-4 col-md-3"></div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-3"></div>
                <div class="col-lg-3 col-6">
                    <ul class="ul">
                        <li class="li2">Aodobe Illustrator</li>
                        <li class="li2">Aodobe Photoshop</li>
                        <li class="li2">Power Point</li>
                        <li class="li2">Social</li>
                        <li class="li2">Web</li>
                        <li class="li2">Word</li>
                    </ul>
                </div>
                <div class="col-lg-5 col-6">
                    <ul class="ul">
                        <li class="li2"><img src="img/lv4.png" class="lv" alt=""></li>
                        <li class="li2"><img src="img/lv4.png" class="lv" alt=""></li>
                        <li class="li2"><img src="img/lv3.png" class="lv" alt=""></li>
                        <li class="li2"><img src="img/lv2.png" class="lv" alt=""></li>
                        <li class="li2"><img src="img/lv3.png" class="lv" alt=""></li>
                        <li class="li2"><img src="img/lv3.png" class="lv" alt=""></li>
                    </ul>
                </div>
                <div class="col-lg-1 col-md-3"></div>
            </div>
            `
        );
    });

    $("#Ex").click(function () {
        $("#tabs-content").html(
            `
            <div class="row">
			<div class="col-lg-4"></div>
			<div class="col-lg-4">
				<h1 class="h1">&ltExperiences&gt;</h1>
			</div>
			<div class="col-lg-4"></div>
		</div>
		<div class="row">
			<div class="col-lg-2"></div>
			<div class="col-lg-4">
				<ul class="ul">
					<li class="li2">1. 通識中心計畫-網頁助理</li>
					<li class="li2">2. 華擎數位科技-實習生</li>
					<li class="li2">3. 產學合作-UI設計</li>
					<li class="li2">4. 喫茶御(手搖飲店)-員工</li>
					<li class="li2">5. 佑青餐廳-外場員工</li>
					<li class="li2">6. 何澤宏水果行-員工</li>
				</ul>
			</div>
			<div class="col-lg-4">
				<ul class="ul">
					<li class="li2">Sep. 2020 - Jun. 2021_</li>
					<li class="li2">Sep. 2020 - Jan. 2021_</li>
					<li class="li2">Apr. - Aug. 2020_</li>
					<li class="li2">Part-time Job_</li>
					<li class="li2">Part-time Job_</li>
					<li class="li2">Lifetime_</li>
				</ul>
			</div>
			<div class="col-lg-1"></div>
		</div>
            `
        );
    });

    $("#Lic").click(function () {
        $("#tabs-content").html(
            `
            <div class="row">
                <div class="col-lg-4 col-md-3"></div>
                <div class="col-lg-4 col-md-6 col-12">
                    <h1 class="h1">&ltLicenses&gt;</h1>
                </div>
                <div class="col-lg-4 col-md-3"></div>
		    </div>
		<div class='row div-cont'">
            <div class="col-2">
                <a href="#"><img src="img/arrow1.png" class="arrow" alt="" onclick="a();"></a>
            </div>
            <div class="col-6">
                <div id="div"></div>
            </div>
            <div class="col-2">
                <a href="#"><img src="img/arrow.png" class="arrow1" alt="" onclick="b();"></a>
            </div>
	    </div>

	<script>
		var img = new Array("img/01.jpg", "img/02.jpg", "img/03.jpg");
		var title = new Array("1. ACA-Adobe Dreamweaver CC", "2. SSE-Adobe Photoshop CC", "3. TQC+ 程式語言 Python");
		var content = "<div><div><h4>" + title[0] + "</h4></div><div class='div-img'><img src='" + img[0] + "'></div></div> ";

		var div = document.getElementById("div");
		div.innerHTML = content;

		i = 0;
		function a() {
			i = i - 1;
			if (i < 0) {
				i = 2;
			}
			div.innerHTML = "<div><div><h4>" + title[i] + "</h4></div><div class='div-img'><img src='" + img[i] + "'></div></div> ";
		}
		function b() {
			i += 1;
			if (i > 2) {
				i = 0;
			}
			div.innerHTML = "<div><div><h4>" + title[i] + "</h4></div><div class='div-img'><img src='" + img[i] + "'></div></div> ";
		}

	</script>
            `
        );
    });

});