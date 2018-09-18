$('input').bind('keypress', function(e) {
			// permite los caracteres 8:backspace, 13:Enter, 32:espacio, 44:coma, 45:guión, 46:punto, 95:piso
			// agregar al array otros caracteres según los códigos de la tabla ASCII
			var caracteresEspeciales = [8, 13, 32, 44, 45, 46, 95];
			var charCode = (e.charCode) ? e.charCode : ((e.keyCode) ? e.keyCode :
				  ((e.which) ? e.which : 0));
			 if (charCode > 31 && (charCode < 64 || charCode > 90) &&
				(charCode < 97 || charCode > 122) &&
				// si se desea que acepte también números, descomente la línea siguiente
				//(charCode < 48 || charCode > 57) &&
				(caracteresEspeciales.indexOf(charCode) == -1)) {
				e.preventDefault();
				return false;
			 }
});