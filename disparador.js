const { app, BrowserWindow } = require('electron')

exports.app = app; // Exportando el objeto de la aplicación

function abrirCal () {
	// Crea la ventana del navegador.
	var win = new BrowserWindow({
		width: 450,        // Ancho
		height: 440,       // Alto
		frame: false,      // quita los bordes en la ventana
		transparent: true, // hace la ventana trasparente
		icon: 'src/icon.png'   // Icono de la aplicación
	});
	win.setMenu(null)           // Elimina el menu de la aplicación
	win.setResizable(false);    // Evita que la ventana se puede redimencionar
	win.loadFile('src/index.html'); // Carga el archivo index.html
	//win.webContents.openDevTools(); // Debug
	// Exportando la ventana
	exports.win = win;           // Exportamos la ventana
}

app.on('ready', abrirCal);
