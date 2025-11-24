try {
    const estudiante = JSON.parse('{ "nombre": "María López", "curso": "JavaScript Básico", "edad": 20 }');
    console.log("Estudiante cargado correctamente:", estudiante);
} catch (e) {
    console.log("Error al cargar datos del estudiante:", e.message);
}


try {
    console.log("Intentando registrar una nueva inscripción a un curso...");

    
    throw new Error("No se pudo completar la inscripción. Cupos agotados.");
    
} catch (e) {
    console.log("Error al inscribir al estudiante:", e.message);
    
} finally {
    console.log("Proceso de inscripción finalizado (con o sin error).");
}
