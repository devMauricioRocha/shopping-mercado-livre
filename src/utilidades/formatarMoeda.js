function formatarMoeda (valor, tipoMoeda="BRL"){
    return valor.toLocaleString('pt-br', {style: 'currency', currency: tipoMoeda})
}

export default formatarMoeda 