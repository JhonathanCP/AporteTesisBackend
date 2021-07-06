import { Schema, model } from 'mongoose';

const incidentSchema = new Schema ({
    bu: String,
    category: String,
    price: Number,
    imgURL: String
}, {
    timestamps: true,
    versionKey: false
});

export default model('Incident', productSchema);
//modelos
/* Comisaria    --- numerodeCom ubigeocom +++++++ nombre inf109(cantperatend 1-6) inf110_TOT(825)
    Incidencia  --- ubigeohecho numerodeCom dia mes año hora minuto DelitoEspecifico Modalidad  ++++++++++ idUserdenun idPolicia
    Delito  --- tipo --> DelitoEspecifico -- nombre  DelitoGenerico 
    pendiente ROLES
*/