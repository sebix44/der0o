document.addEventListener("DOMContentLoaded", function(){
			
    window.addEventListener("scroll", function(){
        let menubar = document.querySelector('.menu-container');
    let skrol = window.scrollY;
    menubar.style.position = "relative";
        
        console.log(window.scrollY);
        
        if(skrol>220)
        {
            menubar.style.position = "fixed";
            menubar.style.marginTop = "0px";
            

        }
        else {
            menubar.style.position = "relative";
            //menubar.style.top = "200px";
            menubar.style.marginTop = "0px";
        }
    });


    let body_shoulders = document.querySelectorAll('.body-shoulders');
    let body_chest = document.querySelector('.body-chest');
    let body_abs = document.querySelector('.body-abs');
    let body_shoulder = document.querySelectorAll('.body-shoulder');
    let body_back = document.querySelectorAll('.body-back');
    let body_quads = document.querySelectorAll('.body-quads');
    let body_calfs = document.querySelectorAll('.body-calfs');
    let body_hams = document.querySelectorAll('.body-hams');
    let body_glut = document.querySelector('.body-shoulders');

    body_shoulders[1].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-shoulders-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Ramiona";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Biceps</li><li>Triceps</li><li>Mięśnie przedramion</li>";
    
    });

    body_shoulders[1].addEventListener("mousemove", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-shoulders-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Ramiona";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Biceps</li><li>Triceps</li><li>Mięśnie przedramion</li>";
    
    });

    body_shoulders[0].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-shoulders-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Ramiona";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Biceps</li><li>Triceps</li><li>Mięśnie przedramion</li>";
    
    });

    body_shoulders[2].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-shoulders-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Ramiona";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Biceps</li><li>Triceps</li><li>Mięśnie przedramion</li>";
    
    });

    body_shoulders[3].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-shoulders-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Ramiona";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Biceps</li><li>Triceps</li><li>Mięśnie przedramion</li>";
    
    });

    body_chest.addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-chest-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Klatka";
        document.querySelector('.cb-note-ul').innerHTML ="<li>M. piersiowy większy</li><li>M. piersiowy mniejszy</li><li>M. grzebieniowy</li>";
    
    });

    body_abs.addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-abs-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Brzuch";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Prosty</li><li>Skośne</li>";
    });

    body_shoulder[0].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-shoulder-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Barki";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Mięśnie naramienne</li>";
    });

    body_shoulder[1].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-shoulder-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Barki";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Mięśnie naramienne</li>";
    });

    body_shoulder[2].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-shoulder-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Barki";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Mięśnie naramienne</li>";
    });

    body_shoulder[3].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-shoulder-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Barki";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Mięśnie naramienne</li>";
    });

    body_back[0].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-back-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Plecy";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Najszerszy</li><li>Równoległoboczny</li><li>Kaptury</li>";
    
    });

    body_back[1].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-back-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Plecy";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Najszerszy</li><li>Równoległoboczny</li><li>Kaptury</li>";
    
    });

    body_quads[0].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-quads-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Przednia część ud";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Czworogłowe</li><li>M. krawiecki</li>";
    
    });

    body_quads[1].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-quads-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Przednia część ud";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Czworogłowe</li><li>M. krawiecki</li>";
    
    });

    body_hams[0].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-hams-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Grupa kulszowo-goleniowa";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Dwugłowy uda</li><li>Półścięgnisty</li><li>Półbłoniasty</li>";
    });

    body_hams[1].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-hams-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Grupa kulszowo-goleniowa";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Dwugłowy uda</li><li>Półścięgnisty</li><li>Półbłoniasty</li>";
    });

    body_calfs[0].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-calfs-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Łydki";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Brzuchaty</li><li>Płaszczkowaty</li><li>Podeszwowy</li>";
    
    });

    body_calfs[1].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-calfs-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Łydki";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Brzuchaty</li><li>Płaszczkowaty</li><li>Podeszwowy</li>";
    
    });

    body_calfs[2].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-calfs-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Łydki";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Brzuchaty</li><li>Płaszczkowaty</li><li>Podeszwowy</li>";
    
    });

    body_calfs[3].addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-calfs-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Łydki";
        document.querySelector('.cb-note-ul').innerHTML ="<li>Brzuchaty</li><li>Płaszczkowaty</li><li>Podeszwowy</li>";
    
    });
    
    body_glut.addEventListener("mouseenter", function(){
        document.querySelector('.cb-body-img').style.top = "-700px";
        document.querySelector('.cb-glut-img').style.display = "block";
        document.querySelector('.yellow-note').style.display = "block";
        document.querySelector('.green-note').style.display = "block";
        document.querySelector('.yellow-note').style.top = "-700px";
        document.querySelector('.green-note').style.top = "-700px";

        document.querySelector('.cb-note-title').innerHTML = "Pośladki";
        document.querySelector('.cb-note-ul').innerHTML ="<li>M. pośladkowy większy</li><li>M. pośladkowy mniejszy</li>";
    
    });

    
    // mouse leave 

    body_shoulders[0].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-shoulders-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_shoulders[1].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-shoulders-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_shoulders[2].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-shoulders-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_shoulders[3].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-shoulders-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_chest.addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-chest-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_back[0].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-back-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_back[1].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-back-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_abs.addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-abs-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_shoulder[0].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-shoulder-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_shoulder[1].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-shoulder-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_shoulder[2].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-shoulder-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_shoulder[3].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-shoulder-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_quads[0].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-quads-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_quads[1].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-quads-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_calfs[0].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-calfs-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_calfs[1].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-calfs-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_calfs[2].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-calfs-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_calfs[3].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-calfs-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_hams[0].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-hams-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_hams[1].addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-hams-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });

    body_glut.addEventListener("mouseleave", function(){
        document.querySelector('.cb-body-img').style.top = "0";
        document.querySelector('.cb-glut-img').style.display = "none";
        document.querySelector('.yellow-note').style.display = "none";
        document.querySelector('.green-note').style.display = "none";
    });
});

/*function show_shoulders(){
    //document.querySelector('.ramie1').style.display = "block";
    //document.querySelector('.ramie2').style.display = "block";
    document.querySelector('.cb-body-img').style.top = "-700px";
    document.querySelector('.cb-shoulders-img').style.display = "block";
    document.querySelector('.yellow-note').style.display = "block";
    document.querySelector('.green-note').style.display = "block";
    document.querySelector('.yellow-note').style.top = "-700px";
    document.querySelector('.green-note').style.top = "-700px";

    document.querySelector('.cb-note-title').innerHTML = "Ramiona";
    document.querySelector('.cb-note-ul').innerHTML ="<li>Biceps</li><li>Triceps</li><li>Mięśnie przedramion</li>";
}*/

/*function show_quads(){
    document.querySelector('.cb-body-img').style.top = "-700px";
    document.querySelector('.cb-quads-img').style.display = "block";
    document.querySelector('.yellow-note').style.display = "block";
    document.querySelector('.green-note').style.display = "block";
    document.querySelector('.yellow-note').style.top = "-700px";
    document.querySelector('.green-note').style.top = "-700px";

    document.querySelector('.cb-note-title').innerHTML = "Przednia część ud";
    document.querySelector('.cb-note-ul').innerHTML ="<li>Czworogłowe</li><li>M. krawiecki</li>";
}*/

/*function show_hams(){
    document.querySelector('.cb-body-img').style.top = "-700px";
    document.querySelector('.cb-hams-img').style.display = "block";
    document.querySelector('.yellow-note').style.display = "block";
    document.querySelector('.green-note').style.display = "block";
    document.querySelector('.yellow-note').style.top = "-700px";
    document.querySelector('.green-note').style.top = "-700px";

    document.querySelector('.cb-note-title').innerHTML = "Grupa kulszowo-goleniowa";
    document.querySelector('.cb-note-ul').innerHTML ="<li>Dwugłowy uda</li><li>Półścięgnisty</li><li>Półbłoniasty</li>";
}*/

/*function show_calfs(){
    document.querySelector('.cb-body-img').style.top = "-700px";
    document.querySelector('.cb-calfs-img').style.display = "block";
    document.querySelector('.yellow-note').style.display = "block";
    document.querySelector('.green-note').style.display = "block";
    document.querySelector('.yellow-note').style.top = "-700px";
    document.querySelector('.green-note').style.top = "-700px";

    document.querySelector('.cb-note-title').innerHTML = "Łydki";
    document.querySelector('.cb-note-ul').innerHTML ="<li>Brzuchaty</li><li>Płaszczkowaty</li><li>Podeszwowy</li>";
}*/

/*function show_abs(){
    document.querySelector('.cb-body-img').style.top = "-700px";
    document.querySelector('.cb-abs-img').style.display = "block";
    document.querySelector('.yellow-note').style.display = "block";
    document.querySelector('.green-note').style.display = "block";
    document.querySelector('.yellow-note').style.top = "-700px";
    document.querySelector('.green-note').style.top = "-700px";

    document.querySelector('.cb-note-title').innerHTML = "Brzuch";
    document.querySelector('.cb-note-ul').innerHTML ="<li>Prosty</li><li>Skośne</li>";
}*/

/*function show_shoulder(){
    document.querySelector('.cb-body-img').style.top = "-700px";
    document.querySelector('.cb-shoulder-img').style.display = "block";
    document.querySelector('.yellow-note').style.display = "block";
    document.querySelector('.green-note').style.display = "block";
    document.querySelector('.yellow-note').style.top = "-700px";
    document.querySelector('.green-note').style.top = "-700px";

    document.querySelector('.cb-note-title').innerHTML = "Barki";
    document.querySelector('.cb-note-ul').innerHTML ="<li>Mięśnie naramienne</li>";
}*/

/*function show_chest(){
    document.querySelector('.cb-body-img').style.top = "-700px";
    document.querySelector('.cb-chest-img').style.display = "block";
    document.querySelector('.yellow-note').style.display = "block";
    document.querySelector('.green-note').style.display = "block";
    document.querySelector('.yellow-note').style.top = "-700px";
    document.querySelector('.green-note').style.top = "-700px";

    document.querySelector('.cb-note-title').innerHTML = "Klatka";
    document.querySelector('.cb-note-ul').innerHTML ="<li>M. piersiowy większy</li><li>M. piersiowy mniejszy</li><li>M. grzebieniowy</li>";
}*/

/*function show_back(){
    document.querySelector('.cb-body-img').style.top = "-700px";
    document.querySelector('.cb-back-img').style.display = "block";
    document.querySelector('.yellow-note').style.display = "block";
    document.querySelector('.green-note').style.display = "block";
    document.querySelector('.yellow-note').style.top = "-700px";
    document.querySelector('.green-note').style.top = "-700px";

    document.querySelector('.cb-note-title').innerHTML = "Plecy";
    document.querySelector('.cb-note-ul').innerHTML ="<li>Najszerszy</li><li>Równoległoboczny</li><li>Kaptury</li>";
}*/

/*function show_glut(){
    document.querySelector('.cb-body-img').style.top = "-700px";
    document.querySelector('.cb-glut-img').style.display = "block";
    document.querySelector('.yellow-note').style.display = "block";
    document.querySelector('.green-note').style.display = "block";
    document.querySelector('.yellow-note').style.top = "-700px";
    document.querySelector('.green-note').style.top = "-700px";

    document.querySelector('.cb-note-title').innerHTML = "Pośladki";
    document.querySelector('.cb-note-ul').innerHTML ="<li>M. pośladkowy większy</li><li>M. pośladkowy mniejszy</li>";
}*/

/*function hide_shoulders(){
    //document.querySelector('.ramie1').style.display = "block";
    //document.querySelector('.ramie2').style.display = "block";
    document.querySelector('.cb-body-img').style.top = "0";
    document.querySelector('.cb-shoulders-img').style.display = "none";
    document.querySelector('.yellow-note').style.display = "none";
    document.querySelector('.green-note').style.display = "none";
}*/

/*function hide_quads(){
    document.querySelector('.cb-body-img').style.top = "0";
    document.querySelector('.cb-quads-img').style.display = "none";
    document.querySelector('.yellow-note').style.display = "none";
    document.querySelector('.green-note').style.display = "none";
}

function hide_hams(){
    document.querySelector('.cb-body-img').style.top = "0";
    document.querySelector('.cb-hams-img').style.display = "none";
    document.querySelector('.yellow-note').style.display = "none";
    document.querySelector('.green-note').style.display = "none";
}

function hide_glut(){
    document.querySelector('.cb-body-img').style.top = "0";
    document.querySelector('.cb-glut-img').style.display = "none";
    document.querySelector('.yellow-note').style.display = "none";
    document.querySelector('.green-note').style.display = "none";
}

function hide_calfs(){
    document.querySelector('.cb-body-img').style.top = "0";
    document.querySelector('.cb-calfs-img').style.display = "none";
    document.querySelector('.yellow-note').style.display = "none";
    document.querySelector('.green-note').style.display = "none";
}

function hide_abs(){
    document.querySelector('.cb-body-img').style.top = "0";
    document.querySelector('.cb-abs-img').style.display = "none";
    document.querySelector('.yellow-note').style.display = "none";
    document.querySelector('.green-note').style.display = "none";
}

function hide_shoulder(){
    document.querySelector('.cb-body-img').style.top = "0";
    document.querySelector('.cb-shoulder-img').style.display = "none";
    document.querySelector('.yellow-note').style.display = "none";
    document.querySelector('.green-note').style.display = "none";
}

function hide_back(){
    document.querySelector('.cb-body-img').style.top = "0";
    document.querySelector('.cb-back-img').style.display = "none";
    document.querySelector('.yellow-note').style.display = "none";
    document.querySelector('.green-note').style.display = "none";
}

function hide_chest(){
    document.querySelector('.cb-body-img').style.top = "0";
    document.querySelector('.cb-chest-img').style.display = "none";
    document.querySelector('.yellow-note').style.display = "none";
    document.querySelector('.green-note').style.display = "none";
}*/