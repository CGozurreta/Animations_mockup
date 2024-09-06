var MorphMask;


window.onload = function(){

  // - - - - - - -  Vars
  // - - - - - - - - - - 

  var moodExpanded = false;
  var topExpanded = false;
  var phoneHidden = true;

  var treeShown = false;
  var plotShown = false;

  var currencies = document.getElementById("currencies");
  var curr_1 = document.getElementById("curr_1");
  var curr_2 = document.getElementById("curr_2");
  var icon_wBG_1 = document.getElementById("icon_wBG_1");
  var icon_wBG_2 = document.getElementById("icon_wBG_2");
  var icon_wBG_3 = document.getElementById("icon_wBG_3");
  var icon_wBG_4 = document.getElementById("icon_wBG_4");
  var icon_wBG_5 = document.getElementById("icon_wBG_5");
  var icon_wBG_6 = document.getElementById("icon_wBG_6");
  var bg_ico_1 = document.getElementById("bg_ico_1");
  var bg_ico_2 = document.getElementById("bg_ico_2");
  var bg_ico_3 = document.getElementById("bg_ico_3");
  var bg_ico_4 = document.getElementById("bg_ico_4");
  var bg_ico_5 = document.getElementById("bg_ico_5");
  var bg_ico_6 = document.getElementById("bg_ico_6");
  var icon_1 = document.getElementById("icon_1");
  var icon_2 = document.getElementById("icon_2");
  var icon_3 = document.getElementById("icon_3");
  var icon_4 = document.getElementById("icon_4");
  var icon_5 = document.getElementById("icon_5");
  var icon_6 = document.getElementById("icon_6");
  var icon_7 = document.getElementById("icon_7");
  var icon_8 = document.getElementById("icon_8");
  var buffs = document.getElementById("buffs");
  var mood = document.getElementById("mood");
  var hotbar = document.getElementById("hotbar");
  var timeD = document.getElementById("time");
  var topCenter = document.getElementById("topCenter");

  var startBox = document.getElementById("startBox");
  var bg_curr_topcenter = document.getElementById("bg_curr_topcenter");
  var btn_topcenter = document.getElementById("btn_topcenter");
  var innerblue_7 = document.getElementById("innerblue_7");

  var bg_curr_1 = document.getElementById("bg_curr_1");
  var bg_curr_2 = document.getElementById("bg_curr_2");
  var innerblue_4 = document.getElementById("innerblue_4");
  var innerblue_5 = document.getElementById("innerblue_5");

  var bg_moodbar = document.getElementById("bg_moodbar");

  var bar_fun = document.getElementById("bar_fun");
  var bar_energy = document.getElementById("bar_energy");
  var bar_hunger = document.getElementById("bar_hunger");
  var bar_hygiene = document.getElementById("bar_hygiene");
  var mood_bars_bg = document.getElementById("mood_bars_bg");
  var btn_boost = document.getElementById("btn_boost");
  var icon_boost = document.getElementById("icon_boost");
  var bg_btn_boost = document.getElementById("bg_btn_boost"); 
  
  var lineTop = document.getElementById("lineTop");
  var row1 = document.getElementById("row1");
  var row2 = document.getElementById("row2");
  var row3 = document.getElementById("row3");
  var row4 = document.getElementById("row4");
  var row5 = document.getElementById("row5");


  var phoneUI_home = document.getElementById("phoneUI_home");
  var phone_home = document.getElementById("phone_home");
  var phone_myplot = document.getElementById("phone_myplot");
  var phone_tree = document.getElementById("phone_tree");
  var icon_globals_1 = document.getElementById("icon_globals_1");
  var icon_globals_2 = document.getElementById("icon_globals_2");
  var icon_globals_3 = document.getElementById("icon_globals_3");
  var icon_home_1 = document.getElementById("icon_home_1");
  var icon_home_2 = document.getElementById("icon_home_2");
  var icon_home_3 = document.getElementById("icon_home_3");
  var icon_home_4 = document.getElementById("icon_home_4");
  var icon_home_5 = document.getElementById("icon_home_5");
  var icon_home_6 = document.getElementById("icon_home_6");
  var icon_home_7 = document.getElementById("icon_home_7");
  var icon_home_8 = document.getElementById("icon_home_8");
  var icon_home_9 = document.getElementById("icon_home_9");
  var hover_home_1 = document.getElementById("hover_home_1");
  var hover_home_2 = document.getElementById("hover_home_2");
  var hover_home_3 = document.getElementById("hover_home_3");
  var hover_home_4 = document.getElementById("hover_home_4");
  var hover_home_5 = document.getElementById("hover_home_5");
  var hover_home_6 = document.getElementById("hover_home_6");
  var hover_home_7 = document.getElementById("hover_home_7");
  var hover_home_8 = document.getElementById("hover_home_8");
  var hover_home_9 = document.getElementById("hover_home_9");
  var iconbg_1 = document.getElementById("iconbg_1");
  var iconbg_2 = document.getElementById("iconbg_2");
  var iconbg_3 = document.getElementById("iconbg_3");
  var iconbg_4 = document.getElementById("iconbg_4");
  var iconbg_5 = document.getElementById("iconbg_5");
  var iconbg_6 = document.getElementById("iconbg_6");
  var iconbg_7 = document.getElementById("iconbg_7");
  var iconbg_8 = document.getElementById("iconbg_8");
  var iconbg_9 = document.getElementById("iconbg_9");

  var arrow_myplot = document.getElementById("arrow_myplot");
  var plot_btn_1 = document.getElementById("plot_btn_1");
  var plot_btn_2 = document.getElementById("plot_btn_2");
  var plot_btn_3 = document.getElementById("plot_btn_3");
  var plot_btn_4 = document.getElementById("plot_btn_4");
  var plot_btn_5 = document.getElementById("plot_btn_5");
  var plot_btn_6 = document.getElementById("plot_btn_6");
  var plot_btn_bg_1 = document.getElementById("plot_btn_bg_1");
  var plot_btn_bg_2 = document.getElementById("plot_btn_bg_2");
  var plot_btn_bg_3 = document.getElementById("plot_btn_bg_3");
  var plot_btn_bg_4 = document.getElementById("plot_btn_bg_4");
  var plot_btn_bg_5 = document.getElementById("plot_btn_bg_5");
  var plot_btn_bg_6 = document.getElementById("plot_btn_bg_6");
  var plot_btn_txtPH_1 = document.getElementById("plot_btn_txtPH_1");
  var plot_btn_txtPH_2 = document.getElementById("plot_btn_txtPH_2");
  var plot_btn_txtPH_3 = document.getElementById("plot_btn_txtPH_3");
  var plot_btn_txtPH_4 = document.getElementById("plot_btn_txtPH_4");
  var plot_btn_txtPH_5 = document.getElementById("plot_btn_txtPH_5");
  var plot_btn_txtPH_6 = document.getElementById("plot_btn_txtPH_6");
  var plot_btn_icon_3 = document.getElementById("plot_btn_icon_3");
  var plot_btn_icon_4 = document.getElementById("plot_btn_icon_4");
  var plot_btn_icon_5 = document.getElementById("plot_btn_icon_5");
  var plot_btn_icon_6 = document.getElementById("plot_btn_icon_6");

  var tree_arrow = document.getElementById("tree_arrow");

  

  
  

  var sAll = new Array();


  function KillTweens(){
    TweenLite.killTweensOf(lineTop);
    TweenLite.killTweensOf(row1);
    TweenLite.killTweensOf(row2);
    TweenLite.killTweensOf(row3);
    TweenLite.killTweensOf(row4);
    TweenLite.killTweensOf(row5);
    TweenLite.killTweensOf(currencies);
    TweenLite.killTweensOf(curr_1);
    TweenLite.killTweensOf(curr_2);
    TweenLite.killTweensOf(icon_wBG_1);
    TweenLite.killTweensOf(icon_wBG_2);
    TweenLite.killTweensOf(icon_wBG_3);
    TweenLite.killTweensOf(icon_wBG_4);
    TweenLite.killTweensOf(icon_wBG_5);
    TweenLite.killTweensOf(icon_wBG_6);
    TweenLite.killTweensOf(bg_ico_1);
    TweenLite.killTweensOf(bg_ico_2);
    TweenLite.killTweensOf(bg_ico_3);
    TweenLite.killTweensOf(bg_ico_4);
    TweenLite.killTweensOf(bg_ico_5);
    TweenLite.killTweensOf(bg_ico_6);
    TweenLite.killTweensOf(icon_1);
    TweenLite.killTweensOf(icon_2);
    TweenLite.killTweensOf(icon_3);
    TweenLite.killTweensOf(icon_4);
    TweenLite.killTweensOf(icon_5);
    TweenLite.killTweensOf(icon_6);
    TweenLite.killTweensOf(icon_7);
    TweenLite.killTweensOf(icon_8);
    TweenLite.killTweensOf(buffs);
    TweenLite.killTweensOf(mood);
    TweenLite.killTweensOf(hotbar);
    TweenLite.killTweensOf(timeD);
    TweenLite.killTweensOf(topCenter);
    TweenLite.killTweensOf(startBox);
    TweenLite.killTweensOf(bg_curr_topcenter);
    TweenLite.killTweensOf(btn_topcenter);
    TweenLite.killTweensOf(innerblue_7);
    TweenLite.killTweensOf(bg_curr_1);
    TweenLite.killTweensOf(bg_curr_2);
    TweenLite.killTweensOf(innerblue_4);
    TweenLite.killTweensOf(innerblue_5);
    TweenLite.killTweensOf(bg_moodbar);
    TweenLite.killTweensOf(bar_fun);
    TweenLite.killTweensOf(bar_energy);
    TweenLite.killTweensOf(bar_hunger);
    TweenLite.killTweensOf(bar_hygiene);
    TweenLite.killTweensOf(mood_bars_bg);
    TweenLite.killTweensOf(btn_boost);
    TweenLite.killTweensOf(icon_boost);
    TweenLite.killTweensOf(bg_btn_boost);
    

    
    
   // TweenLite.killTweensOf(XXXXX);

   
  }
 

  function InitAni(){
    KillTweens();

    TweenMax.to(timeD, 0, {alpha:0, y:-30});
    TweenMax.to(topCenter, 0, {alpha:0, y:-30});
    TweenMax.to(curr_1, 0, {alpha:0, y:0});
    TweenMax.to(curr_2, 0, {alpha:0, y:0});

    TweenMax.to(icon_wBG_1, 0, {alpha:0, y:30});
    TweenMax.to(icon_wBG_2, 0, {alpha:0, y:30});
    TweenMax.to(icon_wBG_3, 0, {alpha:0, y:30});

    TweenMax.to(hotbar, 0, {alpha:0, y:30});
    TweenMax.to(mood, 0, {alpha:0, y:30});
    TweenMax.to(buffs, 0, {alpha:0, y:30});

    TweenMax.to(startBox, 0, {alpha:0, scale:0.3, transformOrigin:"50% 50%", delay:0});

    TweenMax.to(bar_fun, 0, {alpha:0, x:-110});
    TweenMax.to(bar_energy, 0, {alpha:0, x:-110});
    TweenMax.to(bar_hunger, 0, {alpha:0, x:-110});
    TweenMax.to(bar_hygiene, 0, {alpha:0, x:-110});
    TweenMax.to(mood_bars_bg, 0, {alpha:0});
    TweenMax.to(btn_boost, 0, {alpha:0});

    TweenMax.to(lineTop, 0, {alpha:0});
    TweenMax.to(row1, 0, {alpha:0, y:10});
    TweenMax.to(row2, 0, {alpha:0, y:66});
    TweenMax.to(row3, 0, {alpha:0, y:122});
    TweenMax.to(row4, 0, {alpha:0, y:178});
    TweenMax.to(row5, 0, {alpha:0, y:238});

    TweenMax.to(hover_home_1, 0, {alpha:0});
    TweenMax.to(hover_home_2, 0, {alpha:0});
    TweenMax.to(hover_home_3, 0, {alpha:0});
    TweenMax.to(hover_home_4, 0, {alpha:0});
    TweenMax.to(hover_home_5, 0, {alpha:0});
    TweenMax.to(hover_home_6, 0, {alpha:0});
    TweenMax.to(hover_home_7, 0, {alpha:0});
    TweenMax.to(hover_home_8, 0, {alpha:0});
    TweenMax.to(hover_home_9, 0, {alpha:0});

    TweenMax.to(phone_home, 0, {x:0, y:0});
    TweenMax.to(phoneUI_home, 0, {x:346, y:815, alpha:0, scale:0.15, rotation:8, transformOrigin:"0% 0%", delay:0 })
    TweenMax.to(phoneUI_home, 0, {x:500, transformOrigin:"0% 0%", delay:0.1 })



    ShowStartBox();
  }




  function ShowStartBox(){
    TweenMax.to(startBox, 0.7, {alpha:1, scale:1, transformOrigin:"50% 50%", delay:0.3, ease: Back.easeInOut});
  }


  startBox.onclick = function(){
    KillTweens();
    TweenMax.to(startBox, 0.7, {alpha:0, scale:0.3, transformOrigin:"50% 50%", delay:0, ease: Back.easeInOut});
    AnimInHUD();
  }
  startBox.style.cursor = "pointer";

  function AnimInHUD(){
    var d1 = 0.2;
    var v1 = 0.9;

    TweenMax.to(timeD, v1, {alpha:1, y:0, delay:d1 + 0, ease: Back.easeInOut});
    TweenMax.to(topCenter, v1, {alpha:1, y:0, delay:d1 + 0.1, ease: Back.easeInOut});
    TweenMax.to(curr_1, v1, {alpha:1, y:30, delay:d1 + 0.2, ease: Back.easeInOut});
    TweenMax.to(curr_2, v1, {alpha:1, y:30, delay:d1 + 0.25, ease: Back.easeInOut});

    TweenMax.to(icon_wBG_1, v1, {alpha:1, y:0, delay:d1 + 0.35, ease: Back.easeInOut});
    TweenMax.to(icon_wBG_2, v1, {alpha:1, y:0, delay:d1 + 0.4, ease: Back.easeInOut});
    TweenMax.to(icon_wBG_3, v1, {alpha:1, y:0, delay:d1 + 0.45, ease: Back.easeInOut});

    TweenMax.to(hotbar, v1, {alpha:1, y:0, delay:d1 + 0.5, ease: Back.easeInOut});
    TweenMax.to(mood, v1, {alpha:1, y:0, delay:d1 + 0.65, ease: Back.easeInOut});
    TweenMax.to(buffs, v1, {alpha:1, y:0, delay:d1 + 0.6, ease: Back.easeInOut});

  }

  arrow_myplot.style.cursor = icon_globals_1.style.cursor = icon_globals_2.style.cursor = icon_globals_3.style.cursor = hover_home_1.style.cursor = hover_home_2.style.cursor = hover_home_3.style.cursor = hover_home_4.style.cursor = hover_home_5.style.cursor = hover_home_6.style.cursor = hover_home_7.style.cursor = hover_home_8.style.cursor = hover_home_9.style.cursor = timeD.style.cursor = btn_topcenter.style.cursor = curr_1.style.cursor = curr_2.style.cursor = icon_wBG_1.style.cursor = icon_wBG_2.style.cursor = icon_wBG_3.style.cursor = hotbar.style.cursor = mood.style.cursor = "pointer";


  btn_topcenter.onmouseover = function(){

    TweenMax.to(bg_curr_topcenter, 0.2, {opacity:"0.4"});
    TweenMax.to(icon_7, 0.6, {scale:1.35, transformOrigin:"50% 50%", delay:0, ease: Back.easeOut});
    TweenMax.to(innerblue_7, 0.5, {fill:"#34BDFF"});
    
  }
  btn_topcenter.onmouseout = function(){

    TweenMax.to(bg_curr_topcenter, 0.35, {opacity:"0.203"});
    TweenMax.to(icon_7, 0.5, {scale:1, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
    TweenMax.to(innerblue_7, 0.5, {fill:"#279CFF"});
  }

  btn_topcenter.onclick = function(){
    
    if(moodExpanded) mood.onclick();
    if(!phoneHidden) phoneHide();
    if(!topExpanded){
      TweenMax.to(icon_7, 0.4, {rotation:180, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
      TweenMax.to(bg_curr_topcenter, 0.7, {height:351, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeInOut});

      TweenMax.to(lineTop, 0.5, {alpha:0.25, delay:0.2, ease: Cubic.easeOut});
      TweenMax.to(row1, 0.5, {alpha:1, y:30, delay:0.2, ease: Cubic.easeOut});
      TweenMax.to(row2, 0.5, {alpha:1, y:86, delay:0.25, ease: Cubic.easeOut});
      TweenMax.to(row3, 0.5, {alpha:1, y:142, delay:0.3, ease: Cubic.easeOut});
      TweenMax.to(row4, 0.5, {alpha:1, y:198, delay:0.35, ease: Cubic.easeOut});
      TweenMax.to(row5, 0.5, {alpha:1, y:258, delay:0.4, ease: Cubic.easeOut});

      topExpanded = true;
    } else {
      TweenMax.to(icon_7, 0.4, {rotation:0, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
      TweenMax.to(bg_curr_topcenter, 0.8, {height:58, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeInOut});

      TweenMax.to(lineTop, 0.5, {alpha:0, delay:0.25, ease: Cubic.easeOut});
      TweenMax.to(row1, 0.4, {alpha:0, y:10, delay:0.2, ease: Cubic.easeInOut});
      TweenMax.to(row2, 0.4, {alpha:0, y:66, delay:0.15, ease: Cubic.easeInOut});
      TweenMax.to(row3, 0.4, {alpha:0, y:122, delay:0.1, ease: Cubic.easeInOut});
      TweenMax.to(row4, 0.4, {alpha:0, y:178, delay:0.05, ease: Cubic.easeInOut});
      TweenMax.to(row5, 0.4, {alpha:0, y:238, delay:0, ease: Cubic.easeInOut});
      
      topExpanded = false;
    }
  }


  curr_1.onmouseover = function(){
    TweenLite.killTweensOf(bg_curr_1);
    TweenLite.killTweensOf(icon_5);
    TweenLite.killTweensOf(innerblue_5);
    TweenLite.killTweensOf(icon_wBG_5);
    TweenMax.to(bg_curr_1, 0.2, {opacity:"0.4"});
    TweenMax.to(icon_5, 1.2, {scale:2.4, rotation:5, transformOrigin:"50% 50%", delay:0, ease: Elastic.easeOut});
    TweenMax.to(innerblue_5, 0.5, {fill:"#34BDFF"});
    TweenMax.to(icon_wBG_5, 0.6, {scale:0.75, transformOrigin:"50% 50%", delay:0, ease: Back.easeOut});

  }

  curr_1.onmouseout = function(){
    TweenLite.killTweensOf(bg_curr_1);
    TweenLite.killTweensOf(icon_5);
    TweenLite.killTweensOf(innerblue_5);
    TweenLite.killTweensOf(icon_wBG_5);
    TweenMax.to(bg_curr_1, 0.35, {opacity:"0.203"});
    TweenMax.to(icon_5, 0.5, {scale:1, rotation:0, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
    TweenMax.to(innerblue_5, 0.5, {fill:"#279CFF"});
    TweenMax.to(icon_wBG_5, 0.5, {scale:1, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
  }

  curr_2.onmouseover = function(){
    TweenLite.killTweensOf(bg_curr_2);
    TweenLite.killTweensOf(icon_4);
    TweenLite.killTweensOf(innerblue_4);
    TweenLite.killTweensOf(icon_wBG_4);
    TweenMax.to(bg_curr_2, 0.2, {opacity:"0.4"});
    TweenMax.to(icon_4, 1.2, {scale:2.4, rotation:5, transformOrigin:"50% 50%", delay:0, ease: Elastic.easeOut});
    TweenMax.to(innerblue_4, 0.5, {fill:"#34BDFF"});
    TweenMax.to(icon_wBG_4, 0.6, {scale:0.75, transformOrigin:"50% 50%", delay:0, ease: Back.easeOut});

  }

  curr_2.onmouseout = function(){
    TweenLite.killTweensOf(bg_curr_2);
    TweenLite.killTweensOf(icon_4);
    TweenLite.killTweensOf(innerblue_4);
    TweenLite.killTweensOf(icon_wBG_4);
    TweenMax.to(bg_curr_2, 0.35, {opacity:"0.203"});
    TweenMax.to(icon_4, 0.5, {scale:1, rotation:0, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
    TweenMax.to(innerblue_4, 0.5, {fill:"#279CFF"});
    TweenMax.to(icon_wBG_4, 0.5, {scale:1, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
  }

 

  icon_wBG_1.onmouseover = function(){
    TweenLite.killTweensOf(icon_1);
    TweenLite.killTweensOf(bg_ico_1);
    TweenMax.to(icon_1, 1.2, {scale:1.4, rotation:5, transformOrigin:"50% 50%", delay:0, ease: Elastic.easeOut});
    TweenMax.to(bg_ico_1, 0.6, {scale:0.92, opacity: "0.55", transformOrigin:"50% 50%", delay:0, ease: Back.easeOut});
  }
  icon_wBG_1.onmouseout = function(){
    TweenLite.killTweensOf(icon_1);
    TweenLite.killTweensOf(bg_ico_1);
    TweenMax.to(icon_1, 0.5, {scale:1, rotation:0, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
    TweenMax.to(bg_ico_1, 0.5, {scale:1, opacity: "0.187", transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
  }

  icon_wBG_2.onmouseover = function(){
    TweenLite.killTweensOf(icon_2);
    TweenLite.killTweensOf(bg_ico_2);
    TweenMax.to(icon_2, 1.2, {scale:1.2, rotation:5, transformOrigin:"50% 50%", delay:0, ease: Elastic.easeOut});
    TweenMax.to(bg_ico_2, 0.6, {scale:0.92, opacity: "0.55", transformOrigin:"50% 50%", delay:0, ease: Back.easeOut});
  }
  icon_wBG_2.onmouseout = function(){
    TweenLite.killTweensOf(icon_2);
    TweenLite.killTweensOf(bg_ico_2);
    TweenMax.to(icon_2, 0.5, {scale:1, rotation:0, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
    TweenMax.to(bg_ico_2, 0.5, {scale:1, opacity: "0.187", transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
  }

  icon_wBG_3.onmouseover = function(){
    TweenLite.killTweensOf(icon_3);
    TweenLite.killTweensOf(bg_ico_3);
    TweenMax.to(icon_3, 1.2, {scale:1.6, rotation:10, transformOrigin:"50% 50%", delay:0, ease: Elastic.easeOut});
    TweenMax.to(bg_ico_3, 0.6, {scale:0.92, opacity: "0.55", transformOrigin:"50% 50%", delay:0, ease: Back.easeOut});
  }
  icon_wBG_3.onmouseout = function(){
    TweenLite.killTweensOf(icon_3);
    TweenLite.killTweensOf(bg_ico_3);
    TweenMax.to(icon_3, 0.5, {scale:1, rotation:0, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
    TweenMax.to(bg_ico_3, 0.5, {scale:1, opacity: "0.187", transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
  }


  icon_wBG_6.onmouseover = function(){
    TweenLite.killTweensOf(icon_6);
    TweenLite.killTweensOf(bg_ico_6);
    TweenMax.to(icon_6, 1.2, {scale:1.6, rotation:10, transformOrigin:"50% 50%", delay:0, ease: Elastic.easeOut});
    TweenMax.to(bg_ico_6, 0.6, {scale:1.1, opacity: "0.55", transformOrigin:"50% 50%", delay:0, ease: Back.easeOut});
  }
  icon_wBG_6.onmouseout = function(){
    TweenLite.killTweensOf(icon_6);
    TweenLite.killTweensOf(bg_ico_6);
    TweenMax.to(icon_6, 0.5, {scale:1, rotation:0, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
    TweenMax.to(bg_ico_6, 0.5, {scale:1, opacity: "0.151", transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
  }


  mood.onmouseover = function(){
  
    TweenMax.to(bg_moodbar, 0.2, {opacity:"0.8"});
    TweenMax.to(icon_8, 0.6, {scale:1.35, transformOrigin:"50% 50%", delay:0, ease: Back.easeOut});
    
  }
  mood.onmouseout = function(){
  
    TweenMax.to(bg_moodbar, 0.35, {opacity:"0.587"});
    TweenMax.to(icon_8, 0.5, {scale:1, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
  }

  mood.onclick = function(){
    if(topExpanded) btn_topcenter.onclick();
    if(!phoneHidden) phoneHide();
    if(!moodExpanded){
      TweenMax.to(icon_8, 0.4, {rotation:180, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});

      TweenMax.to(buffs, 0.7, {y:-265, delay:0, ease: Cubic.easeOut});
      TweenMax.to(btn_boost, 0.9, {alpha:1, delay:0.2, ease: Cubic.easeOut});
      TweenMax.to(mood_bars_bg, 0.55, {alpha:0.2, delay:0.25, ease: Cubic.easeOut});

      TweenMax.to(bar_hygiene, 0.55, {alpha:1, x:-100, delay:0.3, ease: Cubic.easeOut});
      TweenMax.to(bar_hunger, 0.55, {alpha:1, x:-100, delay:0.33, ease: Cubic.easeOut});
      TweenMax.to(bar_energy, 0.55, {alpha:1, x:-100, delay:0.36, ease: Cubic.easeOut});
      TweenMax.to(bar_fun, 0.55, {alpha:1, x:-100, delay:0.39, ease: Cubic.easeOut});

      moodExpanded = true;
    } else {
      TweenMax.to(icon_8, 0.4, {rotation:0, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});

      TweenMax.to(btn_boost, 0.5, {alpha:0, delay:0.1, ease: Cubic.easeOut});
      TweenMax.to(mood_bars_bg, 0.5, {alpha:0, delay:0, ease: Cubic.easeOut});

      TweenMax.to(bar_hygiene, 0.55, {alpha:0, x:-110, delay:0.13, ease: Cubic.easeOut});
      TweenMax.to(bar_hunger, 0.55, {alpha:0, x:-110, delay:0.1, ease: Cubic.easeOut});
      TweenMax.to(bar_energy, 0.55, {alpha:0, x:-110, delay:0.07, ease: Cubic.easeOut});
      TweenMax.to(bar_fun, 0.55, {alpha:0, x:-110, delay:0.04, ease: Cubic.easeOut});

      TweenMax.to(buffs, 1, {y:0, delay:0, ease: Cubic.easeInOut});

      moodExpanded = false;
    }
  }

 

  function HoverHomeIcon(targ1, targ2){
    TweenMax.to(targ1, 0.6, {alpha:0.4, ease: Cubic.easeOut});
    TweenMax.to(targ2, 1.2, {scale:1.2, rotation:0, transformOrigin:"50% 50%", delay:0, ease: Elastic.easeOut});
  }
  function HoverHomeIcon_out(targ1, targ2){
    TweenMax.to(targ1, 0.5, {alpha:1, ease: Cubic.easeOut});
    TweenMax.to(targ2, 0.5, {scale:1, rotation:0, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
  }

  hover_home_1.onmouseover = function(){ HoverHomeIcon(iconbg_1,icon_home_1);  }
  hover_home_2.onmouseover = function(){ HoverHomeIcon(iconbg_2,icon_home_2);  }
  hover_home_3.onmouseover = function(){ HoverHomeIcon(iconbg_3,icon_home_3);  }
  hover_home_4.onmouseover = function(){ HoverHomeIcon(iconbg_4,icon_home_4);  }
  hover_home_5.onmouseover = function(){ HoverHomeIcon(iconbg_5,icon_home_5);  }
  hover_home_6.onmouseover = function(){ HoverHomeIcon(iconbg_6,icon_home_6);  }
  hover_home_7.onmouseover = function(){ HoverHomeIcon(iconbg_7,icon_home_7);  }
  hover_home_8.onmouseover = function(){ HoverHomeIcon(iconbg_8,icon_home_8);  }
  hover_home_9.onmouseover = function(){ HoverHomeIcon(iconbg_9,icon_home_9);  }

  hover_home_1.onmouseout = function(){ HoverHomeIcon_out(iconbg_1,icon_home_1);  }
  hover_home_2.onmouseout = function(){ HoverHomeIcon_out(iconbg_2,icon_home_2);  }
  hover_home_3.onmouseout = function(){ HoverHomeIcon_out(iconbg_3,icon_home_3);  }
  hover_home_4.onmouseout = function(){ HoverHomeIcon_out(iconbg_4,icon_home_4);  }
  hover_home_5.onmouseout = function(){ HoverHomeIcon_out(iconbg_5,icon_home_5);  }
  hover_home_6.onmouseout = function(){ HoverHomeIcon_out(iconbg_6,icon_home_6);  }
  hover_home_7.onmouseout = function(){ HoverHomeIcon_out(iconbg_7,icon_home_7);  }
  hover_home_8.onmouseout = function(){ HoverHomeIcon_out(iconbg_8,icon_home_8);  }
  hover_home_9.onmouseout = function(){ HoverHomeIcon_out(iconbg_9,icon_home_9);  }


  icon_globals_1.onmouseover = function(){ 
    TweenMax.to(icon_globals_1, 0.45, {scale:1.3, transformOrigin:"50% 50%", delay:0, ease: Back.easeOut});
  }
  icon_globals_1.onmouseout = function(){ 
    TweenMax.to(icon_globals_1, 0.5, {scale:1, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
  }
  icon_globals_2.onmouseover = function(){ 
    TweenMax.to(icon_globals_2, 0.45, {scale:1.3, transformOrigin:"50% 50%", delay:0, ease: Back.easeOut});
  }
  icon_globals_2.onmouseout = function(){ 
    TweenMax.to(icon_globals_2, 0.5, {scale:1, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
  }

  icon_globals_3.onmouseover = function(){ 
    TweenMax.to(icon_globals_3, 0.45, {scale:1.3, transformOrigin:"50% 50%", delay:0, ease: Back.easeOut});
  }
  icon_globals_3.onmouseout = function(){ 
    TweenMax.to(icon_globals_3, 0.5, {scale:1, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
  }


  hover_home_4.onclick = function(){
    TweenMax.to(phone_home, 0.6, {x:-394, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeInOut});
    TweenMax.to(phone_myplot, 0.6, {x:-1, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeInOut});
    plotShown = true;
  }


  

  function phoneBig(){
    TweenMax.to(phoneUI_home, 1, {x:-1150, y:750, scale:1.45, rotation:-90, transformOrigin:"0% 0%", delay:0, ease: Back.easeOut});
  }
  function phoneSmall(){
    TweenMax.to(phoneUI_home, 1, {x:0, y:0, scale:1, rotation:0, transformOrigin:"0% 0%", delay:0, ease: Back.easeOut});
  }


  function phoneShow(){
    if(topExpanded) btn_topcenter.onclick();
    if(moodExpanded) mood.onclick();
    TweenMax.to(phoneUI_home, 0, {x:346, transformOrigin:"0% 0%", delay:0 })
    TweenMax.to(phoneUI_home, 0.5, {x:0, y:0, alpha:1, scale:1, rotation:0, transformOrigin:"0% 0%", delay:0.1, ease: Cubic.easeInOut});
    phoneHidden = false;
  }
  function phoneHide(){
    
    if(plotShown){
      TweenMax.to(phone_myplot, 0.4, {x:394, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeInOut});
      TweenMax.to(phone_home, 0.4, {x:0, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeInOut});
      TweenMax.to(phoneUI_home, 0.5, {x:346, y:815, alpha:0, scale:0.15, rotation:8, transformOrigin:"0% 0%", delay:0.41, ease: Cubic.easeInOut});
      TweenMax.to(phoneUI_home, 0, {x:500, transformOrigin:"0% 0%", delay:0.92, ease: Cubic.easeInOut});
      plotShown = false;

    } else if(treeShown){
      TweenMax.to(phone_tree, 0.4, {y:790, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeInOut});
      TweenMax.to(phoneUI_home, 0.5, {x:346, y:815, alpha:0, scale:0.15, rotation:8, transformOrigin:"0% 0%", delay:0.41, ease: Cubic.easeInOut});
      TweenMax.to(phoneUI_home, 0, {x:500, transformOrigin:"0% 0%", delay:0.92, ease: Cubic.easeInOut});
      treeShown = false;
      
    } else {
      TweenMax.to(phoneUI_home, 0.5, {x:346, y:815, alpha:0, scale:0.15, rotation:8, transformOrigin:"0% 0%", delay:0, ease: Cubic.easeInOut});
      TweenMax.to(phoneUI_home, 0, {x:500, transformOrigin:"0% 0%", delay:0.6 })
    } 

    phoneHidden = true;
  }


  if(!phoneHidden) phoneHide();
  


  icon_wBG_1.onclick = function(){
    if(phoneHidden){
      phoneShow();
    } else {
      phoneHide();
    }

  }



  hover_home_6.onclick = function(){
    //TweenMax.to(phone_home, 0.6, {x:-394, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeInOut});
    TweenMax.to(phone_tree, 0.9, {y:25, transformOrigin:"50% 50%", delay:0.5, ease: Cubic.easeInOut});
    treeShown = true;
    phoneBig();
    
  }

  tree_arrow.onmouseover = function(){ 
    TweenMax.to(tree_arrow, 0.6, {scale:1.45, transformOrigin:"50% 50%", delay:0, ease: Back.easeOut});
  }
  tree_arrow.onmouseout = function(){ 
    TweenMax.to(tree_arrow, 0.5, {scale:1, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
  }
  tree_arrow.onclick = function(){
    TweenMax.to(phone_tree, 0.6, {y:790, transformOrigin:"50% 50%", delay:0.35, ease: Cubic.easeInOut});
    treeShown = false;
    phoneSmall();
  }
  tree_arrow.style.cursor = "pointer";














  arrow_myplot.onmouseover = function(){ 
    TweenMax.to(arrow_myplot, 0.6, {scale:1.45, transformOrigin:"50% 50%", delay:0, ease: Back.easeOut});
  }
  arrow_myplot.onmouseout = function(){ 
    TweenMax.to(arrow_myplot, 0.5, {scale:1, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
  }
  arrow_myplot.onclick = function(){
    TweenMax.to(phone_home, 0.6, {x:0, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeInOut});
    TweenMax.to(phone_myplot, 0.6, {x:394, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeInOut});
    plotShown = false;
  }





  function CTA_Blue_over(targBG, targIcon){
    TweenMax.to(targBG, 0.25, {fill:"#34BDFF"});
    if(targIcon != undefined) TweenMax.to(targIcon, 0.4, {scale:1.45, transformOrigin:"50% 50%", delay:0, ease: Back.easeOut});
  }
  function CTA_Blue_out(targBG, targIcon){
    TweenMax.to(targBG, 0.45, {fill:"#279CFF", ease: Cubic.easeOut});
    if(targIcon != undefined) TweenMax.to(targIcon, 0.4, {scale:1, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
  }

  function CTA_Green_over(targBG, targIcon){
    TweenMax.to(targBG, 0.25, {fill:"#16CE42"});
    if(targIcon != undefined) TweenMax.to(targIcon, 0.4, {scale:1.45, transformOrigin:"50% 50%", delay:0, ease: Back.easeOut});
  }
  function CTA_Green_out(targBG, targIcon){
    TweenMax.to(targBG, 0.45, {fill:"#02B92D", ease: Cubic.easeOut});
    if(targIcon != undefined) TweenMax.to(targIcon, 0.4, {scale:1, transformOrigin:"50% 50%", delay:0, ease: Cubic.easeOut});
  }

  plot_btn_1.onmouseover = function(){ CTA_Blue_over(plot_btn_bg_1);  }
  plot_btn_1.onmouseout = function(){ CTA_Blue_out(plot_btn_bg_1);  }
  plot_btn_2.onmouseover = function(){ CTA_Green_over(plot_btn_bg_2);  }
  plot_btn_2.onmouseout = function(){ CTA_Green_out(plot_btn_bg_2);  }
  plot_btn_3.onmouseover = function(){ CTA_Blue_over(plot_btn_bg_3, plot_btn_icon_3);  }
  plot_btn_3.onmouseout = function(){ CTA_Blue_out(plot_btn_bg_3, plot_btn_icon_3);  }
  plot_btn_4.onmouseover = function(){ CTA_Blue_over(plot_btn_bg_4, plot_btn_icon_4);  }
  plot_btn_4.onmouseout = function(){ CTA_Blue_out(plot_btn_bg_4, plot_btn_icon_4);  }
  plot_btn_5.onmouseover = function(){ CTA_Blue_over(plot_btn_bg_5, plot_btn_icon_5);  }
  plot_btn_5.onmouseout = function(){ CTA_Blue_out(plot_btn_bg_5, plot_btn_icon_5);  }
  plot_btn_6.onmouseover = function(){ CTA_Blue_over(plot_btn_bg_6, plot_btn_icon_6);  }
  plot_btn_6.onmouseout = function(){ CTA_Blue_out(plot_btn_bg_6, plot_btn_icon_6);  }

  plot_btn_1.style.cursor = plot_btn_2.style.cursor = plot_btn_3.style.cursor = plot_btn_4.style.cursor = plot_btn_5.style.cursor = plot_btn_6.style.cursor = "pointer";

 // plot_btn_3
 // plot_btn_bg_3
 // plot_btn_icon_3

  //blue #279CFF   #34BDFF
  //green  #02B92D   #16CE42
  


  InitAni();

  
}