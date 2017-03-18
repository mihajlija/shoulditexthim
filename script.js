document.addEventListener("DOMContentLoaded", function(event) { 

            var answer1 = "<h1 class='f6 f2-m f-subheadline-l fw8 tc b'>No.</h1>";
            var answer2 = "<h1 class='f6 f2-m f-subheadline-l fw8 tc b'>Don't text him.</h1>";
            var img = "<img src='http://i3.kym-cdn.com/photos/images/newsfeed/001/179/536/c7f.gif'/>";
            var button = "<a class='f4 link ph4 pv3 mb2 dib white bg-black tracked' href='#0' onclick='compute(answer2, button)'>Are you sure?</a>";
            var aboutBtnOpen = document.getElementById("js-about-open");
            var aboutBtnClose = document.getElementById("js-about-close")
            var aboutPage = document.getElementById("js-about-page");


            function display(html) {
                document.getElementById("main").innerHTML = html;
            }

            function getRandom(min, max) {
                return Math.random() * (max - min) + min;
            }


            function thinkAboutIt(answer) {
                milliseconds = getRandom(1000, 8000);
                setTimeout(function () {
                    display(answer)
                }, milliseconds);
            }

            function compute(answer, button) {
                display(img);
                thinkAboutIt(answer + button);
            }

            aboutBtnOpen.addEventListener('click', function () {
                aboutPage.classList.add("open");
            }, false);

            aboutBtnClose.addEventListener('click', function () {
                aboutPage.classList.remove("open");
            }, false);


            /*
            function shouldITextHim(){
                document.getElementById('unsure').onclick = function() {
                  var unsure = true;
                }​;​

                if (unsure == true)
                   var fuccboi = true;
                if (fuccboi == true)
                     var answer = false;
                return answer;     
            }
            */
        });