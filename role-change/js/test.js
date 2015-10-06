function init()
{
	document.getElementById("button").addEventListener('click', changeRole);
}

function changeRole(event)
{

	document.getElementById("button").setAttribute('role', 'heading');
}

window.onload = init;