import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class MarcasService {
    getMarcas() {
        return [{
        id: 1,
        name: 'Samsung'
    },
    {
        id: 2,
        name: 'Huawei'
    },
    {
        id: 3,
        name: 'LG'
    }]
    }
    postMarcas() {
        return "Marca Creada con Exito"
    }
}