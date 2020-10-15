const { Equipo } = require("../entities/club")

function formToEntity(team){
    const {
        nombre,
        abreviatura,
        estadio,
        direccion,
        anoFundacion,
        numeroId,
        telefono,
        website,
        pais,
        fotoEscudo
    } = team

    return new Equipo(
        nombre,
        abreviatura,
        estadio,
        direccion,
        Number(anoFundacion),
        Number(numeroId),
        telefono,
        website,
        pais,
        fotoEscudo
    )

}

module.exports = { formToEntity }