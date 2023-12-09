import * as SQLite from "expo-sqlite";

    const db = SQLite.openDatabase("app.db");


// Crear tabla si no existe
db.transaction((tx) => {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS trabajos (id INTEGER PRIMARY KEY AUTOINCREMENT, empresa TEXT, tipo_faena TEXT, nombre_faena TEXT, pago_faena TEXT, monto_faena REAL)",
    [],
    (_, result) => console.log("Tabla creada", result),
    (_, error) => console.log("Error al crear tabla:", error)
  );
});

export default db;
