function landingActivate()
{
    activateSection('landing');
}

function assignment2Activate()
{
    activateSection('assignment2');
}

function activateSection(section)
{
    document.getElementsByClassName('landing')[0].style.display = 'none';
    document.getElementsByClassName('assignment2')[0].style.display = 'none';

    document.getElementsByClassName(section)[0].style.display = 'block';
}

window.onload = function()
{
    activateSection('landing');
}