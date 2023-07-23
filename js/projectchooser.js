var projects = document.getElementById("projectlist").querySelectorAll('a');
var projectname = document.getElementById("projectname");
var projectnum = document.getElementById("projectnum");
var prevbutton = document.getElementById("projectlistprev");
var nextbutton = document.getElementById("projectlistnext");

prevbutton.onclick = prevproject;
nextbutton.onclick = nextproject;

var projectindex = 0;

console.log(projects);
setname()

function prevproject(){
    if (projectindex == 0){
        return;
    }
    else{
        projectindex -= 1;
    }

    for(i=0; i < projects.length; i++){
        projects[i].className = "";
        projects[i].classList.add("hiddenprojectlistelement");
    }

    projects[projectindex].classList.remove("hiddenprojectlistelement");
    projects[projectindex].classList.add("shownprojectlistelement");

    setname();
}

function nextproject(){
    if (projectindex >= projects.length - 1){
        return;
    }
    else{
        projectindex += 1;
    }

    for(i=0; i < projects.length; i++){
        projects[i].className = "";
        projects[i].classList.add("hiddenprojectlistelement");
    }

    projects[projectindex].classList.remove("hiddenprojectlistelement");
    projects[projectindex].classList.add("shownprojectlistelement");

    setname();
}

function setname(){
    var name;

    switch (projectindex)
    {
        case 0:
            name = "C4-Command-And-Control";
            break;
        case 1:
            name = "XMRansom";
            break;
        case 2:
            name = "wedoalittletrolling.exe";
            break;
        default:
            name = "[INSERT PROJECT NAME]";
            break;
    }

    console.log(name);

    projectname.textContent = name;
    projectnum.textContent = projectindex + 1 + "/" + projects.length;
}